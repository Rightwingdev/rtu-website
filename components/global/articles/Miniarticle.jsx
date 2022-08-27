import React from 'react'
import Link from 'next/link'
import style from '../../../styles/components/articles.module.scss'
const Miniarticle = ({titre,auther,createdAt,image,categorie,id}) => {
  const parse = (thedate) => {
    let date = new Date(thedate);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return date.toLocaleDateString("fr-FR", options);
  };
  
  return (
    <div className='w-full p-1 sm:p-3'>
      <Link href={`/actualite/${categorie}/${id}`} className='w-full rounded-sm '>
          <img src={`http://localhost:1337${image}`} alt="image d'article" className='w-full h-48 rounded-sm cursor-pointer object-fit sm:h-36'/>
      </Link>
      <div id='info' className='w-full mt-2'>
        <Link href={`/actualite/${categorie}/${id}`}><h3 className={`overflow-hidden capitalize text-base font-bold cursor-pointer font-blog hover:text-slate-700 ${style.miniArticleTitle}`}>{titre}</h3></Link>
        <div className='flex gap-3 mt-2 text-sm capitalize text-slate-400'>
          <span>{parse(createdAt)}</span>
          <span>{auther}</span>
        </div>
      </div>
    </div>
  )
}

export default Miniarticle