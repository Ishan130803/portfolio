"use client"

import { Navlink } from "./Navlink";

type linkSchema = {
  title : string,
  href : string
}

type MenuOverlayProps = {
  links : linkSchema[]
};

function MenuOverlay({ links }: MenuOverlayProps) {
  
  return <ul className="flex flex-col py-4 items-center ">{
    links.map((value,index) => {
      return <li><Navlink {...value} key={index}></Navlink></li>
    })
  }

  </ul>;
}

export { MenuOverlay };