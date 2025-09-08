import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  TextField,
  Typography,
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    height: "1.25rem",
    padding: "0.5rem 0.5rem",
  },
  "& .MuiInputLabel-root": {
    top: "-0.25rem",
  },
});

const Register = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isCustomer: "yes",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );

      console.log(res);

      if (res.data.success) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(res.data.message || "Registration failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center pt-30">
      <Container maxWidth="sm" className="flex flex-col items-center m-20">
        <Paper className="w-full mx-auto p-6 rounded-lg bg-neutral-800 shadow-md">
          {/* Title */}
          <Typography variant="h5" className="mb-4 text-center font-semibold">
            Register
          </Typography>

          {/* Info */}
          <Typography variant="body2" className="p-5 text-gray-400 text-xs">
            Create an account to save your journey on any device and enjoy more
            features.
          </Typography>

          {/* Form */}
          <Box
            component="form"
            className="space-y-3 gap-y-5 flex flex-col"
            onSubmit={handleSubmit}
          >
            <StyledTextField
              fullWidth
              label="Username"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <StyledTextField
              fullWidth
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <StyledTextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />

            {/* Radio Group */}
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                className="text-gray-400 text-xs mb-1"
              >
                Are you a customer?
              </FormLabel>
              <RadioGroup
                row
                name="isCustomer"
                value={formData.isCustomer}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio size="small" />}
                  label="Yes"
                  className="text-gray-400 text-xs"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio size="small" />}
                  label="No"
                  className="text-gray-400 text-xs"
                />
              </RadioGroup>
            </FormControl>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-2xl text-white font-semibold"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </Box>

          <div className="flex items-center justify-center px-10 py-4">
            <Link to={"/login"}>
              <button className="text-purple-400 hover:underline">Login</button>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
