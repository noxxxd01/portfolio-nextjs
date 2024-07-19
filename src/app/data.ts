import thumb1 from "../../public/thumb1.png";
import thumb2 from "../../public/thumb2.png";
import thumb3 from "../../public/thumb3.png";

import pintr_img_1 from "../../public/pintr_img_1.png";
import pintr_img_2 from "../../public/pintr_img_2.png";
import pintr_img_3 from "../../public/pintr_img_3.jpg";
import pintr_img_4 from "../../public/pintr_img_4.png";

import imgrepo_img_1 from "../../public/imgrepo_img_1.png";
import imgrepo_img_2 from "../../public/imgrepo_img_2.png";
import imgrepo_img_3 from "../../public/imgrepo_img_3.png";

import cyber_img_1 from "../../public/cyber_img_1.png";
import cyber_img_2 from "../../public/cyber_img_2.png";
import cyber_img_3 from "../../public/cyber_img_3.png";
import cyber_img_4 from "../../public/cyber_img_4.png";
import cyber_img_5 from "../../public/cyber_img_5.png";
import cyber_img_6 from "../../public/cyber_img_6.png";
import cyber_img_7 from "../../public/cyber_img_7.png";
import cyber_img_8 from "../../public/cyber_img_8.png";

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Pintr.",
    thumbnail: thumb1,
    subTitle: "Image-based social media platform",
    overview:
      "Pintr. is an image-based social media platform similar to Pinterest. This website supports basic CRUD operations, allowing users to create, update, and delete content. After successfully signing in, users can view images and leave comments. With Pintr., you can enjoy a browsing experience akin to that of Pinterest.",
    approach:
      "This website is built using the MERN stack (MongoDB, Express, React, and NodeJS). For styling, it utilizes Tailwind CSS utility classes and components. The development of this website took a week. It is inspired by Pinterest, an image-based social media platform.",
    techstack:
      "Mongo DB, Express, React - Vite, NodeJS, TailwindCSS, Redux Toolkit, jsonwebtoken, Multer, JavaScript",

    link: "https://pintr.onrender.com",
    github: "https://github.com/noxxxd01/pintr.",
    images: [
      {
        id: 1,
        img: pintr_img_1,
      },
      {
        id: 2,
        img: pintr_img_2,
      },
      {
        id: 3,
        img: pintr_img_3,
      },
      {
        id: 4,
        img: pintr_img_4,
      },
    ],
  },
  {
    id: 2,
    title: "imgrepo/",
    thumbnail: thumb2,
    subTitle: "Image online repository",
    overview:
      "imgrepo/ is an online image repository. It is a simple website that allows you to upload images you like. You can also edit and delete the images.",
    approach:
      "This website is built using the MERN stack (MongoDB, Express, React, and NodeJS). For styling, it utilizes Tailwind CSS utility classes and ShadCN components.",
    techstack:
      "Mongo DB, Express, React - Vite, NodeJS, TailwindCSS, ShadCN UI, Multer, Cloudinary, JavaScript",

    link: "https://imgrepo.netlify.app/",
    github: "https://github.com/noxxxd01/imgrepo",
    images: [
      {
        id: 1,
        img: imgrepo_img_1,
      },
      {
        id: 2,
        img: imgrepo_img_2,
      },
      {
        id: 3,
        img: imgrepo_img_3,
      },
    ],
  },
  {
    id: 3,
    title: "CyberSleek",
    thumbnail: thumb3,
    subTitle: "E-commerce website",
    overview:
      "CyberSleek is an e-commerce website designed to provide a seamless online shopping experience. It features user authentication to ensure a secure experience and a user-friendly interface. Customers can add items to their cart and choose between two payment options: cash on delivery (COD) or card payment. They can view product details, track their orders, and enjoy a smooth shopping journey.",
    approach:
      "This website is built using the Laravel framework and PHP, with data storage powered by MySQL and hosted on a XAMPP server. The user interface is designed with Bootstrap components, ensuring a responsive and visually appealing experience. The project took a week and a half to complete.",
    techstack: "PHP, MySQL, Laravel, XAMPP, Bootstrap, Stripe",
    link: "",
    github: "https://github.com/noxxxd01/cybersleek-ecommerce",
    images: [
      {
        id: 1,
        img: cyber_img_1,
      },
      {
        id: 2,
        img: cyber_img_2,
      },
      {
        id: 3,
        img: cyber_img_3,
      },
      {
        id: 4,
        img: cyber_img_4,
      },
      {
        id: 5,
        img: cyber_img_5,
      },
      {
        id: 6,
        img: cyber_img_6,
      },
      {
        id: 7,
        img: cyber_img_7,
      },
      {
        id: 8,
        img: cyber_img_8,
      },
    ],
  },
];
