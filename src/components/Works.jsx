import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { staggerContainer } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  namezh,
  descriptionzh,
  isEnglish,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-testTertiary p-5 rounded-2xl sm:w-[340px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/ object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {isEnglish ? name : namezh}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {isEnglish ? description : descriptionzh}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = (props) => {
  const { isEnglish, setIsEnglish } = props;
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={"work"}>
        &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {isEnglish ? "My Projects" : "开发作品集"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {isEnglish ? "Projects" : "项目展示"}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {isEnglish
            ? "This is MY PROJECTS GALLERY, it contains all the projects I made. Some of them are homeworks of a programming course. Some of them are my brain storm."
            : "此板块展示我曾参与开发的项目作品。主要来源于课程的作业以及自己的头脑风暴"}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            isEnglish={isEnglish}
          />
        ))}
      </div>
    </motion.section>
  );
};

// export default SectionWrapper(Works, "");
export default Works;
