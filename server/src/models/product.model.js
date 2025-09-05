import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    stock: { type: Number, default: 0 },
    sku: { type: String },
    brand: { type: String },
    category: { type: String },
    subCategory: { type: String },
    tags: [{ type: String }],
    colors: [{ type: String }],
    weight: { type: String },
    material: { type: String },
    dimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
      unit: { type: String, default: "cm" },
    },
    warranty: { type: String },
    payment: { type: String },
    description: { type: String },
    images: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // array of review IDs
    isFeatured: { type: Boolean, default: false },
    isBestseller: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
