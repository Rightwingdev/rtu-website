import React from "react";
import { useRef,useEffect,useContext } from "react";
import Image from "next/image";
import {BsVolumeUp} from 'react-icons/bs'
import {AiFillPlayCircle,AiFillPauseCircle} from 'react-icons/ai'
import player from '../../../styles/components/player.module.scss'
import {PlayerContext} from '../../context/player'


const Player = () => {
  const audioPlayer = useRef();
  const {isPlaying,setIsPlaying}= useContext(PlayerContext)
  useEffect(() => {
   if(isPlaying){
    audioPlayer.current.play()
   }else{
    audioPlayer.current.pause()
   }
  }, [isPlaying])
  
  return (
    <div className="sticky bottom-0 z-50 flex items-center justify-between h-16 p-1 pl-5 pr-5 overflow-hiddensm:pl-10 sm:pr-10 max-w-screen bg-red">
      <div id="track" className="flex gap-2">
        <div id="image" className="w-12">
          <Image
            src="https://i1.sndcdn.com/artworks-6YpEZjeBZioo-0-t500x500.jpg"
            layout="responsive"
            height="90"
            width="90"
          ></Image>
        </div>
        <div id="track-info" className="flex flex-col justify-center">
          <span className="text-sm font-bold text-white">Sticky</span>
          <span className="text-sm font-thin text-white">Drake</span>
        </div>
      </div>
        <audio
        ref={audioPlayer}
          src="https://www.mboxdrive.com/New_York_Jazz_Lounge_-_Bar_Jazz_Cla_(getmp3.pro).mp3"
          preload="metadata"
        ></audio>
        <button className="flex items-center justify-center text-5xl text-white" onClick={()=>{
          setIsPlaying(oldVal=>!oldVal)
        }}>
          {isPlaying?<AiFillPauseCircle/>:<AiFillPlayCircle/>}
        </button>

      <div id="sound controll" className="flex items-center gap-1 text-3xl text-white">
        <BsVolumeUp/>
        <input onChange={(e)=>{
          audioPlayer.current.volume=e.target.value/100
        }} type="range" min="0" max="100" className={`w-20 sm:w-full h-2 bg-white rounded-lg appearance-none cursor-pointer focus:outline-none ${player.player}`} />
      </div>
    </div>
  );
};

export default Player;
