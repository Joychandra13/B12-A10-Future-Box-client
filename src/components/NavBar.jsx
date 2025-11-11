import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import avatar from "../assets/avatar.png";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const NavBar = () => {
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("User logged out successfully", { duration: 2000 });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeNav" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/add-habit"
              className={({ isActive }) =>
                isActive ? "activeNav" : "text-gray-700"
              }
            >
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-habits"
              className={({ isActive }) =>
                isActive ? "activeNav" : "text-gray-700"
              }
            >
              My Habits
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          to="/browse-public-habits"
          className={({ isActive }) =>
            isActive ? "activeNav" : "text-gray-700"
          }
        >
          Browse Public Habits
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <Toaster position="top-right" />
      <div className="navbar container mx-auto px-6">
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="text-lg md:text-2xl activeNav">
            Habit Tracker
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-purple-500">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL || avatar}
                    alt="User Avatar"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-fit p-4 shadow"
              >
                <li className="text-center">
                  <p className="text-lg activeNav">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn text-white bg-common w-full"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/login" className="btn text-white bg-common">
                  Login
                </Link>
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/signup" className="btn text-white bg-common">
                  Signup
                </Link>
              </motion.button> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
