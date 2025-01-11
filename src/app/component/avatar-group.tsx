import { cn } from "@/lib/utils";
import React from "react";

type AvatarGroupProps = {
  elements?: React.JSX.Element[];
  className?: string;
  max_limit?: number | 5 | -1;
};
export const AvatarGroup = ({
  elements,
  // className,
  max_limit,
}: AvatarGroupProps) => {
  elements ??= [];
  max_limit ??= 5;
  let extras = 0;
  if (max_limit != -1 && elements.length > max_limit) {
    extras = elements.length - max_limit + 1;
  }
  return (
    <div className={"flex max-w-fit items-center"}>
      {elements.slice(0, elements.length - extras).map((item, index) => {
        return (
          <div className={cn("translate-x-4", "contents")} key={index}>
            {item}
          </div>
        );
      })}
      {extras > 0 && (
        <div className={"text-white text-sm ml-2"}>+{extras} more</div>
      )}
    </div>
  );
};
