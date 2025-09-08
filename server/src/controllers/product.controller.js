import Product from "../models/product.model.js";
import cloudinary from "../config/cloudanary.js";
import productModel from "../models/product.model.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      oldPrice,
      stock,
      brand,
      category,
      colors,
      weight,
      material,
      dimensions,
      warranty,
      payment,
      description,
    } = req.body;

    let imageUrls = [];

    // If images are uploaded, push to Cloudinary
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              throw new Error("Image upload failed");
            }
            return result.secure_url;
          }
        )
      );

      // ⚠️ Since upload_stream uses streams, wrap in a Promise:
      const streamUpload = (file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "products" },
            (error, result) => {
              if (result) {
                resolve(result.secure_url);
              } else {
                reject(error);
              }
            }
          );
          stream.end(file.buffer);
        });
      };

      imageUrls = await Promise.all(
        req.files.map((file) => streamUpload(file))
      );
    }

    const newProduct = new Product({
      name,
      price,
      oldPrice,
      stock,
      brand,
      category,
      colors,
      weight,
      material,
      dimensions,
      warranty,
      payment,
      description,
      images: imageUrls,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      data: savedProduct,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Update specific product fields
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // product id
    const updates = req.body; // fields to update

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    // ✅ Update only provided fields
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "producted deleted..", success: true });
  } catch (error) {
    res.status(500).status(500).json({ message: "Internal server" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.find({ _id: id });
    res.status(200).json({ message: "ok", product: product });
  } catch (error) {
    res.status(500).status(500).json({ message: "Internal server" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json({ products, success: true });
  } catch (error) {
    res.status(500).status(500).json({ message: "Internal server" });
  }
};
