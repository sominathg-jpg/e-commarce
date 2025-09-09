import Product from "../models/product.model.js";
import cloudinary from "../config/cloudanary.js";
import productModel from "../models/product.model.js";

// // Create Product
// export const createProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       price,
//       oldPrice,
//       stock,
//       brand,
//       category,
//       colors,
//       weight,
//       material,
//       dimensions,
//       warranty,
//       payment,
//       description,
//     } = req.body;

//     const image = req.file;
//     let imageUrls = [];

//     if (image) {
//       const uploadResponse = await cloudinary.uploader.upload(
//         `data:${image.mimetype};base64,${image.buffer.toString("base64")}`,
//         { folder: "image" }
//       );
//       imageUrls.push(uploadResponse.secure_url);
//     }

//     const newProduct = new Product({
//       name,
//       price,
//       oldPrice,
//       stock,
//       brand,
//       category,
//       colors,
//       weight,
//       material,
//       dimensions,
//       warranty,
//       payment,
//       description,
//       images: imageUrls,
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json({
//       success: true,
//       data: savedProduct,
//       message: "Product created successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };
// import cloudinary from "../config/cloudinary.js"; // your Cloudinary config
import multer from "multer";

// Multer setup (store files in memory)
const storage = multer.memoryStorage();
export const upload = multer({ storage }); // use upload.array(...) in routes

// Controller
export const createProduct = async (req, res) => {
  try {
    const product = req.file;
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

    console.log(product);

    if (product) {
      // Upload single image to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:${product.mimetype};base64,${product.buffer.toString("base64")}`,
        { folder: "products" }
      );
      imageUrls[imageUrls.length] = result.secure_url;
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
      // data: savedProduct,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("Create Product Error:", error);
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
    const product = await Product.find({ _id: id }).populate({
      path: "reviews",
      populate: { path: "user", select: "name email" }, // also populate user inside review
    });
    res.status(200).json({ message: "ok", product: product });
  } catch (error) {
    res.status(500).status(500).json({ message: "Internal server" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate({
      path: "reviews",
      populate: { path: "user", select: "name email" }, // also populate user inside review
    });
    console.log(products);
    res.status(200).json({ products, success: true });
  } catch (error) {
    res.status(500).status(500).json({ message: "Internal server" });
  }
};
