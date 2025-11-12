import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const HabitCards = ({ habit }) => {
  return (
    <div key={habit._id} className="card bg-base-100 shadow-lg ">
      <figure>
        <img
          className="h-96 w-full"
          src={
            habit.image ||
            "https://ik.imagekit.io/joy1414/Gemini_Generated_Image_qyew6tqyew6tqyew.png"
          }
          alt={habit.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title activeNav">{habit.title}</h2>
        <p>{habit.description}</p>
        {habit.isPublic && (
          <p className="text-sm text-gray-500">
            Creator: <span className="font-medium">{habit.userName}</span>
          </p>
        )}
        <div className="card-actions justify-end">
          <MotionLink
            to={`/habit/${habit._id}`}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn text-white bg-common"
          >
            View Details
          </MotionLink>
        </div>
      </div>
    </div>
  );
};

export default HabitCards;
