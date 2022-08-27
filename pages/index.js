import Head from "next/head";
import Header from "../components/global/header/Header";
import MobileHeader from "../components/global/header/MobileHeader";
import Main from "../components/global/articles/main";
import Categories from "../components/global/articles/categories";
import Latest from "../components/global/articles/Latest";
import { useEffect, useState } from "react";
import axios from "axios";
import Videos from "../components/homePage/Videos";
const index = () => {
  const [latestNews, setLatestNews] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/articles?pagination[page]=1&pagination[pageSize]=8&sort=updatedAt%3Adesc&populate=image"
      )
      .then((response) => {
        setLatestNews(response.data.data);
        setloading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center overflow-auto bg-white max-w-screen scroll-smooth">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>RTU - La 1ère Radio & Télévision Universitaire de Paris</title>
        <meta
          name="title"
          content="RTU - La 1ère Radio & Télévision Universitaire de Paris"
        />
        <meta
          name="description"
          content="RTU est une Radio Universitaire qui a comme but de promouvoir et d'accompagner la vie estudiantine à la cité universitaire de Paris - FRANCE"
        />
        <meta name="keywords" content="rtu, radio, télévision, université" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rtu.paris/" />
        <meta
          property="og:title"
          content="RTU - La 1ère Radio & Télévision Universitaire de Paris"
        />
        <meta
          property="og:description"
          content="RTU est une Radio Universitaire qui a comme but de promouvoir et d'accompagner la vie estudiantine à la cité universitaire de Paris - FRANCE"
        />
        <meta
          property="og:image"
          content="http://localhost:1337/uploads/logo_min_e326d4cd57.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rtu.paris/" />
        <meta
          property="twitter:title"
          content="RTU - La 1ère Radio & Télévision Universitaire de Paris"
        />
        <meta
          property="twitter:description"
          content="RTU est une Radio Universitaire qui a comme but de promouvoir et d'accompagner la vie estudiantine à la cité universitaire de Paris - FRANCE"
        />
        <meta
          property="twitter:image"
          content="http://localhost:1337/uploads/logo_min_e326d4cd57.png"
        />
      </Head>
      <Header />
      <MobileHeader />
      <div
        id="wide screen container"
        className="w-full h-full 3xl:max-w-wide 3xl:w-wide"
      >
        <div
          id="main content"
          className="w-screen h-full p-3 3xl:w-full lg:p-10"
        >
          <h2 className="mt-2 mb-4 text-2xl font-bold text-black sm:text-3xl sm:mt-6 ">
            A LA UNE
          </h2>
          <Main />
          {loading == false && <Latest articles={latestNews} />}
          <Categories Categorie="Politique" />
          <Categories Categorie="Economie" />
          <Videos />
          <Categories Categorie="Sport" />
        </div>
      </div>
    </div>
  );
};

export default index;
