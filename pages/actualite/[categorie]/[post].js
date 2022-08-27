import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const {
    query: { categorie, post },
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
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //post is id
    axios
      .get(`http://localhost:1337/api/articles/${post}?populate=*`)
      .then((response) => {
        setArticle(response.data.data);
        setLoading(true);
      });
  }, [post]);
  return (
    <div className="flex flex-col items-center w-screen overflow-auto tracking-wide text-black bg-white max-w-screen scroll-smooth font-blog">
      {loading && (
        <Head>
          <title>{article.attributes.Titre}</title>
          <meta name="title" content={article.attributes.Titre} />
          <meta
            name="description"
            content={article.attributes.description}
          ></meta>
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://rtu.com/${categorie}/${post}`}
          />
          <meta property="og:title" content={article.attributes.Titre} />
          <meta
            property="og:description"
            content={article.attributes.description}
          />
          <meta property="og:image" content={`http://localhost:1337${article.attributes.image.data.attributes.url}`} />
          {/* twitter */}
          <meta property="twitter:card" content="website" />
          <meta
            property="twitter:url"
            content={`https://rtu.com/${categorie}/${post}`}
          />
          <meta property="twitter:title" content={article.attributes.Titre} />
          <meta
            property="twitter:description"
            content={article.attributes.description}
          />
          <meta property="twitter:image" content={`http://localhost:1337${article.attributes.image.data.attributes.url}`} />
        </Head>
      )}
      {loading && (
        <div
          id="wide screen container"
          className="w-full h-full 3xl:max-w-wide 3xl:w-wide "
        >
          <div id="main" className="w-full px-2 sm:px-10 mt-14">
            <h1 className="w-full text-3xl font-bold text-center capitalize ">
              {article.attributes.Titre}
            </h1>
            <div
              id="info"
              className="flex justify-center w-full gap-10 mt-6 text-sm font-medium capitalize sm:text-lg sm:px-10"
            >
              <h2> {article.attributes.auteur}</h2>
              <span>|</span>
              <h2>{parse(article.attributes.updatedAt)}</h2>
            </div>
            <div
              id="image container"
              className={`mt-6 w-full overflow-hidden sm:h-aboutHeader bg-no-repeat	bg-cover	`}
            >
              <img
                src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                className="object-cover w-full "
              />
            </div>
            <article className="flex flex-col items-center w-full gap-10 px-6 my-10 leading-5 sm:px-10 ">
              <p id="first parag" className="text-lg font-normal 2xl:text-xl">
                {article.attributes.partie1}
              </p>
              {article.attributes.video && (
                <iframe
                  className="w-full h-48 sm:w-3/4 sm:h-60 md:h-main"
                  src={article.attributes.video}
                ></iframe>
              )}
              {article.attributes.partie2 && (
                <p id="first parag" className="text-lg font-normal 2xl:text-xl">
                  {article.attributes.partie2}
                </p>
              )}
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
