import Liisa_Intro from '../assets/Liisa_Intro_NCC_BQ.mp4'
import Liisa_IntroM from '../assets/Liisa_Intro_NCC_MQ.mp4'
import { usePerformance } from "./PerformanceChecker";



const Hero = () => {
  const isHighPerformance = usePerformance();
  const videoSrc = isHighPerformance ? Liisa_Intro : Liisa_IntroM;

  // const YouTubeVideo = ({ videoId }) => (
  //   <div className="relative w-full h-screen overflow-hidden bg-black">
  //     <iframe
  //       className="
  //       absolute top-0 left-0
  //       w-full h-full
  //       object-cover
  //       z-0
  //       md:w-full md:h-full
  //       sm:w-auto sm:h-full
  //     "
  //       src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${videoId}`}
  //       frameBorder="0"
  //       allow="autoplay; fullscreen; picture-in-picture"
  //       allowFullScreen
  //       title="YouTube Background Video"
  //     ></iframe>

  //     {/* Optional overlay content */}
      
  //   {/* <div className="absolute bottom-20 left-20 z-10">
  //     <h1 className={`${styles.sectionSubText} text-2xl md:text-xl`}>
  //       Let me help you with technical solutions
  //     </h1>
  //   </div> */}
   
  //   </div>
  // );


  const Video = ({ type = 'video/mp4' }) => (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="
    top-0 left-0 
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
      <Video />
      {/* <YouTubeVideo videoId={"R3GfuzLMPkA"}/> */}
    </div>
  );
};

export default Hero;
