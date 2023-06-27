import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { Fragment } from "react";
import { SectionWrapper } from "../hoc";

import { staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, isEnglish, setIsEnglish }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={isEnglish ? experience.date : experience.datezh}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={
              isEnglish ? experience.company_name : experience.company_namezh
            }
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {isEnglish ? experience.title : experience.titlezh}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {isEnglish ? experience.company_name : experience.company_namezh}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {isEnglish
          ? experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))
          : experience.pointszh.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = (props) => {
  const { isEnglish, setIsEnglish } = props;
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={"career"}>
        &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {isEnglish ? "What I have known so far" : "目前我做了什么"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {" "}
          {isEnglish ? "Experience" : "教育与工作经历"}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

// export default SectionWrapper(Experience, "work");
export default Experience;
