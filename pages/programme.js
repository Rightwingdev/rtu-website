import React from "react";
import Show from "../components/programme/Show";
import axios from "axios";
import { useEffect, useState } from "react";
import MobileHeader from "../components/global/header/MobileHeader";
import Header from "../components/global/header/Header";
const programme = () => {
  const [loading, setloading] = useState(true);
  const [programme, setProgramme] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/programmes?populate=%2A")
      .then((res) => {
        setProgramme(res.data.data);
        setloading(false);
      })
      .catch(() => console.log("no shows"));
  }, []);

  return (
    <div className="flex flex-col items-center w-screen m-0 overflow-hidden ">
      <MobileHeader />
      <Header />
      {loading == false ? (
        <div
          id="wide screen"
          className="flex flex-col w-full h-full p-10 3xl:max-w-wide 3xl:w-wide"
        >
          <h2 className="w-full mt-6 mb-4 text-xl font-bold text-black">
            Programme
          </h2>
          <div id="programme" className="grid w-full gap-10 lg:grid-cols-2 ">
            {programme.map((show) => (
              <Show
                key={show.id}
                title={show.attributes.nom}
                host={show.attributes.host}
                starts={show.attributes.heure_debut}
                ends={show.attributes.heure_fin}
                thumbnail={
                  show.attributes.image.data.attributes.formats.small.url
                }
              />
            ))}
          </div>
        </div>
      ) : (
        <span>loading ...</span>
      )}
    </div>
  );
};

export default programme;
