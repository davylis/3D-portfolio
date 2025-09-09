import SocratesModel from "./canvas/SocratesModel";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { textVariant } from '../utils/motion';
import { css, aws, c, git, html, java, js, linux, mysql, postman, python, react, tailwind } from "../assets/tech";
import  SectionWrapper  from '../hoc/SectionWrapper'

// Main Component
const About = () => {
  // text body for skills text area
  const templateText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat.`;

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
  ];

  return (
    <section className="skills-section">
      <h1 className="section-title autoDisplay">My Skills 💪</h1>
      <motion.div className="skills-box autoDisplay" variants={textVariant()} initial="hidden" whileInView="show"
  viewport={{ once: true, amount: 0.25 }}>
        <SocratesModel />
        <SkillTextArea
          title="Frontend"
          icon={<CodeSvg />}
          body={templateText}
          skillAreaClassName='FrontEnd'
        />
        <SkillTextArea
          title="Backend"
          icon={<ServerSvg />}
          body={templateText}
          skillAreaClassName='BackEnd'
        />
        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 13,
          }}
        >
          <div className="list">
            {skills.map((skill) => (
              <div className="item" key={skill.position} style={{ "--position": skill.position }}>
                <img src={skill.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Helper components
const SkillTextArea = (props) => {
  const { title, icon, body, skillAreaClassName } = props;
  return (
    <>
      <div className={skillAreaClassName}>
        <h1 className="gradient">
          {title}
          {icon}
        </h1>
        <p>
          {body}
        </p>
      </div>
    </>
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

export default SectionWrapper (About, "about");
