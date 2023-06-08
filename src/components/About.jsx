import React, { Fragment } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { staggerContainer } from "../utils/motion";

const ServiceCard = ({
  index,
  title,
  titlezh,
  icon,
  link,
  isEnglish,
  setIsEnglish,
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <a
          href={link}
          target={"_blank"}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {isEnglish ? title : titlezh}
          </h3>
        </a>
      </motion.div>
    </Tilt>
  );
};

const About = (props) => {
  const { isEnglish, setIsEnglish } = props;
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={"about"}>
        &nbsp;
      </span>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {isEnglish ? "Introduction" : "自我介绍"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {isEnglish ? "Overview" : "大概情况"}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {isEnglish
          ? "Thanks for visiting my portofolio. I am a GIS developer. Sometime I write blog to show my project ideas and coding experiences. You can find myblog in my Notion Web and Wechat Official Account. Links are shown below."
          : "感谢您关注我的个人主页！我是一名GIS开发者，热衷于技术博客的创作，您可以通过以下链接访问我的微信公众号，Notion博客合以及GitHUB主页！"}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
            {...service}
          />
        ))}
      </div>
    </motion.section>
  );
};

// export default SectionWrapper(About, "about");
export default About;
