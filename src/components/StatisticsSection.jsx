import React from "react";
import { FaClipboardList, FaUsers, FaRegCalendarAlt, FaBell, FaChartLine } from "react-icons/fa";

const statsData = [
  {
    title: "Habits Tracked",
    value: "8,500",
    desc: "Across all users",
    icon: <FaClipboardList className="text-4xl mx-auto text-purple-600" />,
  },
  {
    title: "New Users",
    value: "4,200",
    desc: "↗︎ 400 (22%)",
    icon: <FaUsers className="text-4xl mx-auto text-purple-600" />,
  },
  {
    title: "New Registers",
    value: "1,200",
    desc: "↘︎ 90 (14%)",
    icon: <FaRegCalendarAlt className="text-4xl mx-auto text-purple-600" />,
  },
  {
    title: "Reminders Set",
    value: "6,700",
    desc: "Stay consistent every day",
    icon: <FaBell className="text-4xl mx-auto text-purple-600" />,
  },
  {
    title: "Progress Analytics",
    value: "95%",
    desc: "Average streak completion",
    icon: <FaChartLine className="text-4xl mx-auto text-purple-600" />,
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl xl:text-6xl mb-12">
          Our <span className="activeNav">Statistics</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="stat-figure mb-2 ">{stat.icon}</div>
              <div className="stat-title text-lg font-semibold">{stat.title}</div>
              <div className="stat-value text-3xl font-bold activeNav">{stat.value}</div>
              <div className="stat-desc text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
