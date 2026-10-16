import kosmo from "../assets/kosmo.png";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper'

const Hero = () => {
  const heroimg = kosmo;

  return (
    <section className="flex items-start overflow-hidden pb-0">
      <div className="w-full px-6 md:px-12 pt-[70px]">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Left side text */}
          <div className="flex-1 translate-x-20 -translate-y-40">
            <h1 className={`${styles.sectionHeadText} text-center mt-10 sm:mt-16 md:mt-35 mb-12`}>What motivates me is developing my skills to the next level and{" "}
              <span className={`${styles.sectionHeadText} gradient text-center mt-10 sm:mt-16 md:mt-35 mb-12`}>reaching for the stars</span>
               {" "}in the world of technology</h1>
            {/* <h1>I'm a 26-year old developer on an exciting journey in the world of
              technology.</h1>
            <p>What motivates me is developing my skills to the next level and
              reaching for the stars in the world of technology.E</p> */}
          </div>

          {/* Right side image */}
          <div className="flex-1 flex justify-center md:justify-end translate-x-24">
            <img
              src={heroimg}
              alt="Hero img"
              className="w-[500px] md:w-[700px] lg:w-[1700px] max-w-none h-auto object-contain [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]
    [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_95%)]"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");