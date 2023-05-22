import { allPosts, allProfiles } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "~/app/utils/formatDate";
import { authorSlugUrl, tagSlugUrl } from "~/app/utils/slugs";
import { Mdx } from "~/components/mdx";

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug }));

function Author(props: { name: string; date: string }) {
  const profile = allProfiles.find((profile) => profile.name === props.name);

  if (!profile) throw new Error("profile not found");

  return (
    <div className="my-4 flex place-items-center justify-between bg-gray-700 p-4 md:my-8">
      <div className="flex place-items-center gap-2">
        <Image
          src={profile.imageUrl}
          alt={`${props.name}'s profile image`}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full bg-slate-600"
        />
        <h2 className="text-sm font-bold text-gray-100 hover:cursor-pointer md:text-lg">
          <Link href={authorSlugUrl(props.name)}>{props.name}</Link>
        </h2>
      </div>
      <h2 className="text-sm font-semibold text-gray-100">
        {formatDate(props.date)}
      </h2>
    </div>
  );
}

export const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <section className="m-8 grid md:gap-2 lg:m-auto lg:my-8 lg:max-w-3xl">
      <h1 className="text-3xl font-extrabold">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags.map((tag, index) => (
          <Link
            href={tagSlugUrl(tag)}
            key={index}
            className="font-bold text-gray-500 hover:cursor-pointer hover:text-gray-400 hover:underline"
          >{`#${tag.toUpperCase()}`}</Link>
        ))}
      </div>
      <Author date={post.date} name={post.author} />
      <Mdx code={post.body.code} />
    </section>
  );
};

export default PostPage;
