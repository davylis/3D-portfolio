import {
  sysma,
  meta,
  hus,
  securitas,
  fit, 
  GD,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    // icon: web,
  },
  {
    title: "React Native Developer",
    // icon: mobile,
  },
  {
    title: "Backend Developer",
    // icon: backend,
  },
  {
    title: "Content Creator",
    // icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    // icon: html,
  },
  {
    name: "CSS 3",
    // icon: css,
  },
  {
    name: "JavaScript",
    // icon: javascript,
  },
  {
    name: "TypeScript",
    // icon: typescript,
  },
  {
    name: "React JS",
    // icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    // icon: redux,
  },
  {
    name: "Tailwind CSS",
    // icon: tailwind,
  },
  {
    name: "Node JS",
    // icon: nodejs,
  },
  {
    name: "MongoDB",
    // icon: mongodb,
  },
  {
    name: "Three JS",
    // icon: threejs,
  },
  {
    name: "git",
    // icon: git,
  },
  {
    name: "figma",
    // icon: figma,
  },
  {
    name: "docker",
    // icon: docker,
  },
];

const experiences = [
  {
    title: "Dance Teacher",
    company_name: "SyVo ry",
    icon: sysma,
    iconBg: "#BE1B82",
    date: "August 2025 - Present",
    points: [
      "Teaching commercial dance classes.",
      "Creating smooth choreographies with popular music.",
      "Helping students improve their style, confidence, and performance skills.",
      "Organizing small showcases and group practices.",
    ],
  },
  {
    title: "Nurse",
    company_name: "HUS",
    icon: hus,
    iconBg: "#f4f0f0ff",
    date: "October 2019 - Present",
    points: [
      "Right now on call worker, approximately once every three months from Seure Oy.",
      "Worked mostly in HUS emergency departments, supporting patient assessment, treatment and stabilization.",
      "Experience in accident & emergency nursing, handling urgent and critical cases.",
      "Gained clinical skills across multiple internships: retina clinic, psychiatry care clinic, cardiac surgery and pediatry department.",
      "Provided care for patients with serious illnesses, injuries, post-surgery recovery, and long-term conditions.",
    ],
  },
  {
    title: "Guard and Receptionist",
    company_name: "Securitas",
    icon: securitas,
    iconBg: "#1d1f28ff",
    date: "May 2019 - April 2023",
    points: [
      "Worked at the info desk, guiding visitors and answering their questions.",
      "Answered phone calls and gave directions to staff and guests.",
      "Earlier worked as a guard, doing patrols and keeping areas safe.",
    ],
  },
  {
    title: "Fitness and Dance Instructor",
    company_name: "Fitness24Seven",
    icon: fit,
    iconBg: "#1a2376ff",
    date: "April 2021 - March 2022",
    points: [
      "Taught group fitness and dance classes for different age groups",
      "Helped people improve their strength, flexibility, and overall health.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "NP Center of Contemporary Literature",
    icon: GD,
    iconBg: "#3764ebff",
    date: "January 2020 - June 2020",
    points: [
      "Designed book cover and visual concept for publishing project.",
    ],
  },
];

const projects = [
  {
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elits.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };