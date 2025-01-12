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

function TechStackSection() {
  return (
    <section className="px-8 md:px-24 flex flex-col py-12 min-h-fit bg-[#151515] lg:via-[#151515] lg:bg-gradient-to-r lg:from-[#080808] lg:to-[#151515]">
      <h3 className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent text-4xl my-8 font-bold  md:self-center py-2">
        Tech Stack
      </h3>
      <div className="self-center w-full md:max-w-2xl flex flex-wrap gap-6 justify-center">
        <TechStackButton
          Icon={<SiTensorflow className="text-orange-500 size-6" />}
        >
          Tensorflow
        </TechStackButton>
        <TechStackButton Icon={<SiNumpy className="text-blue-600 size-6" />}>
          Numpy
        </TechStackButton>
        <TechStackButton Icon={<SiPandas className="text-blue-400 size-6" />}>
          Pandas
        </TechStackButton>
        <TechStackButton Icon={<SiPytorch className="text-orange-700" />}>
          PyTorch
        </TechStackButton>
        <TechStackButton Icon={<SiReact className="text-blue-800 size-6" />}>
          React
        </TechStackButton>
        <TechStackButton Icon={<SiTailwindcss className="text-teal-400" />}>
          Tailwind
        </TechStackButton>
        <TechStackButton Icon={<SiNextdotjs className="text-white size-6" />}>
          NextJS
        </TechStackButton>
        <TechStackButton Icon={<SiMongodb className="text-green-500" />}>
          MongoDB
        </TechStackButton>
        <TechStackButton Icon={<SiSqlite className="text-teal-600" />}>
          SQL
        </TechStackButton>
      </div>
    </section>
  );
}

export { TechStackSection };

type TechStackButtonProps = {
  children?: React.ReactNode;
  Icon?: JSX.Element;
};
function TechStackButton({ children, Icon }: TechStackButtonProps) {
  return (
    <div
      className="border- w-fit py-4 px-6
     rounded-full flex gap-2 items-center justify-center bg-[#121212] hover:bg-gradient-to-b hover:from-current hover:to-[#151515] transition duration-200"
    >
      {Icon}
      <span className="text-white font-bold text-lg capitalize select-none">
        {children}
      </span>
    </div>
  );
}
