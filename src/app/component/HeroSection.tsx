"use client";
import { RESUME_LINK } from "@/data/personal-data";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="px-8 md:px-24 py-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl lg:text-6xl font-extrabold sm:text-5xl">
            <span className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {"Hello, I'am "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ishan Srivastava",
                1000,
                "Programmer",
                1000,
                "Web Developer",
                1000,
                "ML Enthusiast",
                1000,
                "Researcher",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            ></TypeAnimation>
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Hello There! I am Ishan Srivastava. This is my portfolio Website.
            Currently, it is Work in progress. To check out my work visit my
            Github and LinkedIn profiles. Link to both is present on the bottom
            of this page under the Let&apos;s connect Section
          </p>

          <div>
            <Link
              className="flex justify-center items-center gap-1 px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:via-purple-600 hover:to-pink-600 mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-medium"
              target="_blank"
              href={RESUME_LINK}
            >
              <span>Resume</span>{" "}
              <DownloadIcon className=" text-white h-4 font-bold"></DownloadIcon>
            </Link>
            <button className="hidden px-6 py-3 rounded-full mr-4 w-full sm:w-fit hover:bg-slate-800 bg-transparent text-white border border-white mt-3">
              Hire Me
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative overflow-clip">
            <Image
              className="object-contain"
              alt={"My Image"}
              src={"/Hero-Placeholder.png"}
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
