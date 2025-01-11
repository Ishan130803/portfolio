import { frameworks } from "@/types/schemas";
import React from "react";
import {
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export const techstackIcons: Record<
  frameworks,
  ({ className }: { className: string }) => React.JSX.Element
> = {
  tensorflow: ({ className }: { className: string }) => (
    <div className={className}>
      <SiTensorflow className="text-orange-500 size-full" />
    </div>
  ),
  numpy: ({ className }: { className: string }) => (
    <div className={className}>
      <SiNumpy className="text-blue-600 size-full" />
    </div>
  ),
  pandas: ({ className }: { className: string }) => (
    <div className={className}>
      <SiPandas className="text-blue-400 size-full" />
    </div>
  ),
  pytorch: ({ className }: { className: string }) => (
    <div className={className}>
      <SiPytorch className="text-orange-700 size-full" />
    </div>
  ),
  react: ({ className }: { className: string }) => (
    <div className={className}>
      <SiReact className="text-blue-800 size-full" />
    </div>
  ),
  tailwind: ({ className }: { className: string }) => (
    <div className={className}>
      <SiTailwindcss className="text-teal-400 size-full" />
    </div>
  ),
  nextjs: ({ className }: { className: string }) => (
    <div className={className}>
      <SiNextdotjs className="text-white size-full" />
    </div>
  ),
  mongodb: ({ className }: { className: string }) => (
    <div className={className}>
      <SiMongodb className="text-green-500 size-full" />
    </div>
  ),
  sql: ({ className }: { className: string }) => (
    <div className={className}>
      <SiSqlite className="text-teal-600 size-full" />
    </div>
  ),
};
