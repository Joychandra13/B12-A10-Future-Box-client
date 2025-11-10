import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import BrowsePublicHabits from "../pages/BrowsePublicHabits";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/add-habit",
            element: <AddHabit />,
        },
        {
            path: "/my-habits",
            element: <MyHabits />,
        },
        {
            path: "/browse-public-habits",
            element: <BrowsePublicHabits />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
    ]
  },
]);
