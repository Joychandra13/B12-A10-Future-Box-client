import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WhyBuildHabits = () => {
  return (
    <section className="px-6 py-16 bg-common text-white w-full h-max">
      <div className=" mx-auto container flex flex-col-reverse lg:flex-row items-center gap-10 h-full">
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-6xl  mb-4">
            Why Build <span className="font-bold">Habits?</span>
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Building positive habits is the foundation of consistent growth and
            a balanced life. Small steps today create a stronger tomorrow.
          </p>

          <ul className="space-y-3 text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-white text-lg font-bold">1.</span>
              <span>Improve your focus and mental clarity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white text-lg font-bold">2.</span>
              <span>Reduce stress through structured daily routines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white text-lg font-bold">3.</span>
              <span>Boost productivity and build self-discipline.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white text-lg font-bold">4.</span>
              <span>Make steady progress toward long-term goals.</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex justify-center h-full">
          <DotLottieReact
            src="https://lottie.host/eb9abc5a-686f-45f3-91a4-326fa5baf554/vELLcZST1y.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBuildHabits;
