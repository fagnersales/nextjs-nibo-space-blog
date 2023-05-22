import { type Post } from "contentlayer/generated";
import Link from "next/link";
import { formatDate } from "~/app/utils/formatDate";
import { tagSlugUrl, authorSlugUrl, postSlugUrl } from "~/app/utils/slugs";

type CardProps = { post: Post; index: number };

function Card({ post, index }: CardProps) {
  return (
    <div
      className="grid border-b-2 border-b-neutral-800 pb-2 text-sm text-neutral-400"
      data-title={post.title}
      data-tags={post.tags.join(",")}
    >
      <h1 className="text-lg font-black hover:text-neutral-300 hover:underline">
        <Link href={postSlugUrl(post)}>{`${index + 1}. ${post.title}`}</Link>
      </h1>
      <div className="flex gap-2">
        {post.tags.map((tag, index) => (
          <Link
            href={tagSlugUrl(tag)}
            key={index}
            className="hover:text-neutral-300 hover:underline"
          >{`#${tag.toUpperCase()}`}</Link>
        ))}
      </div>
      <div className="flex place-items-center gap-1">
        <span className="font-semibold text-neutral-400 hover:cursor-pointer hover:text-neutral-300 hover:underline">
          <Link href={authorSlugUrl(post.author)}>{post.author}</Link>
        </span>
        {" · "}
        <span>{formatDate(post.date)}</span>
      </div>
    </div>
  );
}

type CardsProps = { posts: Post[] };

export function Cards({ posts }: CardsProps) {
  return (
    <>
      {posts.length === 0 ? (
        <h1>There are no posts available</h1>
      ) : (
        posts.map((post, index) => (
          <Card post={post} key={post._id} index={index} />
        ))
      )}
    </>
  );
}
