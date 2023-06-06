import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, journal, id, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    {/* <p className="text-white font-black text-[48px]">"</p> */}

    <div className="mt-1">
      <p className="text-white tracking-wider text-[20px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] ">{journal}</p>
        </div>

        <a
          href={link}
          className="cursor-pointer blue-text-gradient font-bold"
          target="_blank"
        >
          Full Text
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            I Applied GIS in Environmental Science
          </p>
          <h2 className={styles.sectionHeadText}>Publications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.id} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
