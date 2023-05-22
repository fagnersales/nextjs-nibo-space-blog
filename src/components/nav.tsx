"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <>
      <header
        id="header"
        className="primary-header sticky top-0 grid grid-flow-col place-items-center p-8 opacity-50 transition-opacity duration-500 hover:opacity-100"
      >
        <Link href="/">
          <div className="flex flex-row place-items-center gap-2">
            <Image
              src="logo_no_fill.svg"
              alt="Vercel's logo"
              width={50}
              height={50}
            />
            <span className="hover:animate-pulse-slow text-2xl font-black uppercase text-[#828282]">
              Nibo Space
            </span>
          </div>
        </Link>
      </header>

      <style jsx>{`
        .sticking {
          position: sticky;
          top: 0;
          opacity: 1;
          box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.5);
        }

        #header {
          background: radial-gradient(
            rgba(255, 255, 255, 0.1) 8%,
            transparent 8%
          );
          background-position: 0% 0%;
          background-size: 30px 30px;
          height: 100%;
          width: 100%;
          transition: background-position 500ms ease;
        }

        #header:hover {
          background-position: -10% 0%;
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
