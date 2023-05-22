import { allPosts } from "contentlayer/generated";
import { NextPage } from "next";
import { tagSlug } from "~/app/utils/slugs";
import { Cards } from "~/components/cards";
import { InitialPageButton } from "~/components/initial-page";

export const generateStaticParams = () =>
  allPosts.map((post) => post.tags.map((tag) => ({ tag: tagSlug(tag) }))).flat();

const TagPage: NextPage<{ params: { tag: string } }> = ({ params }) => {
  const posts = allPosts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === params.tag.toLowerCase())
  );

  return (
    <section className="m-8 grid gap-4 lg:m-auto lg:my-8 lg:max-w-3xl">
      <h1 className="border-b-2 border-b-gray-700 pb-4 text-3xl font-bold text-gray-200">
        {`#${params.tag.toUpperCase()}`}
      </h1>
      <Cards posts={posts} />
      <InitialPageButton />
    </section>
  );
};

export default TagPage;
