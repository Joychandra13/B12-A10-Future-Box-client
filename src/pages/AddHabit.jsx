import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const AddHabit = () => {
  const { user } = useContext(AuthContext);

  const userEmail = user?.email;
  const userName = user?.displayName;

  const categories = ["Morning", "Work", "Fitness", "Evening", "Study", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      detailedDescription: e.target.detailedDescription.value || "",
      category: e.target.category.value,
      reminderTime: e.target.reminderTime.value,
      image: e.target.img.value || "",
      userName: userName,
      userEmail: userEmail,
      isPublic: true,
      completionHistory: [],
      streak: 0,
      createdAt: new Date(),
    };

    fetch("https://b12-a10-future-box-server-pi.vercel.app/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Habit added successfully!");
        console.log("Habit saved:", data);
        e.target.reset();
      })
      .catch((err) => {
        toast.error("Failed to add habit.");
        console.error("Submission error:", err);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center my-20 p-4">
      <Toaster position="top-right" />
      <div className="mb-8 w-full max-w-lg text-center">
        <h1 className="text-5xl ">
          Create Your <span className="activeNav">Habit</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Define your goal, set your reminders, and start tracking your success
          immediately.
        </p>
      </div>

      <div className="card w-full max-w-lg shrink-0 rounded-xl bg-white shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Habit Title */}
            <div>
              <label className="label">Habit Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g., 30 Minutes of Reading"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="label">Short Description</label>
              <textarea
                name="description"
                placeholder="Why is this habit important?"
                className="textarea textarea-bordered h-24 w-full"
                required
              />
            </div>

            {/* Detailed Description */}
            <div>
              <label className="label">Detailed Description / Notes</label>
              <textarea
                name="detailedDescription"
                placeholder="Add a more detailed explanation or notes (optional)"
                className="textarea textarea-bordered h-40 w-full"
              />
            </div>

            {/* Category and Reminder */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">Category</label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="label">Reminder Time</label>
                <input
                  type="time"
                  name="reminderTime"
                  defaultValue="08:00"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="label">Upload Image URL</label>
              <input
                type="url"
                name="img"
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* User Info */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  value={userName}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="flex-1">
                <label className="label">Your Email</label>
                <input
                  type="email"
                  value={userEmail}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn text-white bg-common w-full mt-6"
            >
              Add Habit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
