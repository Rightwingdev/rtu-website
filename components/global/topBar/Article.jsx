import React from "react";
import Image from "next/image";
import Link from 'next/link'
const Article = ({ title, image, category, id }) => {
  return (
    <div className="">
        <Link href={`/actualite/${category.toLowerCase()}/${id}`} className=''>
      <div id="container" className="flex flex-col w-full h-full gap-1 p-2 cursor-pointer font-blog ">
        <div id="image" className="static w-48 lg:w-52">
          <Image
            src={`http://localhost:1337${image}`}
            layout="responsive"
            height="75"
            width="150"
            className="rounded-sm "
          />
        </div>
        <div id="discription and title" className=" w-52">
          <h3 className="w-48 h-10 text-sm font-bold transition text-ellipsis hover:opacity-90 ">{title}</h3>
          {/* <p className="w-48 h-10 overflow-hidden text-sm font-thin text-ellipsis">{dicription}</p> */}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Article;
