import axios from "axios";
import React, { Profiler, use, useEffect, useState } from "react";

// Helper components for icons
const SearchIcon = ({ size, className }) => (
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
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const BellIcon = ({ size, className }) => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const ShoppingBagIcon = ({ size, className }) => (
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
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const HeartIcon = ({ size, className }) => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const StarIcon = ({ size, className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ChevronLeftIcon = ({ size, className }) => (
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
    <path d="m15 18-6-6 6-6"></path>
  </svg>
);

const ChevronRightIcon = ({ size, className }) => (
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
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

const EditIcon = ({ size, className }) => (
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
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const PackageIcon = ({ size, className }) => (
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
    <path d="m7.5 4.27 9 5.15"></path>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7.2-4.14a2 2 0 0 0-2 0L4 6.27a2 2 0 0 0-1 1.73v7.46a2 2 0 0 0 1 1.73l7.2 4.14a2 2 0 0 0 2 0l7.2-4.14a2 2 0 0 0 1-1.73Z"></path>
    <path d="m3.29 7.46 8.71 5 8.71-5"></path>
    <path d="M12 22V12.5"></path>
  </svg>
);

import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("descriptions");
  const { id } = useParams();
  const [product, setProduct] = useState();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          size={20}
          className="text-yellow-400"
          fill={i <= rating ? "currentColor" : "none"}
        />
      );
    }
    return stars;
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/product/get-perticualar-product/${id}`
      );
      // console.log(res.data.product[0]);
      setProduct(res.data.product[0]);
      // console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  // ✅ log after product updates
  useEffect(() => {
    if (product) {
      console.log("Product updated:", product);
    }
  }, [product]);
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col flex-grow">
        {/* Product Details Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 mb-6">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative w-full aspect-w-1 aspect-h-1 mb-6 rounded-2xl overflow-hidden">
              <img
                src={product?.images[0]}
                alt="Main product image"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-gray-200/50 hover:bg-gray-300/70 text-gray-800">
                <ChevronLeftIcon size={24} />
              </button>
              <button className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-gray-200/50 hover:bg-gray-300/70 text-gray-800">
                <ChevronRightIcon size={24} />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center justify-between">
              <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                {product?.brand}
              </span>
              <div className="flex items-center space-x-1 text-gray-500">
                <HeartIcon size={20} />
                <span>{50}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">
              Ultimate Ears Wonderboom
            </h2>
            <div className="flex items-center justify-between mt-2">
              <p className="text-green-500 font-medium">In stock</p>
              <p className="text-gray-500 text-sm">
                Stock Level: {product?.stock}
              </p>
            </div>
            <div className="flex items-baseline space-x-2 my-4">
              <span className="text-xl font-bold text-gray-400 line-through">
                $ {product?.oldPrice}
              </span>
              <span className="text-4xl font-extrabold text-gray-800">
                ${product?.price}
              </span>
            </div>
            <div className="flex items-center space-x-1 mb-4">
              {renderStars(product?.rating)}
              <span className="text-gray-500 text-sm">{product?.rating}</span>
            </div>
            <p className="text-gray-600 mb-6">{product?.description}</p>
            <h3 className="font-semibold text-gray-800">Features:</h3>
            <p className="text-gray-600 text-sm">{product?.description}</p>
            <div className="flex items-center space-x-4 mt-6">
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                <EditIcon size={20} />
                <span>Edit Product</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                <PackageIcon size={20} />
                <span>Update Stock</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("descriptions")}
              className={`pb-2 px-4 text-lg font-medium ${
                activeTab === "descriptions"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Descriptions
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 px-4 text-lg font-medium ${
                activeTab === "reviews"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Reviews ({product?.reviews.length})
            </button>
            <button
              onClick={() => setActiveTab("sss")}
              className={`pb-2 px-4 text-lg font-medium ${
                activeTab === "sss"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              SSS
            </button>
          </div>
          <div>
            {activeTab === "descriptions" && (
              <div className="space-y-4 text-gray-600">
                {product?.description}
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="text-gray-600">
                {product?.reviews && product?.reviews?.length > 0 ? (
                  product?.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="p-4 border border-gray-200 rounded-xl bg-gray-50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">
                          {review?.name}
                        </span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <StarIcon
                              key={idx}
                              size={16}
                              className="text-yellow-400"
                              fill={
                                idx < review.rating ? "currentColor" : "none"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                      <span className="text-xs text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            )}
            {activeTab === "sss" && (
              <div className="text-gray-600">
                <p>SSS content goes here...</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
