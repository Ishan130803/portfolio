import Link from "next/link";

type NavlinkProps = {
  href: string;
  title: string;
};

function Navlink({ href, title }: NavlinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded-full hover:text-white"
    >
      {title}
    </Link>
  );
}

export { Navlink };
