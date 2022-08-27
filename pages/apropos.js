import React from "react";
import Team from "../components/a propos/Team";
import Photo from "../components/a propos/photo";
import Image from "next/image";
import rtu1 from "../public/RTU1.jpeg";
import rtu4 from "../public/RTU4.jpeg";
import rtu6 from "../public/RTU6.jpeg";
const apropos = () => {
  return (
    <div className="flex flex-col items-center w-screen p-2 sm:p-3 xl:p-10">
      <div
        id="wide screen container"
        className="w-full h-full lg:pl-5 xl:pl-10 3xl:max-w-wide 3xl:w-wide"
      >
      <div id="header" className="flex items-center gap-5">
        <h1 className="font-bold text-7xl text-red sm:text-10xl">RTU</h1>
        <h2 className="py-2 text-sm font-bold tracking-wide text-black sm:text-lg ">
          RTU est une Radio Universitaire qui a comme but de promouvoir et
          d'accompagner la vie estudiantine à la cité universitaire de Paris -
          FRANCE
        </h2>
      </div>
      <div id="images" className="relative w-full mt-10 sm:h-aboutHeader h-72">
        <div id="1" className="absolute top-0 w-48 bg-gray-300 md:w-2/5 lg:w-1/4 h-28 left-3 sm:h-44 sm:left-72">
          <Image src={rtu1} layout="fill" />
        </div>
        <div
          id="2"
          className="absolute bottom-0 hidden bg-gray-300 right-10 sm:w-60 sm:h-72 sm:right-36 lg:inline-block"
        >
          <Image src={rtu6} layout="fill" />
        </div>
        <div
          id="3"
          className="absolute w-48 bg-gray-300 md:w-2/5 lg:w-1/4 sm:h-44 h-28 right-10 sm:left-0 top-36 sm:top-60"
        >
          <Image src={rtu4} layout="fill" />
        </div>
      </div>
      <Team />
      <Photo />
      </div>
    </div>
  );
};

export default apropos;
