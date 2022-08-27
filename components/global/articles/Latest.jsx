import React from "react";
import Miniarticle from "./Miniarticle";
const Latest = ({ articles }) => {
  return (
    <div className="w-full mt-10 sm:mt-16">
      <div id="title" className="flex items-center w-full gap-6">
        <h2 className="text-lg font-semibold capitalize whitespace-nowrap w-fit sm:text-xl ">
          Dernières Nouvelles
        </h2>
        <div className="w-full h-1 bg-black "> </div>
      </div>
      <div id="main" className="flex gap-8 mt-6">
        <div className="grid flex-auto grid-cols-1 gap-4 sm:gap-0 md:grid-cols-4">
          {articles.map((article) => (
            <Miniarticle
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
        <div
          id="ads"
          className="flex-initial hidden lg:inline-block w-96 h-90 ad bg-slate-300"
        ></div>
      </div>
    </div>
  );
};

export default Latest;
