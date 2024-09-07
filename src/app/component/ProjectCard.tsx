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

function ProjectCard({ image_url, title, description }: ProjectCardProps) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${image_url})`, backgroundSize: "contain" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] hidden group-hover:flex group-hover:opacity-80 transition-all duration-1000 items-center justify-center rounded-t-xl">
          <Link href={"/"} className="cursor-pointer rounded-full group/link ">
            <CodeBracketIcon className="h-12 w-12 text-[#ADB7BE] border-2 border-[#ADB7E] m-2 rounded-full p-2 group-hover/link:text-white group-hover/link:border-white group-hover/link:bg-slate-800"></CodeBracketIcon>
          </Link>
          <Link href={"/"} className="cursor-pointer group/link ">
            <EyeIcon className="h-12 w-12 text-[#ADB7BE] border-2 border-[#ADB7E] m-2 rounded-full p-2 group-hover/link:text-white group-hover/link:border-white group-hover/link:bg-slate-800"></EyeIcon>
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
