import { NotFoundError } from "@/lib/model/app-error";
import { getPostFromWordpress } from "@/lib/services/wordpress";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const post = await getPostFromWordpress((await params).slug);

  if (post instanceof NotFoundError) {
    return (
      <p>Hmmm... That post could not be found.</p>
    );
  } else {
    return (
      <div className="full-width-container pb-14">
        <div className="content-width-full">
          <h2 className="py-10 text-4xl px-20">{post.title}</h2>
          <article className="px-20 flex flex-col gap-5 text-2xl" dangerouslySetInnerHTML={{__html: post.content}}></article>
        </div>
      </div>
    );
  }
}