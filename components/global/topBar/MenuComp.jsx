import React from "react";
import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import instagram from "../../../public/instagram.png";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const MenuComp = () => {
  const [oppenedMenu, setoppenedMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setoppenedMenu(false);
  }, [router]);

  return (
    <div className="hidden sm:inline-block ">
      <div className="flex items-center justify-center ">
        <span
          onClick={() => {
            setoppenedMenu(!oppenedMenu);
          }}
          className="font-bold cursor-pointer select-none material-symbols-outlined"
        >
          menu
        </span>
        <AnimatePresence>
          {oppenedMenu && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={
                " flex justify-center absolute right-0 z-10 w-screen  text-white  bg-red top-20 "
              }
            >
              <div
                id="wide screen container"
                className="flex flex-col justify-between w-full gap-3 pt-5 pb-5 pr-10 pl-14 3xl:max-w-wide 3xl:w-wide"
              >
                <div id="top" className="flex flex-col w-full lg:w-2/4 ">
                  <h3 className="mb-2 text-sm font-thin text-gray-200 ">
                    Actualité
                  </h3>
                  <ul className="flex justify-between gap-1">
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
                <div id="buttom" className="flex justify-end gap-2 ">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuComp;
