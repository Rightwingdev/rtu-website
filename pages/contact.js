import React from 'react'
import instagram from "../public/binstagram.png";
import facebook from "../public/bfacebook.png";
import linkedin from "../public/blinkedin.png";
import twitter from "../public/btwitter.png";
import Link from "next/link"
import Image from "next/image";
const contact = () => {
  return (
    <div className='flex flex-col items-center w-screen pt-10 pb-10 tracking-wide text-black sm:pb-20 sm:pt-20 '>
        <h2 className='mb-6 text-3xl font-bold sm:text-5xl'>Contactez-nous:</h2>
        <p className='mb-2 text-2xl font-regular'>+33 6 22 10 99 92</p>
        <p className='mb-6 text-2xl font-regular'>contact@rtu.com</p>
        <p>45 Bd Jourdan, 75014 Paris, France</p>
        <div id="buttom" className="flex gap-2 mt-2">
                <Link href="/">
                  <div>
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="transition cursor-pointer hover:opacity-80"
                    layout='fixed'
                    width="35"
                    height="35"
                  />
                  </div>
                </Link>
                <Link href="/">
                  <div>
                  <Image
                    src={linkedin}
                    alt="linkedin"
                    className="transition cursor-pointer hover:opacity-80"
                    layout='fixed'
                    width="35"
                    height="35"
                  />
                  </div>
                </Link>
                <Link href="/">
                  <div>
                  <Image
                    src={twitter}
                    alt="twitter"
                    className="transition cursor-pointer hover:opacity-80"
                    layout='fixed'
                    width="35"
                    height="35"
                  />
                  </div>
                </Link>
                <Link href="/">
                  <div>
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="transition cursor-pointer hover:opacity-80"
                    layout='fixed'
                    width="35"
                    height="35"
                  />
                  </div>
                </Link>
              </div>
    </div>
  )
}

export default contact