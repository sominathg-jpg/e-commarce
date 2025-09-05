import React from "react";
import {
  Button,
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
import { Link } from "react-router-dom";
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
  return (
    <div className="flex items-center justify-center ">
      <Container
        maxWidth="sm"
        className="flex flex-col items-center m-20 pt-30"
      >
        {/* Card */}
        <Paper className="w-full mx-auto p-6 rounded-lg bg-neutral-800 gap-y-5 shadow-md">
          {/* Title */}
          <h2 className=" text-center text-xl p-10 font-bold ">Login</h2>

          {/* Form */}
          <Box component="form" className="space-y-3 gap-y-10 flex flex-col">
            <StyledTextField
              fullWidth
              label="Email address"
              variant="outlined"
              className="outline-purple-500 active:outline-purple-500"
              type="email"
              required
              InputLabelProps={{ shrink: true }}
            />
            <StyledTextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              required
              InputLabelProps={{ shrink: true }}
            />

            {/* Register Button */}
            <button className="mt-3   bg-purple-500 hover:bg-purple-600  px-5 py-2 rounded-2xl text-white font-semibold">
              Login
            </button>
          </Box>
          <div className="flex items-center justify-between px-10 py-2">
            <button className=" cursor-pointer hover:text-blue-600">
              Forget Password
            </button>
            <Link to={"/"}>
              {" "}
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

export default Register;
