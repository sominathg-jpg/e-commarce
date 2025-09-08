import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaBell,
  FaFileDownload,
  FaSearch,
} from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { PiDotsThree, PiDotsThreeBold } from "react-icons/pi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the Recharts graph
const chartData = [
  { name: "01 Jan", uv: 40 },
  { name: "02 Jan", uv: 60 },
  { name: "03 Jan", uv: 70 },
  { name: "04 Jan", uv: 90 },
  { name: "05 Jan", uv: 85 },
  { name: "06 Jan", uv: 100 },
  { name: "07 Jan", uv: 95 },
  { name: "08 Jan", uv: 80 },
  { name: "09 Jan", uv: 60 },
  { name: "10 Jan", uv: 50 },
];

// Mock data for the customers table
const initialCustomers = [
  {
    id: 1,
    photo: "A",
    name: "Arian Pond",
    email: "aponod@anytimes.com",
    country: "Brazil",
    date: "1/15/2021",
    status: "Active",
  },
  {
    id: 2,
    photo: "B",
    name: "Bill Cicero",
    email: "bcicero@welley.com",
    country: "Indonesia",
    date: "1/20/2020",
    status: "Inactive",
  },
  {
    id: 3,
    photo: "T",
    name: "Thorpe Hawksley",
    email: "thawksley2@senate.gov",
    country: "France",
    date: "10/20/2020",
    status: "Active",
  },
  {
    id: 4,
    photo: "H",
    name: "Horacio Versey",
    email: "hversey3@illinois.edu",
    country: "China",
    date: "1/15/2021",
    status: "Active",
  },
  {
    id: 5,
    photo: "R",
    name: "Raphael Dampney",
    email: "rdampney4@reference.com",
    country: "Portugal",
    date: "8/17/2020",
    status: "Active",
  },
  {
    id: 6,
    photo: "A",
    name: "Arian Pond",
    email: "aponod@anytimes.com",
    country: "Brazil",
    date: "1/15/2021",
    status: "Active",
  },
  {
    id: 7,
    photo: "B",
    name: "Bill Cicero",
    email: "bcicero@welley.com",
    country: "Indonesia",
    date: "1/20/2020",
    status: "Inactive",
  },
  {
    id: 8,
    photo: "T",
    name: "Thorpe Hawksley",
    email: "thawksley2@senate.gov",
    country: "France",
    date: "10/20/2020",
    status: "Active",
  },
  {
    id: 9,
    photo: "H",
    name: "Horacio Versey",
    email: "hversey3@illinois.edu",
    country: "China",
    date: "1/15/2021",
    status: "Active",
  },
  {
    id: 10,
    photo: "R",
    name: "Raphael Dampney",
    email: "rdampney4@reference.com",
    country: "Portugal",
    date: "8/17/2020",
    status: "Active",
  },
];

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
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
      <main className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 flex-grow">
        <div className="flex-grow flex flex-col space-y-6">
          {/* Top Section with Chart and Rating */}
          <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6">
            {/* New Customers Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  New Customers
                </h2>
                <PiDotsThreeBold size={24} className="text-gray-500" />
              </div>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Customer Rating Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm xl:w-80 flex flex-col items-center justify-center">
              <div className="flex justify-end w-full">
                <PiDotsThreeBold size={24} className="text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Customer Rating
              </h3>
              <div className="flex items-baseline my-2">
                <span className="text-5xl font-bold text-gray-800">4.5</span>
              </div>
              <div className="text-sm text-gray-500 mb-4">(388)</div>
              <div className="flex items-center text-green-500 font-medium mb-4">
                <IoMdTrendingUp size={16} />
                <span className="ml-1">+35</span>
                <span className="text-gray-500 ml-1">
                  point from last month
                </span>
              </div>
              <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors">
                <FaFileDownload size={20} />
                <span>Download Report</span>
              </button>
            </div>
          </div>

          {/* Customers Table */}
          <div className="bg-white p-6 rounded-2xl shadow-sm flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-6">
              <div className="flex flex-wrap items-center space-x-2 md:space-x-4">
                <div className="relative">
                  <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Sort by</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaAngleDown size={20} />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <FaSearch
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
                  <span>Actions</span>
                  <FaAngleDown size={20} />
                </button>
              </div>
            </div>

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
                    <th className="py-3 px-4 font-semibold">PHOTO</th>
                    <th className="py-3 px-4 font-semibold">FULLNAME</th>
                    <th className="py-3 px-4 font-semibold">EMAIL</th>
                    <th className="py-3 px-4 font-semibold">COUNTRY</th>
                    <th className="py-3 px-4 font-semibold">DATE</th>
                    <th className="py-3 px-4 font-semibold">STATUS</th>
                    <th className="py-3 px-4 font-semibold text-right">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
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
                        #{customer.id}
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center font-bold">
                          {customer.photo}
                        </div>
                      </td>
                      <td className="py-4 px-4">{customer.name}</td>
                      <td className="py-4 px-4 text-gray-500">
                        {customer.email}
                      </td>
                      <td className="py-4 px-4 text-gray-500">
                        {customer.country}
                      </td>
                      <td className="py-4 px-4 text-gray-500">
                        {customer.date}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block py-1 px-3 text-xs font-semibold rounded-full ${getStatusColor(
                            customer.status
                          )}`}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4 text-right">
                        <button className="text-gray-500 cursor-pointer hover:text-purple-600">
                          <PiDotsThree size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <footer className="flex justify-center items-center mt-6 space-x-2">
              <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                <FaAngleLeft size={20} />
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
                <FaAngleRight size={20} />
              </button>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
