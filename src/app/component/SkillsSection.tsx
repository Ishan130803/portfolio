"use client";
import { mySkills } from "@/data/personal-data";
import { FaCircle } from "react-icons/fa6";

type SkillsSectionProps = object;

function SkillsSection({}: SkillsSectionProps) {
  return (
    <section
      className="px-8 md:px-24 flex flex-col py-12 min-h-fit bg-[#121212]"
      id="about"
    >
      <h3 className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent text-4xl my-8 font-bold md:self-center">
        Skills I have
      </h3>
      <div className="self-center w-full flex flex-wrap gap-6 justify-center">
        {mySkills.map((item, index) => (
          <SkillBadge key={index}>{item}</SkillBadge>
        ))}
      </div>
    </section>
  );
}

export { SkillsSection };

type SkillBadgeProps = {
  children?: React.ReactNode;
  Icon?: JSX.Element;
};
function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <div
      className="border- w-fit py-4 px-6
     rounded-full flex gap-2 items-center justify-center bg-[#151515] hover:bg-gradient-to-b hover:from-current hover:to-[#121212] transition duration-200"
    >
      {<FaCircle className="size-3 text-blue-500" />}
      <span className="text-white font-bold text-lg capitalize select-none ">
        {children}
      </span>
    </div>
  );
}
