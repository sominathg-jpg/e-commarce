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
    <div className="flex items-center justify-center pt-30">
      <Container maxWidth="sm" className="flex flex-col items-center m-20">
        {/* Card */}
        <Paper className="w-full mx-auto p-6 rounded-lg bg-neutral-800 shadow-md">
          {/* Title */}
          <Typography variant="h5" className="mb-4 text-center font-semibold ">
            Register
          </Typography>

          {/* Info Text */}
          <Typography
            variant="body2"
            className="p-5 flex text-gray-400 text-xs"
          >
            Create an account to save your journey on any device and enjoy more
            features.
          </Typography>

          {/* Form */}
          <Box component="form" className="space-y-3 gap-y-5 flex flex-col">
            <StyledTextField
              fullWidth
              label="Username"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <StyledTextField
              fullWidth
              label="Email address"
              variant="outlined"
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
                aria-label="customer"
                name="row-radio-buttons-group"
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

            {/* Privacy Notice */}
            <Typography variant="caption" className="text-gray-400 mt-2 block">
              Your personal data will be used to support your experience
              throughout this website and to manage access to your account.
            </Typography>

            {/* Register Button */}
            <button className="mt-3 bg-purple-500 hover:bg-purple-600  px-5 py-2 rounded-2xl text-white font-semibold">
              Register
            </button>
          </Box>
          <div className="flex items-center justify-center px-10 py-4">
            <Link to={"/login"}>
              {" "}
              <button>Login</button>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
