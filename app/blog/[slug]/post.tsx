import { NotFoundError } from "@/lib/model/app-error";
import { PostProps } from "./page";
import { getPostFromWordpress } from "@/lib/services/wordpress";

export default async function Post({ params }: PostProps) {
  const post = await getPostFromWordpress((await params).slug);

  if (post instanceof NotFoundError) {
    return (
      <p>Hmmm... That post could not be found.</p>
    );
  }

  return (
    <div className="content-width-full">
      <h2 className="py-10 text-4xl lg:px-20">{post.title}</h2>
      <article className="wordpress lg:px-20 flex flex-col gap-5 text-xl" dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
}