import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ominifood,
  pigGame,
  threejs,
  guessingNumber,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "WeChat Official Account",
    icon: web,
    link: "https://www.baidu.com/",
  },
  {
    title: "Notion Blog",
    icon: mobile,
    link: "https://ouwen-z.notion.site/OOBlogs-8e03d2f8db714a82aafad8577e11f1df",
  },
  {
    title: "GitHub Repo",
    icon: backend,
    link: "https://github.com/Ashes814",
  },
  {
    title: "Content Creator",
    icon: creator,
    link: "https://www.baidu.com/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Msc in Geographic Information Science",
    company_name: "POLYU",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2023 - August 2024",
    points: ["1"],
  },
  {
    title: "Research Assistant of Geography",
    company_name: "Shanghai Normal University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - August 2023",
    points: ["Research on Environmatal Science", "2", "3", "4"],
  },
  {
    title: "Geographic Data Analyst",
    company_name: "Urban Science",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2021 - Feburary 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bsc in Geography (Normal)",
    company_name: "Shanghai Normal University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2017 - August 2021",
    points: ["National Scholarship", "rank 1", "MCM", "Participating in c"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Omnifood Website",
    description: "A Modern Omnifood Static Webasite with HTML5 and CSS3",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
    ],
    image: ominifood,
    source_code_link: "https://zowomnifood.netlify.app",
  },
  {
    name: "Guessing Number Game",
    description:
      "A simple Number Guessing App with basic HTML5, CSS3 and JavaScript",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: guessingNumber,
    source_code_link: "https://oo-guessing-number.netlify.app",
  },
  {
    name: "Pig Game",
    description: "A pig game for two players, built with basic Javascript",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: pigGame,
    source_code_link: "https://oo-piggame.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
