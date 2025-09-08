import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuthStore from "../store/useAuthStore.jsx";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );

      if (res.data.success) {
        toast.success("Login successful 🎉");
        login(res.data.user, res.data.token);
        setTimeout(() => navigate("/home"), 1000);
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-md p-8  bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-lg">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-black">Login</h2>
        <p className="text-center text-black mb-8">
          Welcome back! Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg  text-black border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg  text-black border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg text-black font-semibold shadow-md transition-all duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 text-sm text-black">
          <button className="hover:text-purple-400 transition">
            Forgot Password?
          </button>
          <Link to={"/register"}>
            <button className="hover:text-purple-400 transition">
              Create an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
