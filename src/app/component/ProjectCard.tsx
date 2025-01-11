"use client";
import MarkdownRenderer from "react-markdown";

import { ProjectSchema } from "@/types/schemas";
import { ArrowRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import React, { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaKaggle } from "react-icons/fa";
import { ImSphere } from "react-icons/im";
import { Dialog, DialogHeader, DialogContent } from "./ui/dialog";
import Link from "next/link";
import { DialogProps } from "@radix-ui/react-dialog";
import { AvatarGroup } from "./avatar-group";
import { techstackIcons } from "./techstack-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { useQuery } from "@tanstack/react-query";
import { getFile } from "@/features/api/actions";

type ProjectCardProps = ProjectSchema & {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<number>>;
  project_id: number;
};

function ProjectCard(props: ProjectCardProps) {
  const {
    project_id,
    isExpanded,
    setIsExpanded,
    project_description,
    project_image,
    project_title,
  } = props;

  const tech_stack = props.tech_stack ?? [];
  const techstackIconGroupComponent = (
    <AvatarGroup
      className="-mr-2 "
      elements={tech_stack.map((item, index) => {
        const Component = techstackIcons[item];
        return (
          <Tooltip delayDuration={500} key={index}>
            <TooltipTrigger>
              <Component className={"size-8 p-2 bg-[#151515] rounded-full "} />
            </TooltipTrigger>
            <TooltipContent className="bg-[#121212] text-white border-none font-mono font-medium">
              {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
            </TooltipContent>
          </Tooltip>
        );
      })}
    />
  );

  return (
    <TooltipProvider>
      <div
        className={cn("flex flex-col size-full bg-[#151515] rounded-xl", {
          "": isExpanded,
        })}
      >
        <ProjectDialog {...props} open={isExpanded} />
        <div className="w-full min-w-52 h-52 flex items-center justify-center relative">
          {project_image ? (
            <Image
              src={project_image}
              fill
              className={"object-scale-down"}
              alt=""
            />
          ) : (
            <ImageIcon className="text-[#A1A1A1]" />
          )}
        </div>
        <div className="flex flex-col h-52 bg-[#080808] rounded-b-xl p-4 text-[#E5E5E5] font-sans">
          <h6 className="text-[#E5E5E5] text-xl font-bold  my2">
            {project_title ?? "Project Title"}
          </h6>
          <p className="line-clamp-3 my-2">{project_description}</p>
          <div className="flex justify-between items-center">
            {techstackIconGroupComponent}
            <Button
              className="shrink-0 flex justify-center items-center self-end border-none m-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-medium  hover:to-pink-500 transition group"
              onClick={() => setIsExpanded(project_id)}
            >
              <span className="">View</span>
              <ArrowRight className="size-4 group-hover:translate-x-2 transition-all -ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export { ProjectCard };

type ProjectDialogProps = ProjectSchema &
  DialogProps & {
    setIsExpanded: Dispatch<SetStateAction<number>>;
  };

function ProjectDialog({
  open,
  project_content,
  project_description,
  project_github_link,
  project_image,
  project_kaggle_link,
  project_other_links,
  project_title,
  project_website_link,
  tech_stack,
  setIsExpanded,
  readme_link,
}: ProjectDialogProps) {
  tech_stack = tech_stack ?? [];
  project_content ??= <></>;

  const query = useQuery({
    queryKey: ["project_dialog", project_title],
    queryFn: async () => {
      const readme_url = readme_link;
      const text = readme_url ? await getFile(readme_url) : null;
      return text;
    },
  });
  const readme_text = query.data as string | null;
  const techstackIconGroupComponent = (
    <AvatarGroup
      className="-mr-2 "
      max_limit={-1}
      elements={tech_stack.map((item, index) => {
        const Component = techstackIcons[item];
        return (
          <Tooltip delayDuration={500} defaultOpen={false} key={index}>
            <TooltipTrigger>
              <Component
                className={"size-8 p-2 mx-2 bg-[#222222] rounded-full "}
              />
            </TooltipTrigger>
            <TooltipContent className="bg-[#121212] text-white border-none font-mono font-medium">
              {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
            </TooltipContent>
          </Tooltip>
        );
      })}
    />
  );

  return (
    <Dialog modal open={open} onOpenChange={() => setIsExpanded(-1)}>
      <DialogContent className="text-[#E5E5E5]  bg-[#121212] border-none overflow-auto max-h-[90vh] w-[95vw] max-w-7xl flex flex-col justify-start p-8">
        <DialogHeader className="font-bold text-3xl bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {project_title ?? "ProjectTitle"}
        </DialogHeader>
        <span
          className=" h-2 my-4 border-white/25"
          style={{
            borderTopWidth: "1px",
          }}
        />
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="my-8 bg-[#080808] h-52 w-96 rounded-md shadow-lg shadow-[#222222] shadow-x-0 shadow-y-0 flex items-center justify-center relative">
            {project_image ? (
              <Image
                src={project_image}
                alt=""
                fill
                className="object-contain"
              />
            ) : (
              <ImageIcon className="text-[#A1A1A1]" />
            )}
          </div>
          <div className="m-8">{project_description}</div>
        </div>
        {tech_stack.length > 0 && (
          <div className="flex items-center border  min-h-20 border-white/25 rounded-xl bg-[#080808] ">
            <div className="text-white h-full shrink-0 px-5 py-2  border-r border-white/25">
              Tech Stack
            </div>
            <div className="flex w-full px-10 items-center justify-center flex-wrap">
              {techstackIconGroupComponent}
            </div>
          </div>
        )}
        <div className="flex gap-2 w-full justify-center md:justify-start">
          {project_github_link && (
            <ProjectLinkButton
              Icon={<FaGithub />}
              href={project_github_link ?? "#"}
              title={"Github Link"}
              className="w-fit justify-center items-center flex gap-2 py-2 px-4 bg-gradient-to-b  from-[#080808] to-[#080808]  hover:from-[#222222] hover:to-[#222222]"
            />
          )}
          {project_kaggle_link && (
            <Link className="contents" href={project_kaggle_link ?? "#"}>
              <Button className="w-fit flex justify-center items-center gap-2 py-2 px-4 bg-gradient-to-b  from-cyan-600 to-cyan-700  hover:from-cyan-600 hover:to-cyan-600">
                <FaKaggle />
                <span>Kaggle Link</span>
              </Button>
            </Link>
          )}
          {project_website_link && (
            <ProjectLinkButton
              className="w-fit justify-center items-center flex gap-2 py-2 px-4 bg-gradient-to-b  from-[#080808] to-[#080808]  hover:from-[#222222] hover:to-[#222222]"
              href={project_website_link ?? "#"}
              Icon={<ImSphere />}
              title="Visit Project"
            />
          )}
          {project_other_links}
        </div>
        <span
          className=" h-2 my-4 border-white/25"
          style={{
            borderTopWidth: "1px",
          }}
        />
        <div>
          {readme_text ? (
            <MarkdownRenderer className="prose prose-a:text-blue-800 prose-p:text-white prose-headings:text-pink-300  prose-ol:text-white">
              {readme_text}
            </MarkdownRenderer>
          ) : (
            project_content
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

type ProjectLinkButtonProps = {
  href?: string;
  className?: string;
  Icon?: React.JSX.Element;
  title?: string;
};
function ProjectLinkButton({
  href,
  className,
  Icon,
  title,
}: ProjectLinkButtonProps) {
  return (
    <Link className="contents" href={href ?? "/"}>
      <Button className={className}>
        {Icon}
        <span>{title}</span>
      </Button>
    </Link>
  );
}
