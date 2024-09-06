"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Navlink } from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";
import { MyLOGO } from "./MyLOGO";

type NavbarProps = {};

const navlinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar({}: NavbarProps) {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mx-auto bg-[#121212]">
      <div className="flex flex-wrap justify-between items-center mx-auto p-6">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          <MyLOGO />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white  hover:border-white"
              onClick={() => {
                setNavBarOpen(false);
              }}
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          ) : (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white  hover:border-white"
              onClick={() => {
                setNavBarOpen(true);
              }}
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block">
          <ul className="flex p-4 md:p-0 flex-row md:flex-row md:space-x-8 mt-0">
            {navlinks.map((value, index) => {
              return (
                <li key={index}>
                  <Navlink {...value}></Navlink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlay links={navlinks} />}
    </nav>
  );
}

export { Navbar };
