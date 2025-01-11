"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/project-data";
import { ProjectSchema } from "@/types/schemas";

const projectsData: ProjectSchema[] = projects

function ProjectSection() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);

  return (
    <section
      id="projects"
      className="px-24 py-12 min-h-[calc(100vh-112px)] bg-[#121212]"
    >
      <h2 className="text-center text-4xl my-6 font-bold text-white ">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div> */}

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3 xl:grid-cols-4">
        {projectsData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              project_id={index}
              isExpanded={selectedProjectIndex === index}
              setIsExpanded={setSelectedProjectIndex}
              {...value}
            ></ProjectCard>
          );
        })}
      </section>
    </section>
  );
}

export { ProjectSection };
