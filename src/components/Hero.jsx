import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import StarryNight from './canvas/SocratesModel'
import Liisa_Intro from '../assets/Liisa_Intro_NCC_BQ.mp4'
import Liisa_IntroM from '../assets/Liisa_Intro_NCC_MQ.mp4'
import ReactPlayer from 'react-player';
import { styles } from "../styles";



const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(Liisa_Intro);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(Liisa_Intro);
      } else {
        setVideoSrc(Liisa_Intro);
      }
    };

     handleResize();

     window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const Video = ({ type = 'video/mp4' }) => (
     <div className="relative w-full h-screen overflow-hidden bg-black">
     <video
  className="
    fixed top-0 left-0 
    w-full h-full 
    object-cover 
    z-0 
    md:w-full md:h-full 
    sm:w-auto sm:h-full
  "
  autoPlay
  loop
  muted
  playsInline
>
  <source src={videoSrc} type={type} />
  Your browser does not support the video tag.
</video>

        {/* <div className="absolute bottom-20 left-20 z-10">
        <h1 className={`${styles.sectionSubText}  text-2xl md:text-xl`}>Let me help you with technical solutions</h1>
      </div> */}
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Video
        path={Liisa_Intro}   // use imported file
      />
    </div>
  );
};

export default Hero;
