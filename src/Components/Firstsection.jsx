import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
const Firstsection = () => {
  return (
    <section>
      <div className="mx-auto  px-4 py-8 bg-black sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 mb-20 gap-40 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-80  rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img className="absolute top-0 left-0 ml-80" src="/guardian.jpeg" alt="Spider" width="250" />
            <img className="cursor-pointer relative top-0 left-0 mt-24 ml-40 hover:shadow-outline" src="/spider.jpeg"   alt="Guardian" width="250" />
          </div>

          <div className=" mb-8 ml-28 lg:py-24">
            <h2 className="text-3xl text-white font-bold sm:text-4xl">FIND MOVIES</h2>
            <p className=" text-5xl text-white  font-bold bg-gradient-to-r inline-block from-[#0d00ffae]  to-[#fb153b]  text-transparent bg-clip-text  sm:text-4xl">TV SHOWS AND MORE</p>
            <p className="mt-4 text-xl text-white">
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
            </p>
            <br></br>
            <a href="#"className="mt-4 inline-block w-60 flex gap-4 rounded ring  ring-white bg-black px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:ring focus:ring-white"
            >
               
              <FaRegPlayCircle className=" text-2xl"/> Watch Tutorial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Firstsection;
