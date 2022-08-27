import React from "react";
import style from "../../styles/components/articles.module.scss";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";
const MiniVideo = ({ video }) => {
  return (
    <div id="left" className="relative items-center w-full sm:h-32 ">
      <Link href={`/video/${video.id}`}>
        <div
          id="liniar"
          className={`cursor-pointer rounded-sm w-full h-32 z-20 absolute   ${style.liniar}`}
        ></div>
      </Link>
      <img
        src={`http://localhost:1337${video.attributes.thumbnail.data.attributes.url}`}
        alt="main video"
        className={` z-0 w-full rounded-sm h-32 `}
      />
      <Link href={`/video/${video.id}`}>
        <div
          className={`text-5xl absolute z-50 text-white cursor-pointer ${style.miniplay}`}
        >
          <AiOutlinePlayCircle />
        </div>
      </Link>
    </div>
  );
};

export default MiniVideo;
