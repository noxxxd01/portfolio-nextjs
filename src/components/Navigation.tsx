"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Navigation = () => {
  const [icon, setIcon] = useState(false);
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    setIcon(!icon);
  };

  return (
    <div className="flex sticky top-0 justify-between items-center px-3 lg:px-8 h-20 bg-white z-50 transition-all ease-in-out dark:bg-[#121212] ">
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-[#37352F] dark:text-gray-100"
        >
          MIKO
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-gray-500 hidden lg:inline-block dark:text-gray-300">
          <Link
            href="/about"
            className="px-5 py-3 rounded-lg hover:text-gray-800 transition-all ease-in-out"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="px-5 py-3 rounded-lg hover:text-gray-800 transition-all ease-in-out"
          >
            Projects
          </Link>
        </div>
        <div>
          <Button className="bg-[#37352F] rounded-full hover:bg-[#3d3b35] px-5 dark:bg-gray-100">
            Download CV
          </Button>
        </div>
        {icon ? (
          <button
            className="p-4 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={() => {
              handleToggle();
              setTheme("light");
            }}
          >
            <Sun size={18} />
          </button>
        ) : (
          <button
            className="p-4 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={() => {
              handleToggle();
              setTheme("dark");
            }}
          >
            <Moon size={18} />
          </button>
        )}
        <div
          className="py-4 px-2 text-gray-500 lg:hidden cursor-pointer dark:text-gray-300"
          onClick={handleMenuToggle}
        >
          <Menu size={20} />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#121212] z-50 ease-in-out transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleMenuToggle}>
            <X size={24} className="text-gray-500 dark:text-gray-300" />
          </button>
        </div>
        <div className="flex flex-col items-start p-4 text-gray-500 dark:text-gray-300">
          <Link
            href="/about"
            className="px-5 py-3 rounded-lg hover:text-gray-800 transition-all ease-in-out"
            onClick={handleMenuToggle}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="px-5 py-3 rounded-lg hover:text-gray-800 transition-all ease-in-out"
            onClick={handleMenuToggle}
          >
            Projects
          </Link>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={handleMenuToggle}
      ></div>
    </div>
  );
};

export default Navigation;
