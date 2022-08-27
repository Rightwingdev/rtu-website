import React from 'react'
import { useEffect,useState } from 'react'


const Programme = ({title,host,starts,ends,thumbnail}) => {
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
    <div className='flex items-center w-full h-20 gap-2 text-white rounded-md xl:w-3/4 snap-start'>
        <div id="image " className='relative '>
          <img src={`http://localhost:1337${thumbnail}`} alt="show image" className='object-cover h-auto w-28' />
        </div>
        <div id="show info" className='flex flex-col justify-center'>
        <h3 id='title' className='text-base font-semibold capitalize'>{title}</h3>
        <h4 id='time' className='text-sm font-regular'>{time}</h4>
        <h5 id='host' className='text-sm font-thin capitalize'>{host}</h5>
        </div>
    </div>
  )
}

export default Programme