import Image from "next/image";
import Link from "next/link";

type EmailSectionIconProps = {
  href: string;
  src: any;
  alt: string;
  name: string;
};

function EmailSectionIcon({href, src , alt, name}: EmailSectionIconProps) {
  return (
    <Link
      href={"https://www.linkedin.com/in/ishan-srivastava-baa7a3276"}
      className="rounded-lg hover:bg-slate-700 relative flex flex-col group/icon"
      target="_blank"
    >
      <Image
        className="peer/icon"
        src={src}
        alt={alt}
      ></Image>
      <span className="bg-slate-800 opacity-0 text-white rounded-md py-1 px-2 absolute self-center mt-14 peer-hover/icon:block peer-hover/icon:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </Link>
  );
}

export { EmailSectionIcon };
