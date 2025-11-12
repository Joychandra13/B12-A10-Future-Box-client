import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const MotionLink = motion.create(Link);

const MyHabits = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://b12-a10-future-box-server-pi.vercel.app/my-habits?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b12-a10-future-box-server-pi.vercel.app/habits/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              navigate("/browse-public-habits");
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  const handleMarkComplete = async (habitId) => {
    try {
      const res = await fetch(
        `https://b12-a10-future-box-server-pi.vercel.app/habits/complete/${habitId}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();

      if (data.success) {
        setHabits((prev) =>
          prev.map((habit) =>
            habit._id === habitId
              ? {
                  ...habit,
                  streak: habit.streak + 1,
                  completionHistory: [
                    ...habit.completionHistory,
                    new Date().toISOString().split("T")[0],
                  ],
                }
              : habit
          )
        );
        toast.success("Habit marked complete! ");
      } else {
        toast.error("Already marked today or habit not found ");
        console.log("Already marked today or habit not found");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 ">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl md:text-4xl text-center mb-8">
        My <span className="activeNav">Habits</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="card bg-base-100 shadow-lg flex flex-col"
          >
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
              <div className="flex flex-col justify-start gap-2">
                <Link
                  to={`/habits-details/${habit._id}`}
                  className="card-title activeNav"
                >
                  {habit.title}
                </Link>
                <div className="flex justify-start w-fit gap-2">
                  {habit.isPublic && (
                    <p className="text-xs text-gray-500">
                      Creator:{" "}
                      <span className="font-medium">{habit.userName}</span>
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    <strong>Created Date</strong> {habit.createdAt}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between mt-4 gap-2">
                <div className="flex flex-wrap gap-2 text-sm">
                  <p className=" flex flex-1 flex-col justify-center items-center p-1 border border-b-blue-500">
                    <strong>Category</strong> {habit.category}
                  </p>
                  <p className="flex flex-1 flex-col justify-center items-center p-1 border border-b-blue-500">
                    <strong>Current Streak</strong> {habit.streak} days
                  </p>
                </div>
                <MotionLink
                  to={`/update-habit/${habit._id}`}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="btn text-white w-full md:w-auto bg-common"
                >
                  Update
                </MotionLink>

                <MotionLink
                  onClick={() => handleDelete(habit._id)}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="btn text-white w-full md:w-auto bg-common"
                >
                  Delete
                </MotionLink>
                <MotionLink
                  onClick={() => handleMarkComplete(habit._id)}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="btn text-white w-full md:w-auto bg-common"
                >
                  Mark Complete
                </MotionLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHabits;
