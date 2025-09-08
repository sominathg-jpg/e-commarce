import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCart";
import { useAuthStore } from "../store/authStore";

const favoriteProducts = [
  {
    id: 1,
    name: "Organic Wraps, 6 Pack",
    price: 27.9,
    oldPrice: 32.8,
    rating: 3,
    discount: 10,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 2,
    name: "Orange, each",
    price: 0.99,
    oldPrice: 2.5,
    rating: 4,
    discount: 60,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 3,
    name: "Strawberry, 16oz",
    price: 1.5,
    oldPrice: 4.5,
    rating: 5,
    discount: 66,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
    inStock: false,
    category: "Fruits & Vegetables",
  },
  // Add more products...
];

const orders = [
  {
    id: 101,
    date: "2025-09-01",
    total: 45.6,
    status: "Delivered",
  },
  {
    id: 102,
    date: "2025-09-05",
    total: 89.9,
    status: "Processing",
  },
];

const ProfilePage = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="bg-gray-50 min-h-screen pt-30 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* User Info */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col items-center text-center">
            <img
              src={user.profile}
              alt={user.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm">{user.phone}</p>
            <p className="text-gray-500 text-sm mt-2">{user.address}</p>
          </div>
          <div className="mt-6">
            <Link
              to={`/edit-Profile/${user.id}`}
              className="w-full block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Edit Profile
            </Link>
            <button
              onClick={() => logout()}
              className="w-full mt-5 block text-center cursor-pointer bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Favorites & Orders */}
        <div className="md:col-span-3 space-y-6">
          {/* Favorite Products */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Favorite Products
            </h3>
            {favoriteProducts.length === 0 ? (
              <p className="text-gray-500 text-sm">No favorites yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {favoriteProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products-details/${product.id}`}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col items-center p-2"
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-800">My Orders</h3>
            {orders.length === 0 ? (
              <p className="text-gray-500 text-sm">No orders yet.</p>
            ) : (
              <div className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center py-3"
                  >
                    <div>
                      <p className="text-gray-800 font-semibold">
                        Order #{order.id}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {order.date} - ${order.total.toFixed(2)}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
