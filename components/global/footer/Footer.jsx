import React from "react";
import Link from "next/link";
import {FaLocationArrow} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import instagram from "../../../public/instagram.png";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center w-screen mt-6 overflow-hidden text-white max-w-screen bg-red sm:mt-0 h-fit">
      <div id=" wide screen container" className="w-full pt-5 pb-5 pl-10 pr-10">
        <div id="top" className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 items center">
          <div id="Actualité" className="flex-1">
            <h3 className="text-lg font-bold">Actualité</h3>
            <ul className="flex flex-col gap-1 mt-2 text-base font-semibold">
              <li className="hover:text-slate-200">
                <Link href="/actualite/economie">Economie</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/actualite/culture">Culture</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/actualite/sport">Sport</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/actualite/politique">Politique</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/actualite/finance">Finance </Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/actualite/sante">Sante</Link>
              </li>
            </ul>
          </div>
          <div id="La Radio" className="flex-1">
            <h3 className="text-lg font-bold">La Radio</h3>
            <ul className="flex flex-col gap-1 mt-2 text-base font-semibold">
              <li className="hover:text-slate-200">
                <Link href="/apropos">à propos</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/emissions">Emissions</Link>
              </li>
              <li className="hover:text-slate-200">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div id="Radio Rtu" className="flex flex-col w-screen gap-1 text-base font-semibold sm:w-full">
            <h3 className="text-lg font-bold">Radio RTU</h3>
            <div className="flex items-center gap-2 mt-2"> <FaLocationArrow className="text-lg"/>  <span>45 Bd Jourdan, 75014 Paris, France</span></div>
            <div className="flex items-center gap-2"> <MdEmail className="text-lg"/>  <span>contact@rtu.com</span></div>
            <div id="buttom" className="flex gap-2 mt-1 ">
                <a href="https://www.facebook.com/RTUILEDFRANCE" target="_blank" >
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="transition cursor-pointer hover:opacity-80"
                  />
                </a>
                <a href="https://www.linkedin.com/company/rtu-radio-et-télévision-universitaires" target="_blank">
                  <Image
                    src={linkedin}
                    alt="linkedin"
                    className="transition cursor-pointer hover:opacity-80"
                  />
                </a>
                <a href="/" target="_blank">
                  <Image
                    src={twitter}
                    alt="twitter"
                    className="transition cursor-pointer hover:opacity-80"
                  
                  />
                </a>
                <a href="https://www.instagram.com/radiotelevision_universitaires/" target="_blank">
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="transition cursor-pointer hover:opacity-80"
                  />
                </a>
              </div>
          </div>
        </div>
        <div id="copy" className="flex items-center justify-center mt-4">
          <span className="text-center capitalize  font-regular">2022 © Tous les droits sont réservés réaliser par <a href="https://rightwing.dev" className="font-semibold ">@rightwing</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
