import React, { useState } from "react";
import { TextField, Container, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthStore } from "../store/authStore.jsx";
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    height: "1.25rem",
    padding: "0.5rem 0.5rem",
  },
  "& .MuiInputLabel-root": {
    top: "-0.25rem",
  },
});

const Login = () => {
  const { login, user } = useAuthStore();
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

      console.log(res);

      if (res.data.success) {
        toast.success("Login successful 🎉");
        // Save token (optional)
        // localStorage.setItem("token", res.data.token);
        login(res.data.user, res.data.token);

        console.log(user);

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
    <div className="flex items-center justify-center">
      <Container
        maxWidth="sm"
        className="flex flex-col items-center m-20 pt-30"
      >
        <Paper className="w-full mx-auto p-6 rounded-lg bg-neutral-800 gap-y-5 shadow-md">
          {/* Title */}
          <h2 className="text-center text-xl p-10 font-bold">Login</h2>

          {/* Form */}
          <Box
            component="form"
            className="space-y-3 gap-y-10 flex flex-col"
            onSubmit={handleSubmit}
          >
            <StyledTextField
              fullWidth
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              type="email"
              required
              InputLabelProps={{ shrink: true }}
            />
            <StyledTextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              type="password"
              required
              InputLabelProps={{ shrink: true }}
            />

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-2xl text-white font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </Box>

          {/* Footer */}
          <div className="flex items-center justify-between px-10 py-2">
            <button className="cursor-pointer hover:text-blue-600">
              Forget Password
            </button>
            <Link to={"/"}>
              <button className="cursor-pointer hover:text-purple-500">
                Create an Account
              </button>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
