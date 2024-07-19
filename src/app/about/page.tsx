import Link from "next/link";

const page = () => {
  return (
    <div className="w-full mx-auto text-[#37352F] transition-all ease-in-out dark:text-gray-200 dark:bg-[#121212]">
      <div className="px-6 sm:px-[5rem] md:px-[5rem] lg:px-[10rem]">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-medium text-gray-600 text-lg lg:text-2xl mt-10 transition-all ease-in-out dark:text-gray-300">
            Welcome 👋
          </h2>
          <h1 className="font-semibold lg:font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-9 transition-all ease-in-out">
            Hey, I'm Mikko—an enthusiastic creator with a deep passion for
            website development and digital design.
          </h1>
        </div>
        <div className="mt-16">
          <img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/34471713-3b10-45ee-a8be-b25e91ad7f2b/image_copy_4/w=1920,quality=90,fit=scale-down"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] mt-[5rem] ">
          <div>
            <h1 className="text-xl font-medium mb-3">About</h1>
            <p className="text-gray-600 mb-5 dark:text-gray-400">
              Hi there, I'm Mikko! I graduated with a degree in Computer
              Engineering from STI College and have become a passionate web
              developer. My journey began in senior high school when I
              discovered my love for coding, which continues to drive me today.
              I specialize in the MERN stack and Next.js, and I love using
              Tailwind CSS and Shadcn UI for styling my projects.
            </p>
            <p className="text-gray-600 mb-5 dark:text-gray-400">
              But my creativity doesn't stop at web development. I'm also a
              digital artist who enjoys creating stunning environments and
              portraits. Additionally, I have a knack for 3D modeling and 3D
              printing, with experience in precision modeling and machinery
              parts.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always eager to learn new things and thrive when surrounded by
              like-minded people. If you find me interesting, let's connect and
              chat more!
            </p>
          </div>
          <div>
            <div className="mb-10">
              <h1 className="text-xl font-medium mb-3">Techstack</h1>
              <p className="text-gray-600 flex flex-col gap-y-1 dark:text-gray-400">
                <div className="flex items-center gap-2 text-sm ">
                  <span className="font-medium">Languages:</span>
                  <span className="text-wrap">
                    JavaScript, TypeScript, Python, C++, PHP
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Framework:</span>
                  <span className="text-wrap">
                    ReactJS - Vite, NextJS, Laravel
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Frontend:</span>
                  <span className="text-wrap">
                    TailwindCSS, ShadCN UI, Figma, Bootstrap 5, Material UI
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Backend:</span>
                  <span className="text-wrap">
                    Express, NodeJS, MongoDB, MySQL, Prisma
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Tools:</span>
                  <span className="text-wrap">
                    NPM, Git, Postman, Composer, Redux Toolkit
                  </span>
                </div>
              </p>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-3">Socials & Contacts</h1>
              <p className="text-gray-600 flex flex-col gap-y-1 dark:text-gray-400">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Phone Number:</span>
                  <span>09215175886</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Email:</span>
                  <span>lumpotmikko1@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Facebook:</span>
                  <Link
                    href="https://www.facebook.com/qwertyboyzzz"
                    className="underline"
                    target="_blank"
                  >
                    https://www.facebook.com/qwertyboyzzz
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">LinkedIn:</span>
                  <Link
                    href="https://www.linkedin.com/in/mikko-lumpot-64204831a/"
                    className="underline"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/mikko-lumpot-64204831a/
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
