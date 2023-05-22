import { allPosts } from "contentlayer/generated";
import { Cards } from "~/components/cards";

export default function Home() {
  return (
    <main className="m-8 grid gap-4 lg:m-auto lg:my-8 lg:max-w-3xl">
      <Cards posts={allPosts} />
    </main>
  );
}
