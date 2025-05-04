"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between bg-zinc-900 text-white rounded-full w-fit h-12  mx-auto md:w-[80%] md:justify-around shadow-md backdrop-blur-sm">
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="/#home"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/Home&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#aboutme"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/AboutMe&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#skills"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/Skills&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#projects"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/Projects&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer hidden md:block">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/Github&gt;
        </a>
      </div>
    </nav>
  );
}
