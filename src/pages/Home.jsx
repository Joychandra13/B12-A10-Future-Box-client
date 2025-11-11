import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedHabits from "../components/Featured";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <HeroSection />
      </div>
      <FeaturedHabits />
    </div>
  );
};

export default Home;
