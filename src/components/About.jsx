import SocratesModel from "./canvas/SocratesModel";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { textVariant } from '../utils/motion';
import { nodejs, spring, sqlite, css, aws, c, git, html, java, js, linux, mysql, postman, python, react, tailwind } from "../assets/tech";
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from "../styles";

// Main Component
const About = () => {
  // text body for skills text area
  const templateText1 = `I see the important role of Frontend development in shaping user experiences and 
  creating visually appealing interfaces. After all, these services are meant for people to use.
  Crafting a standout website leaves a lasting impression on users and helps keep them engaged 
  so they can fully take in what is the message of the website. I mostly use the React framework and code with HTML 
  and JavaScript to build websites. For styling, I work with CSS and am honing my skills further
  with TailwindCSS to make things look modern and responsive. I pay attention to responsive design, so sites work 
  well on all devices and of providing descriptive text for images to make website accessible to people with disabilities. 
  I also use Git for version control to control changes, experiment and collaborate with others. I use Linux(Zorin) too, which
  lets me really take full control of my computer.`;

  const templateText2 = `With Backend building, I design, build, and maintain the server-side parts of web applications. 
I use Spring Boot as a framework for server-side scripting and managing
the server environment and I mostly code in Java, with some Python as well. I am familiar with database 
systems and query languages  and I can work with relational databases(like MySQL) as well as non-relational
databases(like MongoDB) to manage data effectively. I write APIs that let the frontend and backend communicate 
smoothly, making data exchange easy. I am also very interesten in cybersecurity, icluding various methods of
securing data applications, network security, encryption, identity and access management(IAM) and risk management. 
By using middleware effectively, I can make applications more secure and improve overall performance. When 
it comes to cloud platforms, I have experience with AWS, though nowadays we run our own home server. I manage 
dependencies, building, and packaging Java/Spring Boot applications with Gradle and Maven. Additionally, I use 
Docker for containerization to deploy and run applications in isolated environments. )`;

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
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] mx-auto overflow-x-hidden overflow-y-hidden"
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Frontend */}
        <div className="w-full lg:w-1/4">
          <SkillTextArea
            title="Frontend"
            icon={<CodeSvg />}
            body={templateText1}
            skillAreaClassName="FrontEnd"
          />
        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-1/2 lg:h-[1000px] h-[650px]">
          <p className={styles.sectionSubText}>Move me!</p>
          <SocratesModel />
        </div>

        {/* Backend */}
        <div className="w-full lg:w-1/4">
          <SkillTextArea
            title="Backend"
            icon={<ServerSvg />}
            body={templateText2}
            skillAreaClassName="BackEnd"
          />
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
