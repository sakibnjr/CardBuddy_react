import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMail = localStorage.getItem("mailAddress");
    const storedPassword = localStorage.getItem("passWord");

    if (storedMail === email && storedPassword === password) {
      toast.success("Login successful!");
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      toast.error("Wrong username or password!");
    }
  };

  return (
    <section className="py-14 bg-white">
      <div className="container w-4/5 mx-auto px-4">
        <div className="max-w-lg mx-auto bg-blue-50 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            Login
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?
            <NavLink to="/register" className="text-blue-700 font-semibold">
              Register here
            </NavLink>
          </p>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Login;
