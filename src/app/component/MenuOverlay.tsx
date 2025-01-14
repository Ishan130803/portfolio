"use client";

import { Navlink } from "./Navlink";

type linkSchema = {
  title: string;
  href: string;
};

type MenuOverlayProps = {
  links: linkSchema[];
};

function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="md:hidden flex flex-col py-4 items-center font-bold">
      {links.map((value, index) => {
        return (
          <li key={index} className="hover:bg-[#222222] w-full self-center text-center  transition">
            <Navlink {...value}></Navlink>
          </li>
        );
      })}
    </ul>
  );
}

export { MenuOverlay };
