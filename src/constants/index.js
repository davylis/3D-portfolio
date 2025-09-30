import {
  sysma,
  hus,
  securitas,
  fit, 
  GD,
  gym,
  ippool,
  portfolio,
  ptwo,
  click,
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
  // {
  //   name: "Comic Book about life",
  //   description:
  //     "Comic book about life.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //    image: ippool,
  //   source_code_link: "https://github.com/davylis",
  // },
  {
    name: "Portfolio website for work hunting",
    description:
      "Portfolio you're visiting right now, enjoy! Used some 3D Models and more cool features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "violet-text-gradient",
      },
      {
        name: "threejs",
        color: "yellow-text-gradient",
      },
        {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
     image: ptwo,
    source_code_link: "https://github.com/davylis/3D-portfolio",
  },
  {
    name: "Ticket Sale System",
    description:
      "The purpose of the project is to produce a ticketing system commissioned by the client. The system will be used at the client’s points of sale, where ticket sellers will sell, print, and verify tickets using a QR code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "JWTauthentication",
        color: "pink-text-gradient",
      },
      {
        name: "postresql",
        color: "orange-text-gradient",
      },
    ],
     image: ippool,
    source_code_link: "https://github.com/davylis/TicketGuru.",
  },
  {
    name: "Gym Application",
    description:
      "Application is designed to manage customer training schedules, monitor activities, and enhance fitness tracking. This application allows personal trainers to efficiently manage training plans, track customer activities, and maintain a user-friendly interface for all interactions.",
    tags: [
            {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "dayjs",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "orange-text-gradient",
      },
      {
        name: "lodash",
        color: "violet-text-gradient",
      },
      {
        name: "aggrid",
        color: "yellow-text-gradient",
      },
      {
        name: "bigcalendar",
        color: "brown-text-gradient",
      },
    ],
     image: gym,
    source_code_link: "https://github.com/davylis/Personal-Trainer-React-App",
  },
  {
    name: "IP Pool Manager",
    description:
      "Application are designed to streamline the management of IP addresses and associated network recources. With this application you can monitor, and maintain IP address pools, track device assigments, and manage related network configurations.",
    tags: [
            {
        name: "springsecurity",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
     image: ippool,
    source_code_link: "https://github.com/davylis/IP-Address-Management-System",
  },
    {
    name: "First Portfolio website",
    description:
      "My very first portfolio website. :3",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "violet-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
     image: portfolio,
    source_code_link: "https://davylis.github.io/",
  },
];

export { services, technologies, experiences, projects };