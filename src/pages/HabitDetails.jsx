import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const HabitDetails = () => {
  const habit = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [habitState, setHabitState] = useState(habit);

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

  if (!habitState._id) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <div className="h-[80%]">
          <DotLottieReact
            src="https://lottie.host/0c21a180-0023-4c21-9da0-b6fa5d9b18e7/dm14QM8p07.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    );
  }

  const today = new Date();
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    return date.toISOString().split("T")[0];
  });

  const completedDays = habitState.completionHistory?.filter((day) =>
    last30Days.includes(day)
  ).length;

  const progressPercent = Math.round((completedDays / 30) * 100);

  const handleMarkComplete = async (habitId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/habits/complete/${habitId}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();

      if (data.success) {
        const todayStr = today.toISOString().split("T")[0];
        setHabitState((prev) => ({
          ...prev,
          streak: prev.streak + 1,
          completionHistory: [...prev.completionHistory, todayStr],
        }));
        toast.success("Habit marked complete! ✅");
      } else {
        toast.error("Already marked today or habit not found");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <Toaster position="top-right" reverseOrder={false} />
      <div
        key={habitState._id}
        className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl flex flex-col lg:flex-row"
      >
        <figure className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
          <img
            src={
              habitState.image ||
              "https://ik.imagekit.io/joy1414/Gemini_Generated_Image_qyew6tqyew6tqyew.png"
            }
            alt={habitState.title}
            className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
          />
        </figure>

        <div className="card-body lg:w-1/2 flex flex-col justify-between gap-4">
          <div>
            <h2 className="card-title text-3xl font-bold text-gray-800">
              {habitState.title}
            </h2>
            <p className="text-gray-600 mt-2">{habitState.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <strong>Category:</strong> {habitState.category}
              </div>
              <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <strong>Reminder:</strong> {habitState.reminderTime}
              </div>
              <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <strong>Created By:</strong> {habitState.userName}
              </div>
              <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <strong>Email:</strong> {habitState.userEmail}
              </div>
            </div>

            <div className="mt-4">
              <label className="font-semibold text-gray-700">
                Progress (last 30 days)
              </label>
              <progress
                className="progress progress-primary w-full mt-1"
                value={completedDays}
                max="30"
              ></progress>
              <p className="text-sm text-gray-600 mt-1">
                {progressPercent}% completed
              </p>
            </div>

            <div className="mt-2">
              <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-semibold">
                Current Streak: {habitState.streak} days
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.button
              onClick={() => handleMarkComplete(habitState._id)}
              className="btn text-white bg-common w-fit"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
              }}
            >
              Mark Complete ✅
            </motion.button>
            <motion.button
              onClick={() => window.history.back()}
              className="btn text-white bg-gray-400 w-fit"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
              }}
            >
              Back to Habits
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
