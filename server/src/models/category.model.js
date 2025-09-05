import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate category titles
      trim: true,
    },
    image: {
      type: String,
      required: false, // Optional image URL for category banner/icon
    },
    description: {
      type: String,
      required: false, // Optional: short description of the category
    },
    slug: {
      type: String,
      required: false,
      unique: true, // Useful for SEO-friendly URLs
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

export default mongoose.model("Category", categorySchema);
