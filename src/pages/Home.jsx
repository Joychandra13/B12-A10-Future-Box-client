import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedHabits from "../components/Featured";
import WhyBuildHabits from "../components/WhyBuildHabits";
import FeatureDeepDive from "../components/FeatureDeepDive";
import CoreValueProposition from "../components/CoreValueProposition";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <HeroSection />
      </div>
      <FeaturedHabits />
      <WhyBuildHabits/>
      <CoreValueProposition/>
      <FeatureDeepDive/>
    </div>
  );
};

export default Home;
