import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner"; // Import your spinner
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Progress = () => {
  const dataFromLoader = useLoaderData();
  const { user } = useContext(AuthContext);
  const [userHabits, setUserHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && dataFromLoader) {
      const filtered = dataFromLoader.filter(
        (habit) => habit.userEmail === user.email
      );
      setUserHabits(filtered);
      // Short delay for a smooth transition
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [dataFromLoader, user]);

  // If still loading or data isn't processed yet, show spinner
  if (loading) {
    return (
      <div className="flex h-[70vh] w-full items-center justify-center">
        <LoadingSpinner size="text-6xl" text="Analyzing your progress..." />
      </div>
    );
  }

  // --- Chart Data Calculations ---
  const chartData = userHabits.map((habit) => ({
    name: habit.title,
    completions: habit.completionHistory?.length || 0,
  }));

  const pieData = [
    { name: "Public", value: userHabits.filter((h) => h.isPublic).length },
    { name: "Private", value: userHabits.filter((h) => !h.isPublic).length },
  ];

  const COLORS = ["#a855f7", "#ec4899"]; // Purple & Pink to match your theme

  const stats = [
    { title: "Total Habits", value: userHabits.length, color: "bg-blue-500" },
    {
      title: "Today",
      value: userHabits.filter((h) =>
        h.completionHistory?.includes(new Date().toISOString().split("T")[0])
      ).length,
      color: "bg-green-500",
    },
    {
      title: "Best Streak",
      value: Math.max(...userHabits.map((h) => h.streak || 0), 0),
      color: "bg-purple-500",
    },
    {
      title: "Public",
      value: userHabits.filter((h) => h.isPublic).length,
      color: "bg-yellow-500",
    },
    {
      title: "Private",
      value: userHabits.filter((h) => !h.isPublic).length,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="animate-fade-in p-2">
      <h2 className="text-4xl md:text-6xl mb-4">
        Your Habit <strong className="activeNav">Dashboard</strong>
      </h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="card bg-base-200 shadow-md p-4 flex flex-col items-center border border-base-300"
          >
            <h3 className="text-xs uppercase font-bold text-base-content/70">
              {stat.title}
            </h3>
            <p
              className={`text-2xl font-black mt-2 text-white w-full text-center rounded-lg py-1 ${stat.color}`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="card bg-base-200 p-6 shadow-xl border border-base-300">
          <h3 className="text-lg font-bold mb-6 ">Total Completions</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
              <YAxis stroke="currentColor" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="completions" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="card bg-base-200 p-6 shadow-xl border border-base-300">
          <h3 className="text-lg font-bold mb-6 ">Consistency Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
              <YAxis stroke="currentColor" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="completions"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="card bg-base-200 p-6 shadow-xl border border-base-300 lg:col-span-2">
          <h3 className="text-lg font-bold mb-2 text-center">
            Privacy Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Progress;
