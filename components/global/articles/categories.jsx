import React, { useEffect, useState } from "react";
import Miniarticle from "./Miniarticle";
import axios from "axios";
import Link from "next/link";

const categories = ({ Categorie }) => {
  const [articles, setarticles] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/articles?filters[categorie][$eq]=${Categorie.replace(
          /['"]+/g,
          ""
        )}&pagination[page]=1&pagination[pageSize]=5&populate=*&sort=updatedAt%3Adesc`
      )
      .then((response) => {
        setarticles(response.data.data);
        setloading(false);
      });
  }, []);

  return (
    <div className="w-full mt-10 sm:mt-16 ">
      <div id="title" className="flex items-center w-full gap-6">
        <Link href={`/actualite/${Categorie}`}>
          <h2 className="text-lg font-semibold capitalize cursor-pointer sm:text-xl">{Categorie}</h2>
        </Link>
        <div className="w-full h-1 bg-black "> </div>
      </div>
      <div className="grid flex-auto grid-cols-1 gap-4 mt-6 sm:gap-0 sm:grid-cols-5">
        {loading == false &&
          articles.map((article) => (
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
    </div>
  );
};

export default categories;
