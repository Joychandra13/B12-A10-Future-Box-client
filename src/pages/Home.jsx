import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedHabits from "../components/Featured";
import WhyBuildHabits from "../components/WhyBuildHabits";
import FeatureDeepDive from "../components/FeatureDeepDive";
import CoreValueProposition from "../components/CoreValueProposition";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }
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
