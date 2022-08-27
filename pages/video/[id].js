import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
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
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //post is id
    axios
      .get(`http://localhost:1337/api/videos/${id}?populate=*`)
      .then((response) => {
        setVideo(response.data.data);
        setLoading(true);
      });
  }, [id]);
  return (
    <div className="flex flex-col items-center w-screen overflow-auto tracking-wide text-black bg-white max-w-screen scroll-smooth font-blog">
      {loading && (
        <Head>
          <title>{video.attributes.Titre}</title>
          <meta name="title" content={video.attributes.Titre} />
          <meta
            name="description"
            content={video.attributes.description}
          ></meta>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://rtu.com/video/${id}`} />
          <meta property="og:title" content={video.attributes.Titre} />
          <meta
            property="og:description"
            content={video.attributes.description}
          />
          <meta
            property="og:image"
            content={`http://localhost:1337${video.attributes.thumbnail.data.attributes.url}`}
          />
          {/* twitter */}
          <meta property="twitter:card" content="website" />
          <meta
            property="twitter:url"
            content={`https://rtu.com/video/${id}`}
          />
          <meta property="twitter:title" content={video.attributes.Titre} />
          <meta
            property="twitter:description"
            content={video.attributes.description}
          />
          <meta
            property="twitter:image"
            content={`http://localhost:1337${video.attributes.thumbnail.data.attributes.url}`}
          />
        </Head>
      )}
      {loading && (
        <div
          id="wide screen container"
          className="w-full h-full 3xl:max-w-wide 3xl:w-wide "
        >
          <div id="main" className="w-full px-2 sm:px-10 mt-14">
            <h1 className="w-full text-3xl font-bold text-center capitalize ">
              {video.attributes.titre}
            </h1>
            <div
              id="info"
              className="flex justify-center w-full gap-10 mt-6 text-sm font-medium sm:text-lg sm:px-10"
            >
              <h2 className="capitalize ">{parse(video.attributes.updatedAt)}</h2>
            </div>
            <article className="flex flex-col items-center w-full gap-10 px-6 my-10 leading-5 sm:px-10 ">
              {video.attributes.URL && (
                <iframe
                  className="w-full h-48 sm:w-4/5 sm:h-60 md:h-aboutHeader"
                  src={video.attributes.URL}
                ></iframe>
              )}
              <p id="first parag" className="text-lg font-normal 2xl:text-xl">
                {video.attributes.partie1}
              </p>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
