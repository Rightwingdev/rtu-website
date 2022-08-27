import Topbar from "./topBar/Topbar";
import Footer from "./footer/Footer";
import Player from "./player/Player";
import {useState } from "react";
import {PlayerContext} from '../context/player'
export default function Layout({ children }) {
  const [isPlaying,setIsPlaying]=useState(false)
  return (
    <PlayerContext.Provider value={{isPlaying,setIsPlaying}}>
    <div className="flex flex-col items-center overflow-hidden bg-white font-roboto max-w-screen ">
      <Topbar />
      <main className="overflow-hidden max-w-screen">{children}</main>
      <Footer />
    </div>
    <Player />
    </PlayerContext.Provider>
  );
}
