import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const HeroSlide = ({ icon: Icon, title, text, bgClass }) => {
  return (
    <div
      className={`relative min-h-[70vh] p-6 lg:p-0 text-white flex flex-col justify-center items-center rounded-none text-center ${bgClass}`}
    >
      {Icon && <Icon className="text-4xl sm:text-5xl md:text-6xl mb-6" />}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={0}
          typeSpeed={75}
          words={[
           title
          ]}
        />
        
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-8">{text}</p>
      {/* Buttons for every slide */}
      <div className="flex flex-col sm:flex-row w-full justify-center gap-4 flex-wrap">
          <Link to='/login' className="btn w-full md:w-fit bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:scale-105 hover:shadow-xl transition transform">
            Get Started
          </Link>

          <button className="btn w-full md:w-fit bg-white text-purple-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg border-none hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
    </div>
  );
};

export default HeroSlide;
