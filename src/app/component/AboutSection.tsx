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
    <section
      className="text-white grid grid-cols-2 gap-8 place-items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      id="about"
    >
      <Image
        src={"/ishan-photo.jpg"}
        alt="About Image"
        className="rounded-xl"
        width={500}
        height={500}
      ></Image>
      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
          <p>
            I am Ishan Srivastava, a student of Delhi Technological University,
            New Delhi currently pursuing Information Technology. I am also an
            alumni of DPS RK Puram, New Delhi.
          </p>
          <br />
          <p>
            My passion for all things related to computers, whether software or
            hardware, drives my continuous pursuit of knowledge. This curiosity
            has led me to gain experience across various fields, including Web
            Development, Machine Learning, and basic Hardware (Robotics).
            Currently, I'm exploring research opportunities in remote sensing
            data, eager to expand my expertise even further.
          </p>
        </p>
        <div className="flex flex-row mt-8 h-full">
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
    </section>
  );
}

export { AboutSection };
