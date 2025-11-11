import React from "react";
import { Link } from "react-router";

const HabitCards = ({habit}) => {
  return (
    <div key={habit._id} className="card bg-base-100 shadow-lg ">
      <figure>
        <img
        className="h-75 w-full"
          src={habit.image || "https://ik.imagekit.io/joy1414/Gemini_Generated_Image_qyew6tqyew6tqyew.png"}
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
          <Link to={`/habit/${habit._id}`} className="btn text-white bg-common">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HabitCards;
