import { delay } from "@/lib/harness";

import { Suspense } from "react";
import BlogParams from "./blog-parms";



function BlogRollSkeleton() {
  const mockPosts = [1, 2, 3];
  return (
    <div className="flex flex-col gap-12">
      {mockPosts.map(post => (
        <BlogPostSkeleton key={post} />
      ))}
    </div>
  );
}

function BlogPostSkeleton() {
  return (
    <article className="flex flex-col">
      <h3 className="text-2xl font-serif text-blue-900 w-full bg-gray-300 animate-pulse">&nbsp;</h3>
      <div className="text-xl text-warm-grey-600 w-full bg-gray-300 animate-pulse">&nbsp;</div>
      <div className="text-xl text-warm-grey-800 w-full bg-gray-300 animate-pulse"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div>
    </article>
  );
}

export default async function Blog({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  return (
    <div className="full-width-container pb-14 pt-20">
      <div className="content-width-full">
        <h2 className="py-10">Blog</h2>
        <Suspense fallback={<BlogRollSkeleton />}>
          <BlogParams searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}