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
  polyu,
  shnu,
  usc,
  ominifood,
  pigGame,
  threejs,
  java,
  pgsql,
  oplayer,
  cesium,
  guessingNumber,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    titlezh: "关于",
  },
  {
    id: "work",
    title: "Work",
    titlezh: "工作",
  },
  {
    id: "contact",
    title: "Contact",
    titlezh: "联络",
  },
];

const services = [
  {
    title: "WeChat Official Account",
    titlezh: "微信公众号（欧欧GIS日记）",
    icon: web,
    link: "https://www.baidu.com/",
  },
  {
    title: "Notion Blog",
    titlezh: "Notion博客",
    icon: mobile,
    link: "https://ouwen-z.notion.site/OOBlogs-8e03d2f8db714a82aafad8577e11f1df",
  },
  {
    title: "GitHub Repo",
    titlezh: "GitHub主页",
    icon: backend,
    link: "https://github.com/Ashes814",
  },
  {
    title: "Content Creator",
    titlezh: "待定",
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
    name: "java",
    icon: java,
  },
  {
    name: "pgsql",
    icon: pgsql,
  },
  {
    name: "oplayer",
    icon: oplayer,
  },
  {
    name: "cesium",
    icon: cesium,
  },
];

const experiences = [
  {
    title: "Msc in Geomatics (Geographic Information Systems)",
    titlezh: "理学硕士：地理信息科学",
    company_name: "The Hongkong Polytechnic University",
    company_namezh: "香港理工大学",
    icon: polyu,
    iconBg: "#383E56",
    date: "September 2023 - August 2024",
    datezh: "2023年9月 - 2024年8月",
    points: ["1"],
    pointszh: ["1"],
  },
  {
    title: "Research Assistant of Geography",
    titlezh: "地理学科研助理",
    company_name: "Shanghai Normal University",
    company_namezh: "上海师范大学",
    icon: shnu,
    iconBg: "#E6DEDD",
    date: "March 2022 - August 2023",
    datezh: "2022年3月 - 2023年8月",
    points: ["Research on Environmatal Science", "2", "3", "4"],
    pointszh: ["Research on Environmatal Science", "2", "3", "4"],
  },
  {
    title: "Geographic Data Analyst",
    titlezh: "地理数据分析师",
    company_name: "Urban Science",
    company_namezh: "优赛斯",
    icon: usc,
    iconBg: "#383E56",
    date: "September 2021 - Feburary 2022",
    datezh: "2021年9月 - 2022年2月",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    pointszh: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bsc in Geography (Normal)",
    titlezh: "理学学士：地理科学（师范）",
    company_name: "Shanghai Normal University",
    company_namezh: "上海师范大学",
    icon: shnu,
    iconBg: "#E6DEDD",
    date: "September 2017 - August 2021",
    datezh: "2017年9月 - 2021年8月",
    points: [
      "GPA: 3.68 Rank: 1/40",
      "National Scholarship, Dadi Scholarship, Academic Scholarship etc.",
      "Shanghai Outstanding Graduate",
      "SHNU Outstanding Student etc.",
    ],
    pointszh: [
      "GPA: 3.68 排名：1/40",
      "国家奖学金，大地奖学金，专业一等奖学金等",
      "上海市优秀毕业生",
      "上海师范大学先锋学子，优秀学生，优秀团员等称号",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Predicting sludge generation patterns and carbon reduction potential under Shared Socioeconomic Pathways",
    name: "First Author",
    namezh: "第一作者",
    journal:
      "Journal of Environmental Management (中科院1区Top | JCR Q1 | Cite Score: 11.4)",
    id: "1",
    link: "https://doi.org/10.1016/j.jenvman.2022.116088",
  },
  {
    testimonial:
      "Identifying multiple stakeholders' roles and network in urban waste separation management-a case study in Xiamen, China",
    name: "Other Author",
    namezh: "其它作者",
    journal:
      "Journal of Cleaner Production (中科院1区Top | JCR Q1 | Cite Score: 15.8)",
    id: "2",
    link: "https://doi.org/10.1016/j.jclepro.2020.123569",
  },
  {
    testimonial:
      "Promoting and maintaining public participation in waste separation policies — A comparative study in Shanghai, China",
    name: "Other Author",
    namezh: "其它作者",
    journal: "Resources, Environment and Sustainability (Cite Score: 2)",
    id: "3",
    link: "https://doi.org/10.1016/j.resenv.2023.100112",
  },
];

const projects = [
  {
    name: "Omnifood Website",
    namezh: "Omnifood 网页",
    description: "A Modern Omnifood Static Webasite with HTML5 and CSS3",
    descriptionzh:
      "基于CSS3与HTML开发的Omifood产品静态页面，具有现代网页设计感",
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
    namezh: "猜数字小游戏",
    description:
      "A simple Number Guessing App with basic HTML5, CSS3 and JavaScript",
    descriptionzh: "利用HTML5, CSS3与JavaScript开发的简单猜数字小游戏",
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
    namezh: "Pig Game",
    description: "A pig game for two players, built with basic Javascript",
    descriptionzh: "利用Javascript开发的pig game小游戏，需要两人参与",
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
