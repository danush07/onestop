import React from 'react'
import Image from "next/image";
import { useState,useEffect } from 'react';

import Link from 'next/link';
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const images = [
  "/photo2.jpg",
  "/potrait.jpg",
  "/photo5.jpg",
  "/man.jpg",
  "/photo6.jpg",
];
function login() {

  const CarouselSlide = ({ children }) => (
    <div style={{ position: "relative", height: "600px" }}>{children}</div>
  );

  return (
    <div>
      <div className="py-16 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-3xl ">
          <div className="hidden lg:block  lg:w-1/2 bg-cover">
            <div className="image-slide">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
                showThumbs={false}
              >
                {images.map((image, index) => (
                  <CarouselSlide key={index}>
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      loading="eager"
                    />
                  </CarouselSlide>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-xl text-gray-600 text-center">
              Great to See you Again!
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                login using credentials
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                href="/register"
                className="text-xs text-gray-500 uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login