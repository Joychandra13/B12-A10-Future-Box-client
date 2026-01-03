import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import BrowsePublicHabits from "../pages/BrowsePublicHabits";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import HabitDetails from "../pages/HabitDetails";
import Update from "../components/Update";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/MyProfile";
import Progress from "../pages/Progress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-habits"),
        // loader: () => fetch("https://b12-a10-future-box-server-pi.vercel.app/latest-habits"),
      },
      {
        path: "/add-habit",
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-habit/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b12-a10-future-box-server-pi.vercel.app/habits/${params.id}`
          ),
      },

      {
        path: "/my-habits",
        element: (
          <PrivateRoute>
            <MyHabits />
          </PrivateRoute>
        ),
      },
      {
        path: "/habits-details/:id",
        element: <HabitDetails />,
        loader: ({ params }) =>
          fetch(
            `https://b12-a10-future-box-server-pi.vercel.app/habits/${params.id}`
          ),
      },
      {
        path: "/browse-public-habits",
        element: <BrowsePublicHabits />,
        loader: () =>
          fetch("https://b12-a10-future-box-server-pi.vercel.app/habits"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Progress />,
        loader: () =>
          fetch("https://b12-a10-future-box-server-pi.vercel.app/habits").then(
            (res) => {
              if (!res.ok) throw new Error("Failed to fetch habits");
              return res.json();
            }
          ),
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "add-habit",
        element: <AddHabit />,
      },
      {
        path: "my-habits",
        element: <MyHabits />,
        loader: () =>
          fetch("https://b12-a10-future-box-server-pi.vercel.app/habits").then(
            (res) => {
              if (!res.ok) throw new Error("Failed to fetch habits");
              return res.json();
            }
          ),
      },
      {
        path: "progress",
        element: <Progress />,
        loader: () =>
          fetch("https://b12-a10-future-box-server-pi.vercel.app/habits").then(
            (res) => {
              if (!res.ok) throw new Error("Failed to fetch habits");
              return res.json();
            }
          ),
      },
    ],
  },
]);
