import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ArrowDownNarrowWide, Edit, Filter, Search } from "lucide-react";
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaBell } from "react-icons/fa";
// Sample data to simulate the orders list.

import useOrderStore from "../../store/useOrderStore";
const Order = () => {
  // const [orders, setOrders] = useState(initialOrders);

  const { orders, fetchOrders } = useOrderStore();
  useEffect(() => {
    fetchOrders();
  }, []);
  // Function to determine the status color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "refunded":
        return "bg-orange-100 text-orange-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Top Header */}
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell
              className="text-gray-600 hover:text-purple-600 cursor-pointer"
              size={24}
            />
            <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Filter and Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex flex-wrap items-center space-x-2 md:space-x-4">
            <div className="relative inline-block w-36">
              <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>All Orders</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowDownNarrowWide size={20} />
              </div>
            </div>

            <div className="relative inline-block w-36">
              <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Sort by</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaArrowDown size={15} />
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>

            <button className="flex items-center space-x-2 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
              <Edit size={20} />
              <span>Actions</span>
              <FaArrowDown size={15} />
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="py-3 pr-4">
                  <input
                    type="checkbox"
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">NAME</th>
                <th className="py-3 px-4 font-semibold">DATE</th>
                <th className="py-3 px-4 font-semibold">TOTAL</th>
                <th className="py-3 px-4 font-semibold">Payment Method</th>
                <th className="py-3 px-4 font-semibold">Products</th>
                <th className="py-3 px-4 font-semibold">STATUS</th>
                <th className="py-3 px-4 font-semibold text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-gray-800"
                >
                  <td className="py-4 pr-4">
                    <input
                      type="checkbox"
                      className="rounded text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium text-purple-600">
                    {order._id}
                  </td>
                  <td className="py-4 px-4">{order?.user?.name}</td>
                  <td className="py-4 px-4 text-gray-500">{order.createdAt}</td>
                  <td className="py-4 px-4 font-medium">
                    {order?.totalPrice}
                  </td>{" "}
                  <td className="py-4 px-4 text-center font-medium">
                    {order?.paymentMethod}
                  </td>
                  <ul className="space-y-2">
                    {order?.products.map((product) => (
                      <li key={product._id}>
                        <Link
                          to={`/productDetails/${product._id}`} // navigates to ProductDetails page
                          className="text-blue-600 hover:underline"
                        >
                          {product.name}
                        </Link>{" "}
                        ,
                      </li>
                    ))}
                  </ul>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block py-1 px-3 text-xs font-semibold rounded-full ${getStatusColor(
                        order.orderStatus
                      )}`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="py-4 pl-4 text-center ">
                    <button className="text-gray-500 hover:text-purple-600 ">
                      <Edit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Pagination */}
      <footer className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-600">
          Showing 1 to 10 of 200 items
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
            <FaArrowLeft size={15} />
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
            <FaArrowRight size={15} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Order;
