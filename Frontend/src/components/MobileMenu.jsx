import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ toggleMenu, isLoggedIn }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen inset-0 bg-white bg-opacity-90">
      <button
        onClick={toggleMenu}
        className="absolute border-2 rounded-full px-2 hover:border-rose-600 hover:text-rose-600 top-3 right-12 text-blue-600 text-2xl focus:outline-none"
      >
        &times;
      </button>
      <div className="flex flex-col space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700 text-lg" : " hover:text-blue-700 text-lg"
          }
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? "text-blue-700 text-lg" : " hover:text-blue-700 text-lg"
          }
          onClick={toggleMenu}
        >
          FAQ
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? "text-blue-700 text-lg" : " hover:text-blue-700 text-lg"
          }
          onClick={toggleMenu}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-700 text-lg" : " hover:text-blue-700 text-lg"
          }
          onClick={toggleMenu}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
