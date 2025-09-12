import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react"; // Spinner icon (from lucide-react)
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const CategoryForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/categories/add-category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);

      if (res.status) {
        toast.success("category added");
        setLoading(false);
        navigate("/categories");
      }
      // Reset form after successful submission
      setName("");
      setImage(null);
      document.getElementById("image-upload").value = "";
    } catch (err) {
      console.error(err);
      console.log("Error uploading category");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {};

  const hanleEdit = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="p-8 w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Category
        </h2>
        <form onSubmit={handleSubmit}>
          {/* name Input Field */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-6">
            <label
              htmlFor="image-upload"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category Image
            </label>
            <input
              type="file"
              id="image-upload"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2
        ${
          loading
            ? "bg-purple-400 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        }
        text-white font-semibold py-3 rounded-lg shadow-md 
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
        transition-all duration-200`}
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Add Category"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
