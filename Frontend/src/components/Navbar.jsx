import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(""); // State to store the user's name
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Get user data from localStorage if logged in
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUserName(user.name);
      } else {
        // If not logged in, reset username to empty string
        setUserName("");
      }
    }
  }, [isLoggedIn]);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("user");
    localStorage.removeItem("mailAddress");
    localStorage.removeItem("passWord");

    setIsLoggedIn(false);
    setUserName(""); // Clear the username on logout
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-md z-50 shadow-md">
      <div className="container w-4/5 mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          CardBuddy
        </NavLink>
        <div className="flex items-center md:hidden">
          {!menuOpen && (
            <button
              onClick={toggleMenu}
              className="text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="space-x-4 flex items-center hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-2 font-semibold"
                : "relative group hover:text-blue-600 px-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-2 font-semibold"
                : "relative group hover:text-blue-600 px-2"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-2 font-semibold"
                : "relative group hover:text-blue-600 px-2"
            }
          >
            Contact Us
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 px-2 font-semibold"
                    : "relative group hover:text-blue-600 px-2"
                }
              >
                Dashboard
              </NavLink>
              <span className="text-gray-800 font-medium">
                <span className="text-blue-600 border-x-2 px-1 border-black rounded-md">
                  {userName}
                </span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-red-600 hover:text-red-800"
              >
                <AiOutlineLogout size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 px-2 font-semibold"
                  : "relative group hover:text-blue-600 px-2"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
      {menuOpen && (
        <MobileMenu toggleMenu={toggleMenu} isLoggedIn={isLoggedIn} />
      )}
    </nav>
  );
};

export default Navbar;
