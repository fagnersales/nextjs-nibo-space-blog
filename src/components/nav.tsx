"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { LoginButton } from "./login";

export function Nav() {
  return (
    <>
      <header className="primary-header sticky top-0 grid place-items-center bg-neutral-900 p-8 opacity-50 transition-opacity duration-500 hover:opacity-100">
        <div className="grid w-full max-w-3xl grid-flow-col items-center justify-between">
          <Link href="/">
            <div className="flex flex-row place-items-center gap-2">
              <Image
                src="/logo_no_fill.svg"
                alt="Nibo Space's logo"
                width={50}
                height={50}
              />
              <span className="hover:animate-pulse-slow text-2xl font-black uppercase text-[#828282]">
                Nibo Space
              </span>
            </div>
          </Link>
          <LoginButton />
        </div>
      </header>

      <style jsx>{`
        .sticking {
          position: sticky;
          top: 0;
          opacity: 1;
          box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.5);
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
