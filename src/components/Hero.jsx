import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import StarryNight from "./canvas/StarryNight";
// import { StarryNight } from './canvas/StarryNight'


const Hero = () => {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // 0.5 = slower than scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full h-[2000px] bg-top bg-no-repeat bg-cover h-screen mx-auto pt-20" >
     <div>
      <h1 className={`${styles.heroHeadText}`}>Hi! I'm <snap className="text-blue-500">Liisa</snap></h1>
      <div className="h-sreen w-full bg-black">
        <StarryNightCanvas/>
      </div>
     </div>
    </section>
  )
}

export default Hero;