import React from 'react'

const member = ({info}) => {
  return (
    <div className='w-full h-full p-2'>
        <div id='image' className='w-full h-48 bg-white md:w-72 lg:w-60'>
            <img src={`http://localhost:1337${info.image.data.attributes.url}`} alt="" className='object-cover w-full h-48 md:w-72 lg:w-60'/>
        </div>
        <div id='info' className='mt-2'>
            <h3 className='text-lg font-medium tracking-wide text-white capitalize'>{info.nom}</h3>
            <p className='text-base font-medium tracking-wide text-white capitalize'>{info.poste}</p>
        </div>
    </div>
  )
}

export default member