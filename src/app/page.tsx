import { allPosts } from "contentlayer/generated";
import { Cards } from "~/components/cards";
import { SearchBar } from "~/components/search-bar";

export default function Home() {
  return (
    <main className="m-8 grid gap-4 lg:m-auto lg:my-8 lg:max-w-3xl">
      <SearchBar />
      <Cards posts={allPosts} />
    </main>
  );
}
