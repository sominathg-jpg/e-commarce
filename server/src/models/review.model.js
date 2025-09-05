import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

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

    title: {
      type: String,
    }, // Optional short title for the review

    comment: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    }, // Optional, if you want to allow like/upvotes on reviews

    images: [
      { type: String }, // Optional, images uploaded by the user
    ],

    verifiedPurchase: {
      type: Boolean,
      default: false,
    }, // Flag if the user actually purchased the product
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export default mongoose.model("Review", reviewSchema);
