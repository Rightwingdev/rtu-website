import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/dist/client/image';
const Show = ({title,host,starts,ends,thumbnail}) => {
    const [time,settime]=useState()
  useEffect(() => {
    const addZero=(num)=>{
      if (num<10){
        return '0'+num
      }else{
        return num
      }
  }
  let sdate=new Date(starts);
  let edate=new Date(ends);
  let startHoure=addZero(sdate.getHours())+':'+addZero(sdate.getMinutes())
  let endHoure=addZero(edate.getHours())+':'+addZero(edate.getMinutes())
  settime(startHoure+'-'+endHoure)
  }, [])
  return (
    <div className='flex items-center w-full gap-4 text-black'>
        <div id="image" className='w-32 sm:w-72'>
            <Image src={`http://localhost:1337${thumbnail}`} layout='responsive' width="150" height="100" className='rounded-sm'></Image>
        </div>
        <div id="info" className='flex flex-col md:gap-2'>
            <h3 className='text-lg font-bold capitalize sm:text-3xl'>{title}</h3>
            <span className='text-base font-semibold sm:text-xl'>{time}</span>
            <span className='text-base font-semibold capitalize sm:text-xl'>{host}</span>
        </div>
    </div>
  )
}

export default Show