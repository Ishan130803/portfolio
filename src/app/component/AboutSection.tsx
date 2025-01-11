"use client";

import Image from "next/image";

type AboutSectionProps = object;

function AboutSection({}: AboutSectionProps) {
  return (
    <section
      className="bg-[#151515] text-white grid md:grid-cols-2 gap-8 place-items-center py-8 px-28 xl:gap-16 sm:py-16 xl:px-16 xl:py-28"
      id="about"
    >
      <Image
        src={"/ishan-photo.jpg"}
        alt="About Image"
        className="my-image rounded-xl"
        width={300}
        height={500}
      ></Image>
      <div>
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="text-base lg:text-lg">
            <p>
              I am Ishan Srivastava, a student of Delhi Technological
              University, New Delhi currently pursuing Information Technology. I
              am also an alumni of DPS RK Puram, New Delhi.
            </p>
            <br />
            <p>
              My passion for all things related to computers, whether software
              or hardware, drives my continuous pursuit of knowledge. This
              curiosity has led me to gain experience across various fields,
              including Web Development, Machine Learning, and basic Hardware
              (Robotics). Currently, I&apos;m exploring research opportunities
              in remote sensing data, eager to expand my expertise even further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
