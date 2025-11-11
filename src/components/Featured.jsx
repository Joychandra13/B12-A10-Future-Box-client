import React from "react";
import { Link, useLoaderData } from "react-router";
import HabitCards from "./HabitCards";

const FeaturedHabits = () => {
  const data = useLoaderData();

  return (
    <div className="my-20 container">
      <h2 className="text-3xl md:text-4xl text-center mb-20 activeNav">
        Featured Habits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((habit) => (
            <HabitCards habit = {habit}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHabits;
