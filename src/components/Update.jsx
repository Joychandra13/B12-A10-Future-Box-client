import React, { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Update = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  console.log("Loaded habit:", data); // check the data

  const habit = data;

  const userEmail = user?.email;
  const userName = user?.displayName;

  const categories = [
    "Morning",
    "Work",
    "Fitness",
    "Evening",
    "Study",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      detailedDescription: e.target.detailedDescription.value || "",
      category: e.target.category.value,
      reminderTime: e.target.reminderTime.value,
      image: e.target.img.value || habit.image || "",
      userName,
      userEmail,
    };

    fetch(
      `https://b12-a10-future-box-server-pi.vercel.app/habits/${habit._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Toaster position="top-right" />
      <div className="mb-8 w-full max-w-lg text-center">
        <h1 className="text-5xl text-gray-900">
          Update Your <span className="activeNav">Habit</span>
        </h1>
      </div>

      <div className="w-full max-w-lg shrink-0 rounded-xl bg-white shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Habit Title</label>
              <input
                type="text"
                defaultValue={habit?.title}
                name="title"
                placeholder="e.g., 30 Minutes of Reading"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={habit?.description}
                placeholder="Why is this habit important?"
                className="textarea textarea-bordered h-24 w-full"
                required
              />
            </div>

            <div>
              <label className="label">Detailed Description</label>
              <textarea
                name="detailedDescription"
                defaultValue={habit?.detailedDescription}
                placeholder="Add more details, notes, or motivation for this habit..."
                className="textarea textarea-bordered h-40 w-full"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">Category</label>
                <select
                  name="category"
                  defaultValue={habit?.category}
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
                  defaultValue={habit?.reminderTime || "08:00"}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">Upload Image URL (optional)</label>
              <input
                type="url"
                name="img"
                defaultValue={habit?.image}
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>

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
              Update Habit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
