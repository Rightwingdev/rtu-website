import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/components/articles.module.scss";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";
import MiniVideo from "./MiniVideo";

const Videos = () => {
  const [Videos, setVideos] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/videos?populate=*")
      .then((response) => {
        setVideos(response.data.data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="flex flex-col items-start w-full px-2 pt-5 pb-5 mt-16 sm:h-96 bg-red">
      <h2 className="text-xl font-semibold text-white capitalize sm:text-2xl">
        Vidéos
      </h2>
      {Loading && (
        <div
          id="holder"
          className="flex flex-col w-full h-full px-3 mt-3 sm:flex-row sm:items-center gap-7"
        >
          <div
            id="left"
            className="relative flex items-center w-full sm:flex-1"
          >
            <Link
              href={`/video/${Videos[0].id}`}
            >
              <img
                src={`http://localhost:1337${Videos[0].attributes.thumbnail.data.attributes.url}`}
                alt="main video"
                className={`brightness-75 w-full rounded-sm h-48 sm:h-72 `}
              />
            </Link>
            <Link
              href={`/video/${Videos[0].id}`}
            >
              <div
                className={`text-8xl absolute z-50 text-white cursor-pointer ${style.play}`}
              >
                <AiOutlinePlayCircle />
              </div>
            </Link>
          </div>
          <div
            id="right"
            className="grid flex-1 grid-cols-2 gap-5 overflow-auto sm:grid-cols-2"
          >
            <MiniVideo video={Videos[1]} />
            <MiniVideo video={Videos[2]} />
            <MiniVideo video={Videos[3]} />
            <MiniVideo video={Videos[4]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
