import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaReact } from "react-icons/fa6";
export default function Home() {

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  ">
        <div className="grid gap-10 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg text-3xl mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We’re changing
                <br className="hidden md:block" />
                the way people{" "}
                <span className="text-transparent  text-5xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 bg-clip-text">
                  Connect.
                </span>
              </h2>
              <p className="text-gray-700 md:text-lg">
                <span className="font-bold flex">Next JS</span>{" "}
                <FaReact className="flex" />
                Web Application with{" "}
                <span className="font-bold text-green-500">Node JS</span>{" "}
                Serving as a backend with Numerous Other Technologies Used 🚀
                ...
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Hop in
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://i.ibb.co/DQVpN5Z/toa-heftiba-l-Exp-Fww-OEg-unsplash.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                alt=""
                src="https://i.ibb.co/7rkkpg1/jed-villejo-b-Ec-C0ny-Ip2g-unsplash.jpg"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                alt=""
                src="https://i.ibb.co/HdmcLTP/joel-muniz-x-Tkx-ZN-DV8o-unsplash.jpg"
              />
            </div>
            {/* <div className="absolute inset-0 "></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
