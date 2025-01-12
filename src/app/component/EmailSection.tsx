"use client";
// import InstagramIcon from "@/../public/instagram.svg";

import Link from "next/link";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  KAGGLE_URL,
  LINKEDIN_URL,
  MY_EMAIL,
} from "@/data/personal-data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaGithub, FaKaggle, FaInstagram, FaLinkedin } from "react-icons/fa";
function EmailSection() {
  return (
    <section
      className="px-8 md:px-24 bg-[#121212] grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div className="place-items-start">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;am currently looking for opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full place-items-end">
        <div className="self-end">
          <div className="flex w-full items-center gap-2">
            {/* <Button className="flex items-center h-full border-none hover:bg-blue-600 bg-blue-600">
            <MdEmail className="size-6" />
            Email
            </Button> */}
            <Input
              value={MY_EMAIL}
              disabled
              className="text-white p-2 rounded-md h-14"
            />
            <span className="shrink-0 size-14 border-[0.5px] border-[#D1D1ED1] bg-[#222222] hover:bg-[#2A2A2A] flex items-center justify-center rounded-md">
              <CopyToClipboardButton className="size-6" text={MY_EMAIL} />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#EEEEEE] font-medium my-2">
              Explore more about me...
            </span>
            <div className="flex w-full gap-4 flex-wrap">
              <Link href={LINKEDIN_URL} className="contents" target="_blank">
                <Button className="flex items-center justify-center text-white border-none grow flex-1">
                  <FaLinkedin className="text-white text-2xl h-32" />
                  <span>Linked In</span>
                </Button>
              </Link>
              <Link href={INSTAGRAM_URL} className="contents" target="_blank">
                <Button className="grow  flex-1 flex items-center justify-center text-white border-none bg-gradient-to-br from-pink-700 to-indigo-500 hover:to-pink-700 hover:from-pink-700 transition-colors duration-500 ">
                  <FaInstagram className="" />
                  <span>Instagram</span>
                </Button>
              </Link>
              <Link href={GITHUB_URL} className="contents" target="_blank">
                <Button
                  variant="outline"
                  className="grow flex flex-1 items-center justify-center text-white bg-[#121212] hover:bg-[#222222] hover:text-white"
                >
                  <FaGithub />
                  <span>Github</span>
                </Button>
              </Link>
              <Link href={KAGGLE_URL} className="contents" target="_blank">
                <Button
                  variant="outline"
                  className="grow flex flex-1 items-center justify-center text-white border-none bg-gradient-to-t from-cyan-700 to-cyan-600 hover:to-cyan-700 hover:text-white"
                >
                  <FaKaggle />
                  <span>Kaggle</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { EmailSection };
