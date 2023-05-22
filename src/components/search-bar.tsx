"use client";

import Script from "next/script";

export function SearchBar() {
  return (
    <>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Pesquisar
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-neutral-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-full border-2 border-neutral-600 bg-neutral-800 p-2.5 pl-10 text-sm text-neutral-100 focus:border-neutral-500 focus:bg-neutral-700 focus:outline-none"
            placeholder="Pesquisar"
            autoComplete="off"
            required
          />
        </div>
      </form>

      <Script id="search-bar">{`
        const input = document.querySelector('input[id="simple-search"]');
        const posts = document.querySelectorAll("[data-title]");

        if (!input) throw new Error("could not query input");

        input.addEventListener("input", (e) => {
          e.preventDefault();

          const target = e.target;

          if (!target?.value)
            return posts.forEach((post) => post.classList.remove("hidden"));

          for (const post of posts) {
            post.classList.add("hidden");

            if (target.value.toLowerCase().startsWith("#")) {
              const dataTags = post.getAttribute("data-tags");

              if (!dataTags) continue;

              const tags = dataTags.split(",");

              if (tags.length === 0) continue;

              const searchedTag = target.value.replace(/#/g, "").trim();

              const hasTag = tags.some((tag) =>
                tag.toLowerCase().startsWith(searchedTag)
              );

              if (hasTag) post.classList.remove("hidden");
            }

            const title = post.getAttribute("data-title");

            if (!title) continue;

            const matchesTitle = title
              .toLowerCase()
              .startsWith(target.value.toLowerCase().trim());

            if (matchesTitle) post.classList.remove("hidden");
          }
        });
      `}</Script>
    </>
  );
}
