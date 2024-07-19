import { StaticImageData } from "next/image";

export interface ProjectImage {
  id: number;
  img: StaticImageData;
}

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  overview: string;
  approach: string;
  techstack: string;
  thumbnail: StaticImageData;
  link: string;
  github: string;
  images: ProjectImage[];
}
