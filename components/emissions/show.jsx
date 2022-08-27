import React from 'react'
import Image from 'next/image'
const show = ({info}) => {
  return (
    <div className='w-full'>
      <div id="image " className='relative w-full h-48 md:h-72'>
    <Image src={`http://localhost:1337${info.attributes.image.data.attributes.url}`}  layout="fill" />
      </div>
      <div id='info' className='flex flex-col w-full gap-2 mt-4'>
        <h3 className='text-lg font-bold capitalize md:text-xl xl:text-3xl'>
          {info.attributes.Nom}
        </h3>
        <p className='text-base font-semibold md:text-lg xl:text-xl'>
          {info.attributes.animateur}
        </p>
        <time className='text-base font-semibold capitalize md:text-lg xl:text-xl'>
          {info.attributes.JoursHeure}
        </time>

      </div>
    </div>
  )
}

export default show