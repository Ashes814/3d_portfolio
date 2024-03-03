import React from "react";
import { motion } from "framer-motion";
import { Tech } from "../components";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
const Hero = (props) => {
  const { isEnglish, setIsEnglish } = props;
  return (
    <section className="relative w-full h-96 mx-auto mb-16">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#804dee]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {isEnglish ? "Hi, I'm" : "嗨， 这里是"}
            <span className="text-[#804dee]">
              {isEnglish ? "Ouwen" : "欧欧"}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {isEnglish
              ? "I am a MSc Student in GIS."
              : "我是一名WebGIS开发者，常用JS/TS，React与Cesium开发有趣的三维GIS项目，同时兼任"}
            <br className="sm:block hidden" />
            {isEnglish
              ? "My research interests include Spatial Big Data, GeoAI, Tourism, Human Mobility, and Environmental Science."
              : "我是一名WebGIS开发者，常用JS/TS，React与Cesium开发有趣的三维GIS项目，同时兼任"}
            <br className="sm:block hidden" />
            {isEnglish
              ? "I also worked as a GIS developer. Building GIS apps with React & Java."
              : "我是一名WebGIS开发者，常用JS/TS，React与Cesium开发有趣的三维GIS项目，同时兼任"}
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
