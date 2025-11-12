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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error/>,
    children: [
        {
            path: "/",
            element: <Home />,
            loader: () => fetch('http://localhost:3000/latest-habits'),
        },
        {
            path: "/add-habit",
            element: <PrivateRoute><AddHabit /></PrivateRoute>,
        },
        {
            path: "/my-habits",
            element: <PrivateRoute><MyHabits /></PrivateRoute>,
        },
        {
            path: "/browse-public-habits",
            element: <BrowsePublicHabits />,
            loader: () => fetch('http://localhost:3000/habits'),
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
