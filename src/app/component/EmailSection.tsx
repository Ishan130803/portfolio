"use client";
import Image from "next/image";
import GitHubIcon from "@/../public/github-icon.svg";
import LinkedInIcon from "@/../public/linkedin.svg";

import Link from "next/link";
import { send_email } from "@/utils/autoemail";

function EmailSection() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const data = {
      client_email: e?.target[0]?.value as string,
      subject: e?.target[1]?.value as string,
      message: e?.target[2]?.value as string,
    };
    const response_data = await send_email(data);
    if (response_data.error) {
      console.log("Error");
    } else {
      console.log("sent Successfully");
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="connect"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ABD7BE] mb-4 max-w-md">
          I'am currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you !
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href={"https://github.com/Ishan130803"}
            className="rounded-full hover:bg-slate-700 relative flex flex-col group/icon"
            target="_blank"
          >
            <Image
              src={GitHubIcon}
              alt="GitHubIcon"
              className="peer/icon"
            ></Image>
            <span className="bg-slate-800 opacity-0 text-white rounded-md py-1 px-2 absolute self-center mt-14 peer-hover/icon:block peer-hover/icon:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ishan-srivastava-baa7a3276"}
            className="rounded-lg hover:bg-slate-700 relative flex flex-col group/icon"
            target="_blank"
          >
            <Image
              className="peer/icon"
              src={LinkedInIcon}
              alt="LinkedInIcon"
            ></Image>
            <span className="bg-slate-800 opacity-0 text-white rounded-md py-1 px-2 absolute self-center mt-14 peer-hover/icon:block peer-hover/icon:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="youremailid@example.com"
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Just saying hi :)"
            ></input>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 h-full"
              placeholder="Let's talk about....."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold p-2.5 rounded-full "
          >
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export { EmailSection };
