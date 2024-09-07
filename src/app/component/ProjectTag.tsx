"use client";

import { MouseEventHandler } from "react";


type ProjectTagProps = {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
};

function ProjectTag({ isSelected, name , onClick}: ProjectTagProps) {
  const button_format = isSelected
    ? "border-purple-500"
    : "border-slate-600 hover:border-white";
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-full border-2 cursor-pointer px-6 py-3 font-semibold ${button_format}`}
      >
        {name}
      </button>
    </>
  );
}

export { ProjectTag };
