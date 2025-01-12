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
  SiHono,
  SiReactquery,
} from "react-icons/si";

export const techstackIcons: Record<
  frameworks,
  {
    name: string;
    icon: ({ className }: { className: string }) => React.JSX.Element;
  }
> = {
  tensorflow: {
    name: "Tensorflow",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiTensorflow className="text-orange-500 size-full" />
      </div>
    ),
  },
  numpy: {
    name: "Numpy",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiNumpy className="text-blue-600 size-full" />
      </div>
    ),
  },
  pandas: {
    name: "Pandas",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiPandas className="text-blue-400 size-full" />
      </div>
    ),
  },
  pytorch: {
    name: "PyTorch",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiPytorch className="text-orange-700 size-full" />
      </div>
    ),
  },
  react: {
    name: "React",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiReact className="text-blue-800 size-full" />
      </div>
    ),
  },
  tailwind: {
    name: "TailwindCSS",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiTailwindcss className="text-teal-400 size-full" />
      </div>
    ),
  },
  nextjs: {
    name: "Next.js",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiNextdotjs className="text-white size-full" />
      </div>
    ),
  },
  mongodb: {
    name: "MongoDB",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiMongodb className="text-green-500 size-full" />
      </div>
    ),
  },
  sql: {
    name: "SQK",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiSqlite className="text-teal-600 size-full" />
      </div>
    ),
  },
  "tanstack query": {
    name: "Tanstack Query",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiReactquery className="text-yellow-500 size-full" />
      </div>
    ),
  },
  honojs: {
    name: "Hono.js",
    icon: ({ className }: { className: string }) => (
      <div className={className}>
        <SiHono className="text-orange-600 size-full" />
      </div>
    ),
  },
};
