import React from "react";
import { motion } from "framer-motion";
import Img2 from "../assets/img2.png";

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const CoreValueProposition = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between w-full h-max">
      <div
        className="md:w-1/2 order-1 md:order-1"
      >
        <div className="h-full w-full shadow-xl">
          <img
            src={Img2}
            className="h-full w-full object-cover"
            alt="Person celebrating successful goal achievement"
          />
        </div>
      </div>

      <motion.div
        className="md:w-1/2 p-8 lg:p-16 xl:p-22 order-2 md:order-2 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-4 ">
          Achieve Your <strong className="activeNav">Goals Faster</strong> 
        </h2>

        <ul className="space-y-4 text-lg md:text-xl mb-6 xl:w-[85%]">
          <li className="flex items-start">
            <span className="font-bold">1. </span>
            Personalized Tracking: Get insights tailored only to you.
          </li>
          <li className="flex items-start">
            <span className="font-bold">2. </span>
            Expert Strategies: Access proven, science-backed methods.
          </li>
          <li className="flex items-start">
            <span className=" font-bold">3. </span>
            Built-in Motivation: Tools designed to keep you consistent.
          </li>
        </ul>

        <motion.button
          className="btn text-white bg-common w-fit"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CoreValueProposition;
