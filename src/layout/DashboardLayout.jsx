import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { FaHome, FaClipboardList, FaChartLine } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import DarkModeToggle from "../components/DarkModeToggle";

const DashboardLayout = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* NAVBAR */}
        <nav className="navbar w-full px-4 flex justify-between">
          <div className="flex items-center gap-2">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon from your code */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 font-semibold">Habit Tracker Dashboard</div>
          </div>
          <DarkModeToggle />
        </nav>

        {/* PAGE CONTENT */}
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <Link to="/" className="p-5 text-xl font-bold activeNav text-center w-full is-drawer-close:hidden">
            Habit Tracker
          </Link>

          <ul className="menu w-full grow px-2">
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home"
              >
                <FaHome className="size-4" />
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                <FaChartLine className="size-4" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <CgProfile className="size-4" />
                <span className="is-drawer-close:hidden">My Profile</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/add-habit"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Habit"
              >
                <IoMdAddCircle className="size-4" />
                <span className="is-drawer-close:hidden">Add Habit</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/my-habits"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Habits"
              >
                <FaClipboardList className="size-4" />
                <span className="is-drawer-close:hidden">My Habits</span>
              </Link>
            </li>

            <li className="mt-auto">
              <button
                onClick={handleLogout}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-red-500"
                data-tip="Logout"
              >
                <FiLogOut className="size-4" />
                <span className="is-drawer-close:hidden">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
