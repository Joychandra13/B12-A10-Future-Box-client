import React from "react";

const Banner = () => {
  return (
    <div className="relative min-h-[60vh] w-full flex flex-col justify-center items-center text-white px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/joy1414/pexels-sora-shimazaki-5926397.jpg?updatedAt=1764196690190')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg leading-snug sm:leading-tight">
          Build Better Habits,
          <br className="hidden md:block" /> One Day at a Time
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed">
          Stay consistent, track your progress, and improve yourself every day.
          Make habit tracking simple, fun, and effective.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap">
          <button className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:scale-105 hover:shadow-xl transition transform">
            Get Started
          </button>

          <button className="btn bg-white text-purple-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg border-none hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
