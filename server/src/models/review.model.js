import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
  

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    }, // User's name

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    }, // Optional, if you want to allow like/upvotes on reviews

  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export default mongoose.model("Review", reviewSchema);
