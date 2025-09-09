import React, { useState } from "react";
import axios from "axios";

// ✅ Helper Icon Component
const AddProductIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
);

const CheckCircleIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.62"></path>
    <path d="M9 11l3 3L22 4"></path>
  </svg>
);

const XCircleIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

const categories = [
  "Fruits & Vegetables",
  "Baby & Pregnancy",
  "Beverages",
  "Meats & Seafood",
  "Biscuits & Snacks",
  "Breads & Bakery",
  "Breakfast & Dairy",
  "Frozen Foods",
  "Grocery & Staples",
];

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    oldPrice: "",
    stock: "",
    brand: "",
    category: "",
    colors: "",
    weight: "",
    material: "",
    dimensions: "",
    warranty: "",
    payment: "",
    description: "",
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
  });

  const [image, setImage] = useState(null); // ✅ only single file
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const formDataToSend = new FormData();

      // Append text fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append image
      if (image) {
        formDataToSend.append("product", image);
      }

      // API call
      const res = await axios.post(
        "http://localhost:3000/api/product/add-product",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(formData);
      console.log(image);

      setMessage({
        type: "success",
        text: res.data.message || "Product added successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        price: "",
        oldPrice: "",
        stock: "",
        brand: "",
        category: "",
        colors: "",
        weight: "",
        material: "",
        dimensions: "",
        warranty: "",
        payment: "",
        description: "",
        isFeatured: false,
        isBestseller: false,
        isNewArrival: false,
      });
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to add product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Add Product</h1>
      </header>

      <main className="flex flex-grow justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            New Product Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Selling Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Old Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Previous Price ($)
              </label>
              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleInputChange}
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Available Quantity
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Name
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Colors (comma-separated)
              </label>
              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleInputChange}
                placeholder="e.g., Red, Blue, Green"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Detailed Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Checkboxes */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["isFeatured", "isBestseller", "isNewArrival"].map((field) => (
                <div key={field} className="flex items-center">
                  <input
                    type="checkbox"
                    id={field}
                    name={field}
                    checked={formData[field]}
                    onChange={handleInputChange}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <label
                    htmlFor={field}
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    {field.replace("is", "Is ")}
                  </label>
                </div>
              ))}
            </div>

            {/* Messages */}
            {loading && (
              <div className="md:col-span-2 text-center text-purple-600 font-medium">
                Adding product...
              </div>
            )}
            {message.text && (
              <div
                className={`md:col-span-2 flex items-center space-x-2 p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircleIcon size={20} />
                ) : (
                  <XCircleIcon size={20} />
                )}
                <span>{message.text}</span>
              </div>
            )}

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    name: "",
                    price: "",
                    oldPrice: "",
                    stock: "",
                    brand: "",
                    category: "",
                    colors: "",
                    weight: "",
                    material: "",
                    dimensions: "",
                    warranty: "",
                    payment: "",
                    description: "",
                    isFeatured: false,
                    isBestseller: false,
                    isNewArrival: false,
                  });
                  setImage(null);
                  setMessage({ type: "", text: "" });
                }}
                className="px-6 py-2 rounded-full font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <AddProductIcon size={18} className="inline-block mr-1" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
