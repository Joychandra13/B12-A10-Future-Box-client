import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "activeNav"
              : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-habit"
          className={({ isActive }) =>
            isActive
              ? "activeNav"
              : "text-gray-700"
          }
        >
          Add Habit
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-habits"
          className={({ isActive }) =>
            isActive
              ? "activeNav"
              : "text-gray-700"
          }
        >
          My Habits
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-public-habits"
          className={({ isActive }) =>
            isActive
              ? "activeNav"
              : "text-gray-700"
          }
        >
          Browse Public Habits
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          {/* Logo with gradient */}
          <Link to='/' className="text-lg md:text-2xl activeNav">
            Habit Tracker
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          {/* Login: outline button with gradient text */}
          <Link
            to="/login"
            className="btn border-2 border-purple-500 text-transparent bg-clip-text bg-common"
          >
            Login
          </Link>

          {/* Signup: solid gradient background */}
          <Link
            to="/signup"
            className="btn text-white bg-common"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
