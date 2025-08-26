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
          <h2 className="py-10">{post.title}</h2>
          <div className="flex flex-col gap-5 text-2xl" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      </div>
    );
  }
}