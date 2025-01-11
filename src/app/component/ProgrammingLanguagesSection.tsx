import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSqlite,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
function ProgrammingLanguagesSection() {
  return (
    <section
      className="px-24 flex flex-col py-12 min-h-fit bg-[#121212] lg:bg-gradient-to-r lg:from-[#151515]  lg:via-[#151515] lg:to-[#080808]"
      id="about"
    >
      <h3 className="text-white text-4xl my-8 font-bold lg:self-center">
        Languages I am aware of
      </h3>
      <div className="self-center w-full md:max-w-2xl flex flex-wrap gap-6 justify-center">
        <TechStackButton Icon={<SiC className="text-blue-600 size-6" />}>
          C
        </TechStackButton>
        <TechStackButton
          Icon={<SiCplusplus className="text-blue-600 size-6" />}
        >
          C++
        </TechStackButton>
        <TechStackButton Icon={<SiPython className="text-yellow-300 size-6" />}>
          Python
        </TechStackButton>
        <TechStackButton Icon={<FaJava className="text-orange-500" />}>
          Java
        </TechStackButton>
        <TechStackButton Icon={<SiHtml5 className="text-orange-600 size-6" />}>
          HTML
        </TechStackButton>
        <TechStackButton Icon={<SiCss3 className="text-blue-600 size-6" />}>
          CSS
        </TechStackButton>
        <TechStackButton
          Icon={<SiJavascript className="text-yellow-400 size-6" />}
        >
          JavaScript
        </TechStackButton>
        <TechStackButton Icon={<SiSqlite className="text-teal-400" />}>
          SQL
        </TechStackButton>
      </div>
    </section>
  );
}

export { ProgrammingLanguagesSection };

type TechStackButtonProps = {
  children?: React.ReactNode;
  Icon?: JSX.Element;
};
function TechStackButton({ children, Icon }: TechStackButtonProps) {
  return (
    <div
      className="border- w-fit py-4 px-6
     rounded-full flex gap-2 items-center justify-center bg-[#151515] hover:bg-gradient-to-b hover:from-current hover:to-[#121212] transition duration-200"
    >
      {Icon}
      <span className="text-white font-bold text-lg capitalize select-none">
        {children}
      </span>
    </div>
  );
}
