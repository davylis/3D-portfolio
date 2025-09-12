import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import StarryNight from './canvas/SocratesModel'
import Liisa_Intro from '../assets/Liisa_Intro_NCC_LQ.mp4'
import ReactPlayer from 'react-player';



const Hero = () => {
  const Video = ({ height, width, path, type = 'video/mp4' }) => (
    <video
      width={width}
      height={height}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={path} type={type} />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Video
        width="1024"
        height="576"
        path={Liisa_Intro}   // use imported file
      />
    </div>
  );
};

export default Hero;
