import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import cloudinary from "../config/cloudanary.js";
config();
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(208)
        .json({ success: false, message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email }).populate({
      path: "orders",
      populate: {
        path: "products", // populate products inside each order
        select: "name price reviews",
        populate: {
          path: "reviews",
          populate: { path: "user", select: "name email" },
        },
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Make sure password exists in DB
    if (!user.password) {
      return res
        .status(500)
        .json({ success: false, message: "User has no password set" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = req.file;
    const { name, email, phone, password, address } = req.body;

    console.log(id);
    // console.log(profile);
    // console.log({ name, email, phone, password, address });

    // Check if user exists
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updates = {}; // collect dynamic updates

    // ✅ Handle profile picture
    if (profile) {
      const uploadResponse = await cloudinary.uploader.upload(
        `data:${profile.mimetype};base64,${profile.buffer.toString("base64")}`,
        { folder: "profile" }
      );
      updates.avatar = uploadResponse.secure_url;
    }

    // ✅ Handle text fields
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (phone) updates.phone = phone;
    if (address) updates.address = address;

    // ✅ Handle password securely
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updates.password = hashedPassword;
    }

    // ✅ If no updates provided
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No updates provided",
      });
    }

    // ✅ Update user in DB
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password"); // hide password in response

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update profile error:", error);

    if (error.http_code === 413) {
      return res.status(413).json({
        success: false,
        message:
          "The uploaded file is too large. Please upload a smaller file.",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
