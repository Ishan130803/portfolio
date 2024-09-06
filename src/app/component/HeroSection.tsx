"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {"Hello, I'am "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ishan Srivastava",
                1000,
                "Web Developer",
                1000,
                "ML Expert",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            ></TypeAnimation>
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            quisquam. Aliquam deleniti laboriosam ducimus, sunt totam odit
            magnam? Provident perspiciatis ipsa assumenda perferendis ad sunt
            delectus commodi sequi hic similique quo exercitationem culpa quidem
            beatae, quas at harum eos placeat dolorem. Aspernatur, nesciunt?
          </p>

          <div>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              Hire Me!
            </button>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit hover:bg-slate-800 bg-transparent text-white border border-white mt-3">
              Hire Me!
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
            <Image
              alt={"My Image"}
              src={"/favicon.ico"}
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
