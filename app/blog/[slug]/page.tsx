
import Ebook from "@/app/ebook";
import { NotFoundError } from "@/lib/model/app-error";
import { getPostFromWordpress, getPostsFromWordpress } from "@/lib/services/wordpress";
import { Metadata } from "next";
import { Suspense } from "react";
import Post from "./post";

export type PostProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PostProps) {
  return (
    <>
      <div className="full-width-container pb-14 pt-20">
        <Suspense>
          <Post params={params} />
        </Suspense>
      </div>
      <Ebook />
    </>
  );
}

export async function generateMetadata(
  { params }: PostProps,
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