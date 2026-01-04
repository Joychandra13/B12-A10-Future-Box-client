import React from "react";

// Update these with your 3 unique image paths
import MissionImg from "../assets/img4.png";
import VisionImg from "../assets/img5.png";
import ValuesImg from "../assets/img6.png";

const About = () => {
  const team = [
    {
      name: "Joy Chandra",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Alice Johnson",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Mark Williams",
      role: "Lead Developer",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className=" overflow-x-hidden">
      {/* Banner Section */}
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-white px-4">
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
            About Us
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed">
            Learn more about Habit Tracker, our mission, vision, and how we help
            users build better habits every day.
          </p>
        </div>
      </div>

      {/* --- MISSION SECTION (Image Right) --- */}
      <section className="flex flex-col md:flex-row items-stretch w-full h-max">
        <div className="md:w-1/2 p-8 lg:p-16 order-2 md:order-1 flex flex-col justify-center ">
          <h2 className="text-4xl md:text-6xl mb-4">
            Our <strong className="activeNav">Mission</strong>
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Our mission is to empower individuals across the globe to take
            control of their daily routines by building small, meaningful
            habits. We believe that consistency beats intensity, and through
            simple tracking, motivation tools, and clear insights, we help users
            transform their personal and professional lives step by step.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src={MissionImg}
            alt="Mission"
            className="h-full w-full object-cover min-h-[300px]"
          />
        </div>
      </section>

      {/* --- VISION SECTION (Image Left) --- */}
      <section className="flex flex-col md:flex-row items-stretch w-full h-max">
        <div className="md:w-1/2 ">
          <img
            src={VisionImg}
            alt="Vision"
            className="h-full w-full object-cover min-h-[300px]"
          />
        </div>
        <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-center ">
          <h2 className="text-4xl md:text-6xl mb-4">
            Our <strong className="activeNav">Vision</strong>
          </h2>
          <p className="text-lg  leading-relaxed">
            We envision a future where personal growth is accessible to
            everyone, regardless of background or experience. Our goal is to
            become a trusted global platform for habit formation, helping
            millions of users stay focused, motivated, and confident while
            achieving long-term self-improvement.
          </p>
        </div>
      </section>

      {/* --- VALUES SECTION (Image Right) --- */}
      <section className="flex flex-col md:flex-row items-stretch w-full h-max">
        <div className="md:w-1/2 p-8 lg:p-16 order-2 md:order-1 flex flex-col justify-center ">
        <h2 className="text-4xl md:text-6xl mb-4">
            Core <strong className="activeNav">Values</strong>
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Integrity:</strong> We deeply respect user privacy and
              data security, ensuring transparency and trust in everything we
              build.
            </li>
            <li>
              <strong>Growth:</strong> We believe progress happens one step at a
              time, and we celebrate every small win that moves our users closer
              to their goals.
            </li>
            <li>
              <strong>Simplicity:</strong> Our tools are designed to be powerful
              yet intuitive, so users can focus on building habits without
              feeling overwhelmed.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src={ValuesImg}
            alt="Values"
            className="h-full w-full object-cover min-h-[300px]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
