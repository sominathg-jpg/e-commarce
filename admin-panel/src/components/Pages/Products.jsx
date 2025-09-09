import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock product data
import useProductStore from "../../store/useProductStore";
const initialProducts = [
  {
    id: 1,
    name: "Simply Orange Pulp Free Juice",
    size: "52 fl oz",
    price: 4.99,
    rating: 4.5,
    reviews: 25,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Orange+Juice",
  },
  {
    id: 2,
    name: "Lay's Classic Potato Snack",
    size: "Chips, Party Size, 13 oz Bag",
    price: 1.9,
    rating: 4.5,
    reviews: 10,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Potato+Chips",
  },
  {
    id: 3,
    name: "Oscar Mayer Ham & Swiss Melt",
    size: "Scrambler - 3oz",
    price: 1.59,
    rating: 4.0,
    reviews: 2,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Scrambler",
  },
  {
    id: 4,
    name: "Large Garden Spinach & Herb",
    size: "Wrap Tortillas - 15oz, 6ct",
    price: 10.0,
    rating: 4.0,
    reviews: 5,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Tortillas",
  },
  {
    id: 5,
    name: "Great Value Rising Crust Frozen Pizza",
    size: "Supreme",
    price: 30.0,
    rating: 4.0,
    reviews: 5,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Pizza",
  },
  {
    id: 6,
    name: "Real Plant-Powered Protein Shake",
    size: "Double Chocolate - 22g",
    price: 25.0,
    rating: 4.0,
    reviews: 8,
    imageUrl: "https://placehold.co/100x150/F8F8F8/505050?text=Protein+Shake",
  },
];

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

const ArrowLeft = ({ size, className }) => (
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

const ArrowRight = ({ size, className }) => (
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

const ChevronDownIcon = ({ size, className }) => (
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
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const StarIcon = ({ size, className, fill = "none" }) => (
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

const TrashIcon = ({ size, className }) => (
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
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

const Products = () => {
  // const [products, setProducts] = useState(initialProducts);

  const { products } = useProductStore();
  console.log(products);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col md:flex-row">
      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Top Header */}
        <header className="flex items-center justify-between pb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
            <div className="relative">
              <BellIcon
                className="text-gray-600 hover:text-purple-600 cursor-pointer"
                size={24}
              />
              <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
            </div>
            <Link
              to={"/add-product"}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
            >
              <AddProductIcon size={20} />
              <span>Add Product</span>
            </Link>
          </div>
        </header>

        {/* Product Dashboard Content */}
        <div className="flex space-x-6">
          {/* Main Product Area */}
          <div className="flex-grow">
            {/* Filter and Action Bar (Top) */}
            <div className="flex flex-wrap items-center space-x-2 md:space-x-4 mb-6">
              <div className="relative inline-block w-36">
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>All Products</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon size={20} />
                </div>
              </div>
              <div className="relative inline-block w-36">
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Sort by</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon size={20} />
                </div>
              </div>
              <div className="relative inline-block w-24">
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>10</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon size={20} />
                </div>
              </div>
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 pl-10 pr-4 rounded-lg w-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <SearchIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
              <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
                <span>Actions</span>
                <ChevronDownIcon size={20} />
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  to={`/productDetails/${product._id}`}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-24 object-contain mb-4 rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">{product?.size}</p>
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mb-4 text-xs text-gray-500">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          size={16}
                          fill={
                            i < Math.floor(product.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    {/* <span>({product.reviews})</span> */}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors mr-2">
                      <EditIcon size={16} className="inline-block mr-1" />
                      Edit Product
                    </button>
                    <button className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors">
                      <TrashIcon size={20} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                <ArrowLeft size={20} />
              </button>
              <button className="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold">
                1
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                3
              </button>
              <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right-hand Filter Panel */}
          <div className="w-80 bg-white p-6 rounded-2xl shadow-sm hidden md:block">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 flex items-center justify-between mb-2">
                Keywords
                <ChevronDownIcon size={16} className="text-gray-500" />
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone, Headphone, Shoe..."
                  className="py-2 pl-10 pr-4 rounded-lg w-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <SearchIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 flex items-center justify-between mb-2">
                Categories
                <ChevronDownIcon size={16} className="text-gray-500" />
              </h3>
              <div className="flex flex-col space-y-2 text-gray-600">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                  />{" "}
                  All
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                  />{" "}
                  Accessories
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                  />{" "}
                  Phone
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                  />{" "}
                  Headphone
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                  />{" "}
                  Camera
                </label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 flex items-center justify-between mb-4">
                Price
                <ChevronDownIcon size={16} className="text-gray-500" />
              </h3>
              <div className="relative h-1 bg-gray-200 rounded-full mb-4">
                <div
                  className="absolute h-1 bg-purple-600 rounded-full"
                  style={{ left: "10%", right: "20%" }}
                ></div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-purple-600 shadow-md"
                  style={{ left: "10%" }}
                ></div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-purple-600 shadow-md"
                  style={{ right: "20%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>$1</span>
                <span>$1000</span>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 flex items-center justify-between mb-2">
                Colors
                <ChevronDownIcon size={16} className="text-gray-500" />
              </h3>
              <div className="flex space-x-2">
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#FF6347" }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#4682B4" }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#3CB371" }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#FFD700" }}
                ></div>
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#A0522D" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
