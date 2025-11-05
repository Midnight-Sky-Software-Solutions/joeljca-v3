
import Ebook from "@/app/ebook";
import { NotFoundError } from "@/lib/model/app-error";
import { getPostFromWordpress, getPostsFromWordpress } from "@/lib/services/wordpress";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  'use cache'
  const post = await getPostFromWordpress((await params).slug);

  if (post instanceof NotFoundError) {
    return (
      <p>Hmmm... That post could not be found.</p>
    );
  } else {
    return (
      <>
        <div className="full-width-container pb-14 pt-20">
          <div className="content-width-full">
            <h2 className="py-10 text-4xl lg:px-20">{post.title}</h2>
            <article className="wordpress lg:px-20 flex flex-col gap-5 text-xl" dangerouslySetInnerHTML={{__html: post.content}}></article>
          </div>
        </div>
        <Ebook />
      </>
    );
  }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const post = await getPostFromWordpress((await params).slug);

  if (post instanceof NotFoundError) {
    return ({
      title: 'Post Not Found | Joel Johnston'
    });
  }

  return ({
    title: post.title +  ' | Joel Johnston'
  })
}

export async function generateStaticParams() {
  const posts = await getPostsFromWordpress(1, 100);
  return posts.posts.map(post => ({ slug: post.slug }));
}