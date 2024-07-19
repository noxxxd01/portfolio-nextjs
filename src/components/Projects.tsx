import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data";
import { Project } from "../app/types";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 my-8">
      {projects.map((project: Project) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
          <div className="rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden">
            <div className="h-[30rem] w-auto">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={project.thumbnail}
                alt={project.title}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center px-9 text-left transition-all duration-500 group-hover:translate-y-[13rem]">
              <p className="mb-3 flex justify-start text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
