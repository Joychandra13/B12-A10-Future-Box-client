import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/img1.png";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};


const FeatureDeepDive = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between w-full h-max">
      <motion.div
        className="md:w-1/2 p-8 lg:p-16 xl:p-22 order-2 md:order-1 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <h2 className="text-4xl md:text-5xl xl:text-7xl mb-4 ">
          Visualize Your <strong className="activeNav">Progress</strong>
        </h2>
        <p className="text-base md:text-lg mb-6 xl:w-[85%]">
          Our powerful dashboard transforms raw data into meaningful insights.
          See your habits grow over time with beautiful, easy-to-read charts and
          celebrate every milestone.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="btn text-white bg-common w-fit"
        >
          Browse Public Habits
        </motion.button>
      </motion.div>

      <div
        className="md:w-1/2 order-1 md:order-2"
      >
        <div className="h-full w-full shadow-xl">
          <img
            src={Img1}
            className="h-full w-full object-cover"
            alt="Data dashboard showing visualized progress"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureDeepDive;
