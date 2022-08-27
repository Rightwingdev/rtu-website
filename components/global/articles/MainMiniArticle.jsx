import React from "react";
import Link from "next/link";
import style from "../../../styles/components/articles.module.scss";
const MainMiniarticle = ({ titre, image, categorie, id }) => {
  return (
    <div className="w-full p-3">
      <div className="w-full overflow-hidden h-36">
        <Link
          href={`/actualite/${categorie}/${id}`}
          className="w-full rounded-sm h-36"
        >
          <img
            src={`http://localhost:1337${image}`}
            alt="image d'article"
            className="object-cover w-full transition duration-700 rounded-sm cursor-pointer h-36"
          />
        </Link>
      </div>
      <div id="info" className="w-full mt-2">
        <Link href={`/actualite/${categorie}/${id}`}>
          <h3
            className={`overflow-hidden capitalize text-base font-bold cursor-pointer font-blog hover:text-slate-700 ${style.miniArticleTitle2}`}
          >
            {titre}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default MainMiniarticle;
