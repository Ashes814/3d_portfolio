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
  workout,
  typhoon,
  bankist,
  hambuger,
  smartCampus,
  financial,
  tank,
  threejs,
  java,
  pgsql,
  oplayer,
  cesium,
  guessingNumber,
} from "../assets";

export const navLinks = [
  {
    id: "career",
    title: "Career",
    titlezh: "生涯路径",
  },
  {
    id: "work",
    title: "Projects",
    titlezh: "项目作品",
  },
  {
    id: "contact",
    title: "Contact",
    titlezh: "联系方式",
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
    points: [
      "Implement GIS on Environmatal Science Research",
      "Publishing On Top Journal As Fisrt Author",
    ],
    pointszh: [
      "将GIS工具应用于环境科学研究",
      "以第一作者身份在Top期刊中发表论文",
    ],
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
      "Created thematic maps of the automotive sales network with QGIS.",
      "Developed scripts to process spatial data with Pyqgis.",
      "Managed GeoDatabase of automotive sales network with Python and SQL.",
      "Crawled information from different websites related to automotive sales networks with scrapy.",
    ],
    pointszh: [
      "利用QGIS制作汽车销售网络地图",
      "利用PyQgis开发地理处理脚本，将空间数据处理时间缩短近一半",
      "通过Python与SQL管理空间数据库，建立汽车经销商网点地址数据库",
      "设计自动化脚本每月爬取汽车经销商网点数据，并进行数据清洗，形成高时空分辨率汽车销售网络数据",
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
    name: "Guessing Number",
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
  {
    name: "Workout App",
    namezh: "健身记录 App",
    description: "A web app for recording your workouts",
    descriptionzh: "用于记录健身及其定位的app",
    tags: [
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Leaflet",
        color: "green-text-gradient",
      },
    ],
    image: workout,
    source_code_link: "https://github.com/Ashes814/workout-react-ts",
  },
  {
    name: "Typhoon Monitor",
    namezh: "台风梅花监控系统",
    description: "A demo for Typhoon Monitor, designed for geography class",
    descriptionzh: "台风监控系统示例，用于地理课堂教学",
    tags: [
      {
        name: "echarts",
        color: "yellow-text-gradient",
      },
      {
        name: "responsive",
        color: "blue-text-gradient",
      },
    ],
    image: typhoon,
    source_code_link: "https://typhoon-meihua-monitor.netlify.app",
  },
  {
    name: "OO Bankist",
    namezh: "欧欧银行家",
    description: "A demo for bank accounts",
    descriptionzh: "银行账户系统的示例",
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
        name: "ES6",
        color: "pink-text-gradient",
      },
    ],
    image: bankist,
    source_code_link: "https://github.com/Ashes814/oo-bankist/",
  },
  {
    name: "Hambuger Order",
    namezh: "汉堡到家",
    description:
      "A demo for ordering hambuger in Mobile, an imitation of McDonalds",
    descriptionzh: "汉堡订餐购物车系统示例，模仿麦当劳点餐系统",
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
        name: "ES6",
        color: "pink-text-gradient",
      },
    ],
    image: hambuger,
    source_code_link: "https://github.com/Ashes814/order-food-app",
  },
  {
    name: "Gaode Smart Campus",
    namezh: "高德智慧校园游览",
    description:
      "A demo for Gaode map API, adding markers and optimizing routes",
    descriptionzh: "高德地图API示例，实现智慧校园添加标记与游览路径规划功能",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gaode Map API",
        color: "green-text-gradient",
      },
    ],
    image: smartCampus,
    source_code_link: "https://github.com/Ashes814/smart-campus",
  },
  {
    name: "Financial Management",
    namezh: "财务管理系统",
    description:
      "Financial Management System, Data Visualization, Statistics and Machien Learning",
    descriptionzh: "财务管理系统，实现数据可视化，统计建模及机器学习预测",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: financial,
    source_code_link: "https://github.com/Ashes814/finiancial-management",
  },
  {
    name: "Tank Game",
    namezh: "坦克大战游戏",
    description: "Tank Game with Java, OOP, MultiThreads, IO Stream",
    descriptionzh: "利用Java编写的坦克大战小游戏，应用多线程，面向对象及IO流",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: tank,
    source_code_link:
      "https://github.com/Ashes814/hsp-JAVA-basic/tree/main/tank90",
  },
];

export { services, technologies, experiences, testimonials, projects };
