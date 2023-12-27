import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import Router from "next/router";
function Footer() {
  const user = useSelector((state) => state.auth.user);
  return user ? ( 
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="text-transparent font-extrabold cursor-pointer text-2xl bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient bg-clip-text">
              <Link href="/">One Stop</Link>
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-4">
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaGithub className="mr-1" />
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaLinkedin className="mr-1" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FaInstagram className="mr-1" />
               Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            One Stop{" "}
          </Link>
          by Danush
        </span>
      </div>
      </footer>
      
      ):null
}

export default Footer;
