"use client";

import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type ProjectCardProps = {
  image_url: string;
  title: string;
  description: string;
  tags: string[];
  git_url: string;
  preview_url: string;
};

function ProjectCard({ image_url, title, description, git_url, preview_url }: ProjectCardProps) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-contain-"
        style={{ background: `url(${image_url})`}}
      >
        <div className="overlay flex absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-300 items-center justify-center rounded-t-xl">
          <Link href={git_url} target="_blank" className="cursor-pointer rounded-full group/link flex flex-col items-center">
            <CodeBracketIcon className="h-12 w-12 text-[#ADB7BE] border-2 border-[#ADB7E] m-2 rounded-full p-2 group-hover/link:text-white group-hover/link:border-white group-hover/link:bg-slate-800 peer"></CodeBracketIcon>
            <span className="text-sm text-white font-medium bg-slate-800 py-1 px-2 rounded-lg absolute mt-16 opacity-0 peer-hover:opacity-100 ">Code</span>
          </Link>
          <Link href={preview_url} className="cursor-pointer rounded-full group/link flex flex-col items-center">
            <EyeIcon className="h-12 w-12 text-[#ADB7BE] border-2 border-[#ADB7E] m-2 rounded-full p-2 group-hover/link:text-white group-hover/link:border-white group-hover/link:bg-slate-800 peer"></EyeIcon>
            <span className="text-sm text-white font-medium bg-slate-800 py-1 px-2 rounded-lg absolute mt-16 opacity-0 peer-hover:opacity-100 ">Preview</span>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}

export { ProjectCard };
