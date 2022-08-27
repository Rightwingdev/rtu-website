import React from "react";
import Article from "./Article";
import { useState, useEffect } from "react";
import axios from "axios";

const article = () => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/articles?pagination[page]=1&pagination[pageSize]=4&populate=%2A"
      )
      .then((response) => {
        setarticles(response.data.data);
        setloading(false);
      });
  }, []);

  return (
    <div className="grid max-h-full grid-cols-2 gap-5 overflow-auto lg:gap-10 lg:grid-cols-4">
      {loading ? (
        <h1>chargement des articles ...</h1>
      ) : (
        articles.map((article) => (
          <Article
            title={article.attributes.Titre}
            dicription={article.attributes.description}
            image={
              article.attributes.image.data.attributes.formats.thumbnail.url
            }
            category={article.attributes.categorie}
            id={article.id}
            subcategory={article.attributes.subCategorie}
            language={article.attributes.locale}
          />
        ))
      )}
    </div>
  );
};

export default article;
