"use client";

import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto text-[#37352F] transition-all ease-in-out dark:text-gray-100 dark:bg-[#121212]">
        <div className="px-6 sm:px-[5rem] md:px-[5rem] lg:px-[10rem]">
          {/* Headings */}
          <div className="flex flex-col gap-y-4">
            <h2 className="font-medium text-gray-600 text-lg lg:text-2xl mt-10 transition-all ease-in-out dark:text-gray-300">
              Hey, I'm Mikko. 👋
            </h2>
            <h1 className="font-semibold lg:font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-9 transition-all ease-in-out">
              I'm an enthusiastic creator with a deep passion for website
              development and digital design.
            </h1>
          </div>

          {/* Projects   */}
          <div className="my-[7rem]">
            <h1 className="text-md md:text-xl font-semibold uppercase">
              Projects
            </h1>
            <Projects />
          </div>

          {/* About */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-md md:text-xl font-semibold ">About</h1>
              <div className="flex flex-col gap-y-2 dark:text-gray-400">
                <p>
                  Hey there, I'm Mikko. I graduated with a degree in Computer
                  Engineering from STI College. I'm an enthusiastic web
                  developer with a passion for website development. In addition
                  to web development, I'm also an enthusiast in digital painting
                  and 3D modeling.
                </p>
                <p>
                  Please continue, as there is much more to discover about me.
                </p>
                <Link
                  href="/about"
                  className="font-semibold underline text-gray-500 hover:text-[#37352F] transition-all ease-in-out"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/34471713-3b10-45ee-a8be-b25e91ad7f2b/image_copy_4/w=1920,quality=90,fit=scale-down"
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
