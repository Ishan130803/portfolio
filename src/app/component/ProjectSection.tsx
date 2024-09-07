"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

type IProjectsData = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};
const projectsData: IProjectsData[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is my personal portfolio website",
    image: "/portfolio.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/Ishan130803/portfolio",
    previewUrl: "https://github.com/Ishan130803/portfolio",
  },
  // {
  //   id: 2,
  //   title: "Potography Portfolio Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "ml"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

function ProjectSection() {
  const [tag, setTag] = useState("all");
  const filtered_projects = projectsData.filter((project) => {
    if (tag === 'all') {
      return true
    }
    return project.tag.includes(tag)
  })
  return (
    <section id="section">
    
      <h2 className="text-center text-4xl font-bold text-white ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          isSelected={tag == "all"}
          name="All"
          onClick={() => setTag("all")}
        />
        <ProjectTag
          isSelected={tag == "web"}
          name="Web"
          onClick={() => setTag("web")}
        />
        <ProjectTag
          isSelected={tag == "ml"}
          name="ML"
          onClick={() => setTag("ml")}
        />
      </div>

      <section className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filtered_projects.map((value, index) => {
          return (
            <ProjectCard
              key={value.id}
              description={value.description}
              image_url={value.image}
              tags={value.tag}
              title={value.title}
              git_url={value.gitUrl}
              preview_url={value.previewUrl}
            ></ProjectCard>
          );
        })}
      </section>
    </section>
  );
}

export { ProjectSection };
