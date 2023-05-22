"use client";

import Script from "next/script";

export function Nav() {
  return (
    <>
      <header className="primary-header sticky top-0 grid grid-flow-col place-items-center bg-gray-700 p-8 opacity-50 transition-opacity duration-500 hover:opacity-100">
        <span className="hover:animate-pulse-slow text-2xl font-black uppercase text-white">
          <a href="/">Nibo Space</a>
        </span>
      </header>

      <style jsx>{`
        .sticking {
          position: sticky;
          top: 0;
          opacity: 1;
          box-shadow: 0 2px 1px 1px rgba(0,0,0, .5);
        }
      `}</style>

      <Script id="nav-scroll">{`
        const primaryHeader = document.querySelector(".primary-header");
        const scrollWatcher = document.createElement("div");

        scrollWatcher.setAttribute("data-scroll-watcher", "");

        primaryHeader.before(scrollWatcher);

        const navObserver = new IntersectionObserver((entries) => {
          primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
        }, { rootMargin: "100px 0px 0px 0px" });

        navObserver.observe(scrollWatcher);
    `}</Script>
    </>
  );
}