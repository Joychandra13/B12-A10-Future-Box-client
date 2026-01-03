import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImgFAQ from "../assets/img3.png";

const faqs = [
  {
    question: "How do I create a habit?",
    answer: "Click on 'Add Habit' in your dashboard, fill the form, and submit it to start tracking your habit.",
  },
  {
    question: "Can I track multiple habits?",
    answer: "Yes! You can create and track as many habits as you like.",
  },
  {
    question: "Do you provide reminders?",
    answer: "Absolutely! You can set a reminder time for each habit to never miss a day.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes, your data is secure and private, accessible only to you.",
  },
];

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between w-full h-max bg-white">
      {/* Left Side: Image */}
      <div className="md:w-1/2 order-1 md:order-1">
        <div className="h-full w-full shadow-xl">
          <img
            src={ImgFAQ}
            className="h-full w-full object-cover"
            alt="Frequently Asked Questions"
          />
        </div>
      </div>

      {/* Right Side: FAQ Accordion */}
      <motion.div
        className="md:w-1/2 p-8 lg:p-16 xl:p-22 order-2 md:order-2 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <h2 className="text-4xl md:text-5xl xl:text-7xl mb-8">
          Common <strong className="activeNav">Questions</strong>
        </h2>

        <div className="space-y-4 xl:w-[90%]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl font-bold activeNav">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;