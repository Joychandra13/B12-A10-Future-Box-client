import React from 'react';

const HeroSlide = ({ icon: Icon, title, text, bgClass }) => {
  return (
    <div className={`relative h-full p-4 text-white flex flex-col justify-center items-center text-center ${bgClass}`}>
      {Icon && <Icon className="text-4xl sm:text-5xl md:text-6xl mb-4" />}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg max-w-xl mb-4">
        {text}
      </p>
    </div>
  );
};

export default HeroSlide;
