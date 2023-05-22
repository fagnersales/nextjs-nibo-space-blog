import { Post, Profile, allPosts, allProfiles } from "contentlayer/generated";
import { authorSlug } from "../utils/slugs";
import { Cards } from "~/components/cards";
import { InitialPageButton } from "~/components/initial-page";
import Image from "next/image";
import { Mdx } from "~/components/mdx";
import { NextPage } from "next";

export const generateStaticParams = () =>
  allPosts.map((post) => ({ author: authorSlug(post.author) }));

const AuthorPage: NextPage<{ params: { author: string } }> = ({ params }) => {
  const postPredicate = (post: Post) =>
    authorSlug(post.author) === params.author;

  const profilePredicate = (profile: Profile) =>
    authorSlug(profile.name) === params.author;

  const author = allPosts.find(postPredicate)?.author;
  const profile = allProfiles.find(profilePredicate);

  if (!author || !profile) return <div>Something went wrong</div>;

  const posts = allPosts.filter(postPredicate);

  return (
    <section className="m-8 grid gap-4 lg:m-auto lg:my-8 lg:max-w-3xl">
      <div className="flex place-items-center gap-4">
        <Image
          src={profile.imageUrl}
          alt={`${profile.name}'s profile image`}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full bg-black"
        />
        <div>
          <h1 className="pb-4 text-3xl font-bold">{author}</h1>
          <h1>{`Hello that is my bio!`}</h1>
        </div>
      </div>
      <Mdx code={profile.body.code} />
      <h1 className="border-b-2 border-b-gray-700 pb-4 text-3xl font-bold">
        Posts
      </h1>
      <Cards posts={posts} />
      <InitialPageButton />
    </section>
  );
};

export default AuthorPage;
