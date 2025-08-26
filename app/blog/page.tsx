import { getPostsFromWordpress } from "@/lib/services/wordpress";
import { Suspense } from "react";

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
    <article className="flex flex-col gap-3">
      <h3 className="text-3xl font-serif text-blue-900">{props.title}</h3>
      <div className="text-2xl text-warm-grey-600">{formatDate(props.date)}</div>
      <p className="text-2xl text-warm-grey-800" dangerouslySetInnerHTML={{__html: props.preview}}></p>
    </article>
  );
}

async function BlogRoll({ page }: { page: number }) {

  const posts = await getPostsFromWordpress(page);

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

export default function Blog() {
  return (
    <div className="full-width-container pb-14">
      <div className="content-width-full">
        <h2 className="py-10">Blog</h2>
        <Suspense>
          <BlogRoll page={1} />
        </Suspense>
      </div>
    </div>
  );
}