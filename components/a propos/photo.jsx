import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Image from 'next/image'
const photo = () => {
  const [images,setimages]=useState([])
  const [loading,setloading]=useState(false)
  useEffect(() => {
   axios.get('http://localhost:1337/api/images?populate=*').then(response=>{
    setimages(response.data.data)
    setloading(true)
   })
  }, [])
  
  return (
    <div className='w-full p-5 mt-16 '>
      <h3 className='text-2xl font-semibold text-black capitalize'>Photo</h3>
      <div className='grid w-full grid-cols-2 gap-2 mt-5 md:gap-7 xl:grid-cols-3 h-82'>
        {loading&&images.map(image=><div key={image.id} className='relative w-full h-48 bg-gray-300 md:h-80'><Image src={`http://localhost:1337${image.attributes.img.data.attributes.url}`}  layout='fill'/></div>)}


      </div>
    </div>
  )
}

export default photo