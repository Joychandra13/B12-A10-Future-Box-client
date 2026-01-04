import React from "react";
import { FaClipboardList, FaChartLine, FaUsers, FaClock } from "react-icons/fa";

const services = [
  {
    icon: FaClipboardList,
    title: "Track Your Habits",
    description:
      "Easily log your daily habits and keep track of your progress to stay consistent.",
  },
  {
    icon: FaChartLine,
    title: "Analyze Your Progress",
    description:
      "Visualize streaks and trends to understand your growth over time and stay motivated.",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description:
      "Join a community of like-minded people to share achievements and challenges.",
  },
  {
    icon: FaClock,
    title: "Set Reminders",
    description:
      "Never miss a habit again with customizable reminders and notifications.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className=" text-4xl md:text-5xl xl:text-7xl mb-4">
          Our <span className="activeNav">Services</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Everything you need to build better habits, stay consistent, and track
          your progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-white p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-purple-600 mb-4">
                <service.icon className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
