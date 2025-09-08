import React, { useState } from "react";

// Sample data to simulate the orders list.
const initialOrders = [
  {
    id: "#3210",
    name: "Cortie Gemson",
    date: "May 23, 2021",
    total: "$239.00",
    status: "Processing",
  },
  {
    id: "#3210",
    name: "Mathilde Tumilson",
    date: "May 15, 2021",
    total: "$650.50",
    status: "Shipped",
  },
  {
    id: "#3210",
    name: "Audrye Headford",
    date: "Apr 24, 2021",
    total: "$100.00",
    status: "Completed",
  },
  {
    id: "#3210",
    name: "Brantley Meil",
    date: "Apr 10, 2021",
    total: "$19.00",
    status: "Refunded",
  },
  {
    id: "#3210",
    name: "Dominique Enriques",
    date: "Mar 5, 2021",
    total: "$150.00",
    status: "Cancelled",
  },
  {
    id: "#3210",
    name: "Cortie Gemson",
    date: "May 23, 2021",
    total: "$239.00",
    status: "Processing",
  },
  {
    id: "#3210",
    name: "Mathilde Tumilson",
    date: "May 15, 2021",
    total: "$650.50",
    status: "Shipped",
  },
  {
    id: "#3210",
    name: "Audrye Headford",
    date: "Apr 24, 2021",
    total: "$100.00",
    status: "Completed",
  },
  {
    id: "#3210",
    name: "Brantley Meil",
    date: "Apr 10, 2021",
    total: "$19.00",
    status: "Refunded",
  },
  {
    id: "#3210",
    name: "Dominique Enriques",
    date: "Mar 5, 2021",
    total: "$150.00",
    status: "Cancelled",
  },
];

// Helper components for icons to replace react-icons
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

const OptionsIcon = ({ size, className }) => (
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
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
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

const FilterIcon = ({ size, className }) => (
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
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
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

const Order = () => {
  const [orders, setOrders] = useState(initialOrders);

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
            <BellIcon
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
                <ChevronDownIcon size={20} />
              </div>
            </div>

            <div className="relative inline-block w-36">
              <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Sort by</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDownIcon size={20} />
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>

            <button className="flex items-center space-x-2 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
              <FilterIcon size={20} />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
              <OptionsIcon size={20} />
              <span>Actions</span>
              <ChevronDownIcon size={20} />
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
                    {order.id}
                  </td>
                  <td className="py-4 px-4">{order.name}</td>
                  <td className="py-4 px-4 text-gray-500">{order.date}</td>
                  <td className="py-4 px-4 font-medium">{order.total}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block py-1 px-3 text-xs font-semibold rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 pl-4 text-right">
                    <button className="text-gray-500 hover:text-purple-600">
                      <OptionsIcon size={20} />
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
      </footer>
    </div>
  );
};

export default Order;
