import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import HabitCards from "../components/HabitCards";
import LoadingSpinner from "../components/LoadingSpinner";

const ITEMS_PER_PAGE = 4;

const BrowsePublicHabits = () => {
  const habits = useLoaderData() || [];

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------- LOADING ---------- */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  /* ---------- FILTER ---------- */
  let filteredHabits = habits.filter(
    (habit) =>
      (category === "All" || habit.category === category) &&
      habit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ---------- SORT ---------- */
  filteredHabits.sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  /* ---------- PAGINATION ---------- */
  const totalPages = Math.ceil(filteredHabits.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHabits = filteredHabits.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="container mx-auto px-6 py-10 my-20">
      <h2 className="text-3xl md:text-4xl text-center mb-4">
        Browse Public <span className="activeNav">Habits</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Discover habits shared by the community.
      </p>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* LEFT: Category + Sort */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Category */}
          <label className="select w-full md:w-44 ">
            <span className="label text-gray-600">Category</span>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
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

          {/* Sort */}
          <label className="select w-full md:w-44">
            <span className="label text-gray-600">Sort</span>
            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
              }}
              className="select-bordered"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>
        </div>

        {/* RIGHT: Search */}
        <div className="join w-full md:w-72">
          <input
            type="text"
            className="input join-item w-full"
            placeholder="Search habits..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button className="btn join-item">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* CARDS */}
      {currentHabits.length === 0 ? (
        <p className="text-center text-gray-500">No matching habits found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentHabits.map((habit) => (
              <HabitCards key={habit._id} habit={habit} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center mt-10">
            <button
              className="btn btn-outline"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>

            <button
              className="btn btn-outline"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default BrowsePublicHabits;
