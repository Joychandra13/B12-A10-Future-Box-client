import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import HabitCards from "../components/HabitCards";
import LoadingSpinner from "../components/LoadingSpinner";

const BrowsePublicHabits = () => {
  const habits = useLoaderData() || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
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

  // Filter habits dynamically
  let filteredHabits = habits.filter(
    (habit) =>
      (category === "All" || habit.category === category) &&
      habit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center mb-4">
        Browse Public <span className="activeNav">Habits</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Discover habits shared by the community search, filter, and get
        inspired.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Filter */}
        <label className="select w-full md:w-1/6">
          <span className="label text-gray-600">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-bordered"
          >
            <option>All</option>
            <option>Morning</option>
            <option>Work</option>
            <option>Fitness</option>
            <option>Evening</option>
            <option>Study</option>
          </select>
        </label>

        {/* Search Box */}
        <div className="join w-full md:w-1/4">
          <input
            type="text"
            className="input join-item w-full"
            placeholder="Search habits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn join-item">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Habits Grid */}
      {filteredHabits.length === 0 ? (
        <p className="text-center text-gray-500">No matching habits found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHabits.map((habit) => (
            <HabitCards key={habit._id} habit={habit} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BrowsePublicHabits;
