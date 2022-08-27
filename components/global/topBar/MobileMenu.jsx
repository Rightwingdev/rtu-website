import React from "react";
import Link from "next/dist/client/link";
import { Menu } from "@headlessui/react";
import Image from "next/dist/client/image";
import instagram from "../../../public/instagram.png";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  return (
    <Menu as="div" className="sm:hidden">
      <div className="flex items-center ">
        <Menu.Button className="flex items-center justify-center">
          <span className="font-bold cursor-pointer select-none material-symbols-outlined">
            menu
          </span>
        </Menu.Button>
        <Menu.Items>
          <AnimatePresence>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={
                "flex flex-col gap-6 fixed right-0 z-20 p-5 text-white  w-3/5 bg-red top-16  "
              }
            >
              <div id="left side">
                <Link href="/apropos">
                  <h3 className="mb-2 text-sm font-thin text-gray-200 cursor-pointer ">
                    La Radio
                  </h3>
                </Link>
                <ul className="flex flex-col gap-2 text-lg">
                  <li className="hover:text-slate-200">
                    <Link href="/emissions">Emissions</Link>
                  </li>
                  <li className="hover:text-slate-200">
                    <Link href="/programme">Programmes</Link>
                  </li>
                  <li className="hover:text-slate-200">
                    <Link href="/video">Vidéos</Link>
                  </li>
                  <li className="hover:text-slate-200">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:text-slate-200">
                    <Link href="/apropos">à propos</Link>
                  </li>
                </ul>
              </div>
              <div id="left side">
                <Link href="/actualite">
                  <h3 className="mb-2 text-sm font-thin text-gray-200 cursor-pointer ">
                    Actualité
                  </h3>
                </Link>
                <ul className="flex flex-col gap-2 text-lg">
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
              <div id="buttom" className="flex gap-2 ">
                <a href="https://www.facebook.com/RTUILEDFRANCE" target="_blank">
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
            </motion.div>
          </AnimatePresence>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default MobileMenu;
