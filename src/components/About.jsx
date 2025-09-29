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
        className={`${styles.sectionHeadText} gradient text-center`}
        style={{ marginBottom: '60px', marginTop: '200px' }}
      >
        My Skills
      </h2>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] mx-auto overflow-x-hidden overflow-y-hidden "
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Frontend */}
        <div className="w-full lg:w-5/8 flex flex-col text-center">
          <SkillTextArea
            title="Frontend"
            icon={<CodeSvg />}
            body={"Tools I use for building a website UI"}
            skillAreaClassName="FrontEnd"
          />
          <ul className="list-none pl-6 space-y-1">
            {frontend.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>

        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-3/9 flex flex-col items-center">
        <div className="lg:h-[1000px] h-[650px]">
          <p className={styles.sectionSubText}>Move me!</p>
          <SocratesModel />
        </div>

         {/* Devops */}
        <div className="mt-6 text-center">
          <p className="mt-6">Tools for Devops</p>
          <ul className="list-none pl-6 space-y-1">
            {devops.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
         </div>

        {/* Backend */}
        <div className="w-full lg:w-5/8 text-center">
          <SkillTextArea
            title="Backend"
            icon={<ServerSvg />}
            body={"Tools I use for API's, databases and servers"}
            skillAreaClassName="BackEnd"
          />
          <ul className="list-none pl-6 space-y-1">
            {backend.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>

        </div>

        {/* Skills Slider */}
        <div
          className="slider w-full"
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
      <div className="title-container">
        <h1 className="gradient">{title}</h1>
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
