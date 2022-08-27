import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/components/articles.module.scss";
import Link from "next/link";
import MainMiniarticle from "./MainMiniArticle";
const main = () => {
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
  const [article, setarticle] = useState({});
  const [sideArticles, setSidearticles] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/articles?pagination[page]=1&pagination[pageSize]=5&populate=%2A&sort=updatedAt%3Adesc&filtres[header][$eq]=oui"
      )
      .then((response) => {
        setarticle(response.data.data[0]);
        response.data.data.reverse().pop();
        setSidearticles(response.data.data.reverse());
        setloading(false);
      });
  }, []);
  return (
    <div className="w-full mt-1 overflow-hidden sm:mt-4 mb-7 sm:h-main font-blog">
      {loading == false && (
        
          <div className="items-center w-full gap-4 sm:flex sm:h-main xl:flex-1 ">
            <div
              id="left"
              className="relative w-full overflow-hidden rounded-sm h-60 lg:w-4/5 xl:w-3/5 drop-shadow-md sm:h-main"
            >
              <Link
                href={`/actualite/${article.attributes.categorie}/${article.id}`}
                className="w-full h-full"
              >
                <img
                  src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                  alt="main article image"
                  className="absolute top-0 left-0 z-0 object-cover w-full h-full transition duration-700 rounded-sm cursor-pointer brightness-75 hover:scale-125"
                />
              </Link>

              <div
                id="info"
                className="absolute bottom-0 left-0 z-30 flex flex-col w-full p-2 sm:p-4 sm:gap-3 text-text-white"
              >
                <h3
                  className={` capitalize sm:text-3xl text-lg font-bold tracking-wide cursor-pointer ${style.miniArticleTitle}`}
                >
                  {article.attributes.Titre}{" "}
                </h3>
                <div id="righter info" className="flex gap-4">
                  <h3 className="text-sm tracking-wider sm:text-base ">
                    {parse(article.attributes.createdAt)}
                  </h3>
                  <h3 className="text-sm tracking-wider sm:text-base">{article.attributes.auteur}</h3>
                </div>
              </div>
            </div>

            <div
              id="side"
              className="flex-col hidden gap-0 bg-white xl:flex-1 xl:grid-cols-2 xl:grid"
            >
              {sideArticles.map((article) => (
                <MainMiniarticle
                  titre={article.attributes.Titre}
                  auther={article.attributes.auteur}
                  createdAt={article.attributes.createdAt}
                  image={article.attributes.image.data.attributes.url}
                  categorie={article.attributes.categorie}
                  id={article.id}
                  key={article.id}
                />
              ))}
            </div>
          </div>
      )}
    </div>
  );
};

export default main;
