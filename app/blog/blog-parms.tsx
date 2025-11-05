import { getPostsFromWordpress } from "@/lib/services/wordpress";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { Posts } from "@/lib/model/wordpress";
import Link from "next/link";

function formatDate(date: Date) {
  // I really hate JavaScript some days.
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function BlogPost(props: {
  title: string,
  slug: string,
  date: Date,
  preview: string
}) {
  return (
    <article className="flex flex-col">
      <Link href={`/blog/${props.slug}`}>
        <h3 className="text-2xl font-serif text-blue-900">{props.title}</h3>
      </Link>
      <div className="text-xl text-warm-grey-600">{formatDate(props.date)}</div>
      <div className="text-xl text-warm-grey-800" dangerouslySetInnerHTML={{ __html: props.preview }}></div>
    </article>
  );
}

export 

async function BlogRoll({ posts }: {
  posts: Posts
}) {
  return (
    <div className="flex flex-col gap-12">
      {posts.posts.map(post => (
        <BlogPost
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={new Date(post.date)}
          preview={post.excerpt}
        />
      ))}
    </div>
  );
}

export default async function BlogParams({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const page = parseInt(params['page'] as string ?? '1');
  const posts = await getPostsFromWordpress(page);
  return (
    <>
      <BlogRoll posts={posts} />
      <div className="flex my-6">
        {page > 1 ? (
          <Link className="w-16 text-blue-500" href={`/blog?page=${page - 1}`}>
            <ArrowLeftCircleIcon />
          </Link>
        )
          : (
            <span className="w-16 text-blue-100">
              <ArrowLeftCircleIcon />
            </span>
          )
        }
        {page < posts.totalPages ? (
          <Link className="w-16 text-blue-500" href={`/blog?page=${page + 1}`}>
            <ArrowRightCircleIcon />
          </Link>
        )
          : (
            <span className="w-16 text-blue-100">
              <ArrowRightCircleIcon />
            </span>
          )
        }
      </div>
    </>
  )
}