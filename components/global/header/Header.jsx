import React, { useContext, useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import axios from "axios";
import Programme from "./Programme";
import headerStyle from "../../../styles/components/header.module.scss";
import { PlayerContext } from "../../context/player";

const Header = () => {
  const [currentShow, serCurrentShow] = useState({});
  const [loading, setloading] = useState(true);
  const [programme, setProgramme] = useState([]);
  const { isPlaying, setIsPlaying } = useContext(PlayerContext);
  useEffect(() => {
    axios.get("");
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/programmes?populate=%2A")
      .then((res) => {
        setProgramme(res.data.data);
      });
  }, []);
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
          ? "hidden lg:flex justify-center w-screen h-64  max-w-screen overflow-hidden text-white select-none bg-red"
          : "hidden"
      }
    >
      <div
        id="wide screen container"
        className="flex w-full h-full md:pl-16 md:pr-16 3xl:max-w-wide 3xl:w-wide"
      >
        {loading == false && (
          <div id="left" className="flex max-h-full md:w-3/4">
            <div
              id="info"
              className="flex flex-col justify-center w-2/6 gap-1 pl-16"
            >
              <div id="live" className="flex items-center gap-1">
                <CgMediaLive />
                <span className="text-sm">En Ce Moment</span>
              </div>
              <h1 className="text-3xl font-bold tracking-wide text-white">
                {currentShow.attributes.nom}
              </h1>
              <h2 className="text-xl font-semibold text-white">
                {parsetime(
                  currentShow.attributes.heure_debut,
                  currentShow.attributes.heure_fin
                )}
              </h2>
              <h2 className="text-xl font-semibold text-white">
                {currentShow.attributes.host}
              </h2>
            </div>
            <div
              id="image"
              className="relative self-end w-60 h-5/6 justify-self-start"
            >
              <img
                src={`http://localhost:1337${currentShow.attributes.thumbnail.data.attributes.formats.medium.url}`}
                className="absolute object-cover object-bottom"
              ></img>
            </div>
            <div
              id="right"
              className="flex items-center justify-start w-2/6 gap-1 pl-10 "
            >
              <button
                onClick={() => {
                  setIsPlaying(true);
                }}
                className="flex items-center justify-center text-white text-7xl"
              >
                <AiFillPlayCircle />
              </button>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                LE <span className="underline ">DIRECT</span>
              </h2>
            </div>
          </div>
        )}
        <div
          id="right"
          className="hidden w-2/6 h-full p-4 border-l-2 md:inline-block"
        >
          <h3 className="font-semibold">Programme</h3>
          <div
            className={`snap-x touch-auto w-full max-h-full overflow-auto  scroll-smooth flex flex-col gap-2 p-3 ${headerStyle.scrollbar}`}
          >
            {programme != [] &&
              programme.map((show) => (
                <Programme
                  key={show.id}
                  title={show.attributes.nom}
                  host={show.attributes.host}
                  starts={show.attributes.heure_debut}
                  ends={show.attributes.heure_fin}
                  thumbnail={
                    show.attributes.image.data.attributes.formats.thumbnail.url
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
