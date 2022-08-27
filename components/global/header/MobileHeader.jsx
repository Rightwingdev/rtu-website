import React, { useContext, useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import axios from "axios";
import { PlayerContext } from "../../context/player";

const MobileHeader = () => {
  const [currentShow, serCurrentShow] = useState({});
  const [loading, setloading] = useState(true);
  const [programme, setProgramme] = useState([]);
  const { isPlaying, setIsPlaying } = useContext(PlayerContext);
  useEffect(() => {
    axios
    .get("http://localhost:3000/api/currentEmission")
    .then((res) => {
      serCurrentShow(res.data[0]);
      if (res.data !== "no show") {
        setloading(false);
      }
    })
    .catch(() => console.log("no shows"));
  }, []);
  const parsetime = (starts, ends) => {
    const addZero = (num) => {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    };
    let sdate = new Date(starts);
    let edate = new Date(ends);
    let startHoure =
      addZero(sdate.getHours()) + ":" + addZero(sdate.getMinutes());
    let endHoure =
      addZero(edate.getHours()) + ":" + addZero(edate.getMinutes());
    return startHoure + "-" + endHoure;
  };

  return (
    <div
      className={
        loading == false
          ? " lg:hidden w-screen h-64 pt-4 pl-4 pr-4 sm:pl-10 sm:pr-10  max-w-screen overflow-hidden text-white select-none bg-red"
          : "hidden"
      }
    >
      {loading == false && (
        <div id="container" className="flex justify-center w-full h-full max-h-full">
          <div id="info" className="flex flex-col justify-center w-3/4 gap-2 md:w-2/4">
            <div id="live" className="flex items-center gap-1">
              <CgMediaLive />
              <span className="text-sm">En Ce Moment</span>
            </div>
            <h1 className="text-2xl font-bold text-white">
              {currentShow.attributes.nom}
            </h1>
            <h2 className="text-lg font-semibold text-white">
              {parsetime(
                currentShow.attributes.heure_debut,
                currentShow.attributes.heure_fin
              )}
            </h2>
            <h2 className="text-lg font-semibold text-white">
              {currentShow.attributes.host}
            </h2>
            <button
              onClick={() => {
                setIsPlaying(true);
              }}
              className="flex items-center text-4xl text-white"
            >
              <AiFillPlayCircle />
            </button>
          </div>
          
            <div id="image" className="relative w-full h-full sm:w-72 md:w-60 ">
            <img
              src={`http://localhost:1337${currentShow.attributes.thumbnail.data.attributes.formats.medium.url}`}
              className="absolute bottom-0 object-fit "
            ></img>
            </div>
        </div>
      )}

    </div>
  );
};

export default MobileHeader;
