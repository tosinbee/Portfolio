import { mookie, mtn, cil, clearer, atg } from "../assets/images";
import {
  calc,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  shopping,
  tailwindcss,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Functional Tester",
    company_name: "Procept Africa | MTN NIgeria",
    icon: mtn,
    iconBg: "#FFDE21",
    date: "March 2024 - December 2024",
    points: [
      "Improved test case execution efficiency by 25% through effective test planning, case, and defect management using Jira.",
      "Successfully conducted BAP tests for SIM vendors, ensuring 100% adherence to customer specifications, and enhancing customer satisfaction.",
      "Tested MTN’s POS application, restoring service for over 5 million customers post-migration.",
      "Collaborated with cross-functional teams to design test cases that reduced defects by 15%.",
      "Collaborated on project requirements and designed test cases.",
      "Identified and documented software defects, reducing the overall defect rate by 30%.",
      "Actively involved in process improvement initiatives, improving the QA process efficiency by 20%.",
    ],
  },
  {
    title: "Junior Frontend Engineer (Freelance)",
    company_name: "Clearerpay",
    icon: clearer,
    iconBg: "#adebb3",
    date: "August 2023 - February 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Engineering Intern",
    company_name: "Mookie Limited Lagos",
    icon: mookie,
    iconBg: "#dab1da",
    date: "November 2022 – April 2023",
    points: [
      "Developed and maintained web components using React and Tailwind CSS, improving application load time by 15%.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Engaged in sprint planning meetings that led to on-time delivery of projects 95% of the time.",
    ],
  },
  {
    title: "Frontend Engineering Intern",
    company_name: "Cecure Intelligence Limited,",
    icon: cil,
    iconBg: "#00b4d8",
    date: "August 2022 – October 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Acquired essential skills in HTML, CSS, and JavaScript, laying the foundation for user interface design.",
      "Demonstrated proficiency in version control with Git and contributed to project development and code maintenance.",
    ],
  },

  {
    title: "Frontend Engineering Intern",
    company_name: "Afro Tech Girls | IHS AFRICA,",
    icon: atg,
    iconBg: "#ff8da1",
    date: "March 2022 – October 2022",
    points: [
      "Created a responsive fashion blog using HTML, CSS, Bootstrap, and JavaScript showcasing adaptability and problem-solving abilities.",
      "Delivered cross-browser and cross-device compatible websites, ensuring a seamless user experience.",
      "Demonstrated proficiency in version control with Git and contributed to project development and code maintenance.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: shopping,
    name: "The Savvy Shopper",
    description:
      "Savvy Shopper is an online shopping platform built with React, CSS, Redux, and Firebase. It features a responsive UI, secure user authentication, and efficient data flow for a smooth, personalized shopping experience.",
    link: "https://github.com/tosinbee/savvy-shopper",
  },

  {
    iconUrl: calc,
    name: "Calculator",
    description:
      "Developed a simple, responsive calculator using React.js, featuring a clean and intuitive user interface. It efficiently handles basic arithmetic operations with smooth state management, providing a seamless user experience.",
    link: "https://github.com/tosinbee/calculator",
  },
];
