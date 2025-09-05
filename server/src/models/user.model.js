import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isVender: { type: Boolean, default: false },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dzyzbj0gh/image/upload/v1756964161/y39f0h2hskagfnrxzjtf.png",
    },
    password: {
      type: String,
      required: true,
      select: false, // prevents sending password in queries by default
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const User = model("User", userSchema);

export default User;
