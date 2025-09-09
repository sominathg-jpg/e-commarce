import Category from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const uploadToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ✅ Add Category
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !req.file) {
      return res
        .status(400)
        .json({ success: false, message: "name and Image required" });
    }

    const result = await uploadToCloudinary(req.file.buffer, "categories");

    const category = await Category.create({
      name,
      image: result.secure_url,
    });

    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    let updateData = { name };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "categories");
      updateData.image = result.secure_url;
    }

    const category = await Category.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);

    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
