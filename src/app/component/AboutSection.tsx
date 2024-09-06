"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>TensorFlow</li>
        <li>Numpy</li>
        <li>Pandas</li>
        <li>MySQL</li>
        <li>React</li>
        <li>NextJS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
];

type AboutSectionProps = {};

function AboutSection({}: AboutSectionProps) {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="grid grid-cols-2 gap-8 place-items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={""} alt="About Image" width={500} height={500}></Image>
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae dolorum consequuntur, ex amet cum corrupti harum
            eligendi minima numquam repellat, id quae aliquam!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
