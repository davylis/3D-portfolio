import SocratesModel from "./canvas/SocratesModel";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { textVariant } from '../utils/motion';
import { nodejs, spring, sqlite, css, aws, c, git, html, java, js, linux, mysql, postman, python, react, tailwind } from "../assets/tech";
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from "../styles";

const About = () => {

  const frontend = [
    "HTML - Markup Language",
    "CSS - Styling language",
    "JavaScript - Programming Language",
    "React - JavaScript Library",
    "TailwindCSS - CSS Framework",
    "Git - Version Control System"
  ];
  const backend = [
    "Java - Programmng Language",
    "Python - Programming Language",
    "C++ - Programming Language",
    "Node.js - JavaScript Runtime",
    "Spring Boot - Java Framework",
    "MySQL - Relational Database",
    "PostreSql - Database",
    "SQLite - Lightweight Database",
    "Postman - API Testing Tool"
  ];
  const devops = [
    "AWS - Cloud Platform",
    "Azure - Cloud PLatform",
    "Docker -  Containerization",
    "Linux - Operating System"];


  // Array of skills icons and their positions
  const skills = [
    { src: html, position: 1 },
    { src: css, position: 2 },
    { src: git, position: 3 },
    { src: aws, position: 4 },
    { src: java, position: 5 },
    { src: c, position: 6 },
    { src: js, position: 7 },
    { src: linux, position: 8 },
    { src: mysql, position: 9 },
    { src: postman, position: 10 },
    { src: python, position: 11 },
    { src: react, position: 12 },
    { src: tailwind, position: 13 },
    { src: nodejs, position: 14 },
    { src: sqlite, position: 15 },
    { src: spring, position: 16 },
  ];

  return (

    <>
      <h2
        className={`${styles.sectionHeadText} gradient text-center mt-20 sm:mt-32 md:mt-48 mb-16`}
      >
        My Skills
      </h2>

      <motion.div
        className="flex flex-wrap lg:flex-nowrap items-start justify-between w-full max-w-[1300px] mx-auto overflow-x-hidden overflow-y-hidden"
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Frontend */}
        <div className="w-full lg:w-5/12 flex flex-col text-center mt-52">
          <SkillTextArea
            title="Frontend"
            icon={<ServerSvg />}
            skillAreaClassName="FrontEnd"
          />
           <p className="font-bold mb-3">Tools I use for building a website UI</p>
            <ul className="list-none pl-0 space-y-2">
              {frontend.map((tool, index) => {
                const [name, description] = tool.split(" - ");
                return (
                  <li key={index}>
                    <span>{name}</span>{" "}-{" "}
                    <span className={styles.sectionSubText}>{description}</span>
                  </li>
                );
              })}
            </ul>
        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-4/12 flex flex-col items-center">
          <div className="w-full h-[700px] lg:h-[700px] flex flex-col items-center justify-center">
            <p className={`${styles.sectionSubText} hidden sm:block`}>Move me!</p>
            <SocratesModel />
          </div>

          {/* Operations */}
          <div className="w-full text-center">
            <SkillTextArea
              title="Operations"
              icon={<InfinitySvg />}
            />
            <p className="font-bold mb-3">Tools for Operations</p>
            <ul className="list-none pl-0 space-y-2">
              {devops.map((tool, index) => {
                const [name, description] = tool.split(" - ");
                return (
                  <li key={index}>
                    <span>{name}</span>{" "}-{" "}
                    <span className={styles.sectionSubText}>{description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Backend */}
        <div className="w-full lg:w-5/12 text-center mt-48">
          <SkillTextArea
            title="Backend"
            icon={<CodeSvg />}
            skillAreaClassName="BackEnd"
          />
          <p className="font-bold mb-3">Tools I use for API's, databases and servers</p>
            <ul className="list-none pl-0 space-y-2">
              {backend.map((tool, index) => {
                const [name, description] = tool.split(" - ");
                return (
                  <li key={index}>
                    <span>{name}</span>{" "}-{" "}
                    <span className={styles.sectionSubText}>{description}</span>
                  </li>
                );
              })}
            </ul>
        </div>
      </motion.div>

      {/* Skills Slider */}
      <motion.div>
        <div className="h-32"></div>
        <div
          className="slider w-full mt-12"
          reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 16,
          }}
        >
          <div className="list">
            {skills.map((skill) => (
              <div
                className="item"
                key={skill.position}
                style={{ "--position": skill.position }}
              >
                <img src={skill.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Helper components
const SkillTextArea = (props) => {
  const { title, icon, body, skillAreaClassName } = props;
  return (
    <div className={skillAreaClassName}>
      <div className="flex items-center justify-center gap-2">
        <h1 className="gradient text-2xl sm:text-3xl md:text-3xl lg:text-4xl">{title}</h1>
        <div className="icon">{icon}</div>
</div>
      <p>{body}</p>
    </div>
  )
}


const ServerSvg = () => {
  return (
    <>
      <svg width="64" height="64" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#8B5CF6;#EC4899;#8B5CF6"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#EC4899;#8B5CF6;#EC4899"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* bx-code-alt path */}
        <path
          fill="url(#grad)"
          d="M9.414 16l-4.707-4.707 4.707-4.707 1.414 1.414L7.242 11.5l3.586 3.586zM14.586 
    16l-1.414-1.414L16.758 11.5l-3.586-3.586 1.414-1.414L21.414 11.5z"
        />
      </svg>
    </>
  )
}


const InfinitySvg = () => {
  return (
    <>
      <svg width="64" height="64" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#8B5CF6;#EC4899;#8B5CF6"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#EC4899;#8B5CF6;#EC4899"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* 👇 Replace this path with any icon’s path */}
        <path
          fill="url(#grad)"
          d="M 501.98 206.15 c -9.769 -23.023 -25.998 -42.56 -46.458 -56.389 c -10.181 -6.873 -21.446 -12.34 -33.536 -16.068 c -12.009 -3.809 -24.842 -5.798 -38.088 -5.798 c -16.982 0 -33.294 3.316 -48.197 9.365 c -1.246 0.492 -2.402 0.986 -3.558 1.568 c -13.416 5.879 -25.675 14.16 -36.188 24.017 c -3.396 3.227 -6.623 6.623 -9.858 10.432 c -5.709 6.542 -11.588 14.079 -17.305 21.696 c -1.157 1.568 -2.402 3.226 -3.558 4.804 c -3.146 4.302 -33.212 48.358 -38.509 56.226 c -2.652 3.97 -5.798 8.442 -9.195 13.327 c -0.744 1.076 -1.568 2.24 -2.393 3.396 c -5.636 8.031 -11.928 16.481 -17.726 23.937 c -2.895 3.72 -5.798 7.197 -8.281 10.1 c -2.563 2.976 -4.884 5.378 -6.542 6.954 c -7.116 6.704 -15.486 12.171 -24.672 15.899 c -9.194 3.728 -19.214 5.798 -29.816 5.798 c -7.286 0 -14.322 -0.996 -20.944 -2.815 c -3.396 -0.913 -6.712 -2.07 -9.939 -3.477 c -14.248 -5.968 -26.419 -16.068 -34.95 -28.74 c -4.302 -6.372 -7.699 -13.327 -10.019 -20.783 c -2.233 -7.456 -3.558 -15.316 -3.558 -23.597 c 0 -11.014 2.24 -21.365 6.21 -30.892 c 6.049 -14.24 16.149 -26.329 28.821 -34.942 c 6.372 -4.31 13.326 -7.618 20.782 -9.939 c 7.448 -2.321 15.316 -3.638 23.597 -3.638 c 10.602 0.08 20.622 2.07 29.816 5.79 c 9.187 3.808 17.556 9.194 24.672 15.898 c 1.658 1.577 3.979 4.059 6.542 6.962 c 4.472 5.216 9.769 11.92 15.074 18.964 c 2.07 2.814 4.14 5.628 6.21 8.523 c 7.949 -11.588 21.858 -31.959 29.144 -42.48 c -1.237 -1.658 -2.482 -3.307 -3.72 -4.965 c -3.316 -4.23 -6.631 -8.281 -9.938 -12.009 c -3.316 -3.809 -6.462 -7.205 -9.858 -10.432 c -11.426 -10.772 -24.922 -19.545 -39.746 -25.586 c -14.904 -6.049 -31.222 -9.365 -48.196 -9.365 c -17.637 0 -34.53 3.566 -49.927 10.108 c -23.022 9.688 -42.487 25.918 -56.316 46.369 c -6.873 10.19 -12.332 21.527 -16.141 33.536 C 1.989 229.997 0 242.75 0 256.004 c 0 17.637 3.558 34.53 10.02 49.846 c 9.768 23.104 25.998 42.569 46.369 56.397 c 10.27 6.874 21.535 12.332 33.624 16.141 c 12.008 3.728 24.842 5.717 38.088 5.717 c 16.974 0 33.293 -3.316 48.196 -9.356 c 14.824 -6.049 28.239 -14.824 39.666 -25.506 l 0.08 -0.081 c 3.397 -3.146 6.543 -6.631 9.858 -10.44 c 5.709 -6.542 11.588 -14.071 17.305 -21.689 c 1.157 -1.577 2.402 -3.154 3.558 -4.723 c 3.146 -4.391 44.307 -64.758 47.696 -69.642 c 0.752 -1.076 1.577 -2.232 2.401 -3.396 c 5.637 -7.95 11.928 -16.48 17.726 -23.928 c 2.895 -3.728 5.798 -7.206 8.281 -10.101 c 2.564 -2.984 4.885 -5.386 6.542 -6.962 c 7.116 -6.704 15.486 -12.09 24.673 -15.898 c 2.24 -0.906 4.472 -1.649 6.792 -2.402 c 7.286 -2.15 14.984 -3.307 23.023 -3.388 c 11.013 0.08 21.446 2.232 30.882 6.291 c 14.241 5.96 26.42 16.06 34.943 28.732 c 4.31 6.38 7.706 13.335 10.019 20.782 c 2.321 7.456 3.566 15.324 3.566 23.605 c 0 11.014 -2.24 21.446 -6.21 30.883 c -6.049 14.24 -16.149 26.419 -28.821 34.942 c -6.372 4.31 -13.326 7.707 -20.782 9.939 c -7.367 2.321 -15.316 3.648 -23.597 3.648 c -10.602 0 -20.622 -2.07 -29.816 -5.798 c -9.187 -3.728 -17.557 -9.195 -24.673 -15.899 c -1.658 -1.577 -3.979 -4.059 -6.542 -6.954 c -4.472 -5.135 -9.776 -11.928 -15.074 -18.963 c -2.15 -2.815 -4.221 -5.718 -6.291 -8.613 c -0.663 0.994 -1.326 1.99 -2.07 3.065 c -13.666 20.039 -22.279 32.71 -26.994 39.576 c 1.237 1.658 2.483 3.235 3.72 4.893 c 3.316 4.221 6.631 8.281 9.938 12 c 3.234 3.808 6.462 7.294 9.858 10.44 c 11.426 10.763 24.923 19.538 39.746 25.587 c 14.904 6.04 31.215 9.356 48.197 9.356 c 17.636 0 34.53 -3.558 49.846 -10.019 c 23.103 -9.769 42.56 -25.999 56.396 -46.458 c 6.866 -10.181 12.421 -21.446 16.141 -33.536 C 510.01 282.083 512 269.25 512 256.004 C 512 238.367 508.442 221.474 501.98 206.15 Z"
        />
      </svg>

    </>
  )
}

const CodeSvg = () => {
  return (
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradServer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#8B5CF6; #EC4899; #8B5CF6"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#EC4899; #8B5CF6; #EC4899"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Server Icon Path from Boxicons */}
        <path
          fill="url(#gradServer)"
          d="M4 3h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 
           10h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z
           M6 7a1 1 0 100 2 1 1 0 000-2zm0 10a1 1 0 100 2 1 1 0 000-2z"
        />
      </svg>
    </>
  )
}

export default SectionWrapper(About, "about");
