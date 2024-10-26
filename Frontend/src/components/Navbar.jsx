import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("user");
    localStorage.removeItem("mailAddress");
    localStorage.removeItem("passWord");

    setIsLoggedIn(false);
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
            <NavLink
              to="/"
              onClick={handleLogout} // Log out on click
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 px-2 font-semibold"
                  : "relative group hover:text-blue-600 px-2"
              }
            >
              Logout
            </NavLink>
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
