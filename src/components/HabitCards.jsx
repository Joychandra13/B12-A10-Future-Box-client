import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const MotionLink = motion.create(Link);

const HabitCards = ({ habit }) => {

  const { user } = use(AuthContext); 
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); 
    // if (user?.email) {
      navigate(`/habits-details/${habit._id}`);
    // } else {
    //   navigate("/login");
    // }
  };

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
          

          <div className="flex justify-start gap-1">
            <p className="p-1 border w-1/2 text-xs">
              <strong>Category: </strong>
              {habit.category}
            </p>
            <p className="p-1 border w-1/2 text-xs">
              <strong>Reminder: </strong>
              {habit.reminderTime}
            </p>
          </div>
          

          <p className="text-sm text-gray-500">
              {habit.description} <span className="text-xs">{habit.isPublic && (
              <span className="font-medium">({habit.userName})</span>
          )}</span>
            </p>

          
        </div>

        <div className="card-actions justify-end">
          <MotionLink
            onClick={handleClick}
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
