import React from "react";
import MenuComp from "./MenuComp";
import Link from "next/link";
import SearchBox from "./SearchBox";
import Image from "next/image";
import logo from "../../../public/logo.png";
import MobileMenu from "./MobileMenu";
const Topbar = () => {
  return (
    <div className="z-20 flex justify-center w-screen overflow-hidden font-bold text-black max-w-screen font-roboto text-bold">
      <div
        id="wide screen container"
        className="flex items-center justify-between w-full pt-1 pl-4 pr-4 sm:pl-10 sm:pr-10 3xl:max-w-wide 3xl:w-wide "
      >
        <div
          id="left side"
          className="flex items-center gap-3 md:gap-10 lg:gap-24"
        >
          <Link href="/">
            <div
              id="logo"
              className="flex items-center w-16 h-16 cursor-pointer sm:w-20 sm:h-20"
            >
              <Image src={logo} alt="logo" layout="intrinsic" priority />
            </div>
          </Link>

          <nav className="hidden text-base md:inline-block ">
            <ul className="flex gap-6">
              <li className="hover:text-slate-800">
                <Link href="/emissions">Emissions</Link>
              </li>
              <li className="hover:text-slate-800">
                <Link href="/actualite">Actualité</Link>
              </li>
              <li className="hover:text-slate-800">
                <Link href="/programme">Programmes</Link>
              </li>
              <li className="hover:text-slate-800">
                <Link href="/video">Vidéos</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="right side"
          className="flex items-center gap-5 sm:justify-center sm:gap-7"
        >
          <div id="language" className="flex items-center gap-1">
            <button className="hover:text-slate-700">FR</button>
            <span>|</span>
            <button className="text-gray-500" disabled>EN</button>
          </div>
          <SearchBox />
          <MenuComp />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
