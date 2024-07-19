import Projects from "@/components/Projects";

const page = () => {
  return (
    <div className="w-full mx-auto text-[#37352F] transition-all ease-in-out dark:text-gray-100 dark:bg-[#121212]">
      <div className="px-6 sm:px-[5rem] md:px-[5rem] lg:px-[10rem]">
        <div className="pt-16">
          <h1 className="text-md md:text-xl font-semibold uppercase">
            Projects
          </h1>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default page;
