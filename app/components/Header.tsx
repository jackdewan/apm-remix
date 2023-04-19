import { Link } from "@remix-run/react";
import Logo from "./Logo";
import { HamburgerSpring } from "./HamburgerSpring";
import { useState } from "react";
import { Config } from "~/utils/Config";

const chevronRight = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </span>
);

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="w-full sticky top-0 z-10 bg-primary">
      <div className="h-14 md:h-20 container flex justify-between items-center">
        <div className="">
          <Logo setOpen={setOpen} />
        </div>
        <div className="md:hidden text-white">
          <button
            onClick={() => setOpen(!open)}
            className={`hamburger hamburger--spring ${open ? "is-active" : ""}`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="hidden md:block space-x-8">
          {Config.menuLinks.map((link) => (
            <Link
              key={link.slug}
              className="text-white hover:border-b-secondary hover:border-b-2"
              to={link.slug}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`fixed left-0 bg-primary z-10 text-white h-full w-full transition-all ease-in duration-500 text-cream  overflow-x-scroll pb-52 lg:hidden ${
          open ? "top-0 mt-14 lg:mt-20" : "-top-full"
        }`}
      >
        <div className="relative top-10 w-full container text-center">
          <ul className="space-y-5 text-2xl font-extrabold">
            {Config.menuLinks.map((link) => (
              <li className="" key={link.slug}>
                <Link
                  className="flex justify-start items-center "
                  to={link.slug}
                  onClick={() => setOpen(false)}
                >
                  {link.title} {chevronRight}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
