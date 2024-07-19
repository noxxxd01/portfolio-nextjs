import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-10 md:px-16 py-10 text-[#37352F] dark:bg-[#121212]">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-[#37352F] dark:text-gray-200"
          >
            MIKO
          </Link>
        </div>
        <div className="flex items-center gap-8 text-[#37352F] dark:text-gray-400">
          <Link href="https://github.com/noxxxd01" target="_blank">
            <Github size={23} />
          </Link>
          <Link href="https://www.facebook.com/qwertyboyzzz" target="_blank">
            <Facebook size={23} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mikko-lumpot-64204831a/"
            target="_blank"
          >
            <Linkedin size={23} />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-7 text-gray-500 mt-4 dark:text-gray-400">
        <Link href="/about" className="hover:text-[#37352F]">
          About
        </Link>
        <Link href="/projects" className="hover:text-[#37352F]">
          Projects
        </Link>
        <Link href="" className="hover:text-[#37352F]">
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default Footer;
