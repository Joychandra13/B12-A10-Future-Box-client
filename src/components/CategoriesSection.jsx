import React from "react";
import { FaSun, FaBriefcase, FaDumbbell, FaMoon, FaBook } from "react-icons/fa";

const categories = [
  { icon: FaSun, title: "Morning", description: "Start your day with positive routines and energy." },
  { icon: FaBriefcase, title: "Work", description: "Stay productive and consistent with your professional habits." },
  { icon: FaDumbbell, title: "Fitness", description: "Maintain your health and build strength with daily exercises." },
  { icon: FaMoon, title: "Evening", description: "Wind down with habits that help you relax and reflect." },
  { icon: FaBook, title: "Study", description: "Improve knowledge and focus with structured learning habits." },
];

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl xl:text-6xl mb-4">
          Our <span className="activeNav">Categories</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Pick a category to focus on and start building habits that improve your life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-white p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-purple-600 mb-4">
                <category.icon className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
