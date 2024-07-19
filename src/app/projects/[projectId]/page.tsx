"use client";

import React, { useState } from "react";
import { projects } from "@/app/data";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

export default function page({ params }: { params: { projectId: string } }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const [photoIndex, setPhotoIndex] = useState(0);

  // const openLightbox = (index: number) => {
  //   setPhotoIndex(index);
  //   setIsOpen(true);
  // };

  const { projectId } = params;
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  return (
    <div className="w-full mx-auto text-[#37352F] transition-all ease-in-out dark:text-gray-100 dark:bg-[#121212]">
      <div className="px-6 sm:px-[5rem] md:px-[5rem] lg:px-[10rem]">
        <div className="py-16">
          <h1 className="text-2xl font-semibold">Project {params.projectId}</h1>
          <div className="mt-6">
            <h1 className="text-4xl font-semibold dark:text-gray-100">
              {project?.title}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="text-gray-500 dark:text-gray-400">
                {project?.subTitle}
              </span>
              <div className="flex items-center text-sm gap-3 text-gray-500 dark:text-gray-400">
                {project?.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {project.link}
                  </a>
                )}
                -<span> 2 mins to load</span>
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            {project?.images && (
              <Image
                src={project?.images[0].img}
                //onClick={() => openLightbox(0)}
                alt=""
                className="rounded-2xl shadow-lg cursor-pointer"
              />
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-[7rem]">
            <div>
              <h1 className="text-xl font-medium mb-3">Overview</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {project?.overview}
              </p>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-3">Approach</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {project?.approach}
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                <span>
                  Techstack:
                  <b className="text-wrap"> {project?.techstack}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-4 md:px-3 lg:px-0 mb-16">
            {project?.images
              .filter((image) => image.id >= 2)
              .map((image) => (
                <div
                  key={image.id}
                  //onClick={() => openLightbox(image.id - 1)}
                  className="cursor-pointer"
                >
                  <Image src={image.img} alt="" className="rounded-2xl" />
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h1 className="text-xl font-medium mb-3">Links</h1>
              <p className="text-gray-600 dark:text-gray-400 flex flex-col gap-y-2">
                {project?.github && (
                  <Link
                    href={project?.github}
                    className="underline flex items-center gap-2 text-sm"
                    target="_blank"
                  >
                    <Github size={17} />
                    {project?.github}
                  </Link>
                )}
                {project?.link && (
                  <Link
                    href={project?.link}
                    className="underline flex items-center gap-2 text-sm"
                    target="_blank"
                  >
                    <Globe size={17} />
                    {project?.link}
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
