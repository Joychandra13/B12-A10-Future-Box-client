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
      <div className="card-body flex flex-col justify-between">
        <div className="flex flex-col justify-start gap-4">
          <h2 className="card-title activeNav">{habit.title}</h2>

          <div className="flex justify-start gap-4 text-center">
            <p className="p-1 border border-b-blue-500 w-1/2 text-xs">
              <strong>Category: </strong>
              {habit.category}
            </p>
            <p className="p-1 border border-b-blue-500 w-1/2 text-xs">
              <strong>Reminder Time: </strong>
              {habit.reminderTime}
            </p>
          </div>

          {habit.isPublic && (
            <p className="text-sm text-gray-500">
              Creator: <span className="font-medium">{habit.userName}</span>
            </p>
          )}
        </div>

        <div className="card-actions justify-end">
          <MotionLink
            to={`/habits-details/${habit._id}`}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn text-white w-full bg-common"
          >
            View Details
          </MotionLink>
        </div>
      </div>
    </div>
  );
};

export default HabitCards;
