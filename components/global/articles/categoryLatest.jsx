import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationCategorie from "../PaginationCategorie";
import Miniarticle from "./Miniarticle";
const Latest = ({ categorie }) => {
  const [articles, setarticles] = useState({});
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const capitalize = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/articles?filters[categorie][$eq]=${capitalize(
          categorie.replace(/['"]+/g, "")
        )}&pagination[page]=${page}&pagination[pageSize]=20&populate=%2A&sort=updatedAt%3Adesc&filtres[header][$eq]=oui`
      )
      .then((response) => {
        setarticles(response.data);
        setloading(false);
      });
  }, [categorie, page]);
  return (
    <div className="w-full mt-10 sm:mt-16">
      <div id="title" className="flex items-center w-full gap-6">
        <h2 className="text-lg font-semibold capitalize whitespace-nowrap w-fit sm:text-xl ">
          Dernières Nouvelles
        </h2>
        <div className="w-full h-1 bg-black "> </div>
      </div>
      <div id="main" className="flex flex-col items-center gap-6 mt-10">
        <div className="grid flex-auto grid-cols-1 gap-4 sm:gap-0 md:grid-cols-4 xl:grid-cols-5">
          {loading == false &&
            articles.data.map((article) => (
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
        {loading == false && (
          <PaginationCategorie
            setPage={setPage}
            page={page}
            pages={articles.meta.pagination.pageCount}
          />
        )}
      </div>
    </div>
  );
};

export default Latest;
