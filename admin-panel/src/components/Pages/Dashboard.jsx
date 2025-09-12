import React from "react";

import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  ArrowUp,
  CheckCheck,
  Globe2Icon,
  Package,
  PlusIcon,
} from "lucide-react";
import {
  FaEdit,
  FaFileDownload,
  FaRegBellSlash,
  FaRegCopyright,
} from "react-icons/fa";
// --- Dummy Data for Charts and Tables ---
const salesChartData = [
  { name: "01 May", sales: 10000, orders: 8000 },
  { name: "02 May", sales: 11000, orders: 9000 },
  { name: "03 May", sales: 11500, orders: 8500 },
  { name: "04 May", sales: 10500, orders: 9500 },
  { name: "05 May", sales: 12000, orders: 11000 },
  { name: "06 May", sales: 12500, orders: 11500 },
  { name: "07 May", sales: 11800, orders: 10500 },
  { name: "08 May", sales: 13000, orders: 12000 },
  { name: "09 May", sales: 14000, orders: 13500 },
  { name: "10 May", sales: 13500, orders: 12500 },
  { name: "11 May", sales: 15000, orders: 14000 },
  { name: "12 May", sales: 14500, orders: 13000 },
];

const channelsData = [
  { name: "Social Media", value: 48 },
  { name: "Google", value: 30 },
  { name: "Email", value: 22 },
];
const COLORS = ["#6366F1", "#3B82F6", "#8B5CF6"];

const soldProductsData = [
  { name: "Mon", sold: 40 },
  { name: "Tue", sold: 50 },
  { name: "Wed", sold: 80 },
  { name: "Thu", sold: 55 },
  { name: "Fri", sold: 65 },
  { name: "Sat", sold: 88 },
  { name: "Sun", sold: 50 },
];

const topCountriesData = [
  { country: "United States", flag: "🇺🇸", sales: "$1,671,10" },
  { country: "Venezuela", flag: "🇻🇪", sales: "$1,064,75" },
  { country: "Salvador", flag: "🇸🇻", sales: "$1,055,98" },
  { country: "Russia", flag: "🇷🇺", sales: "$1,042,00" },
];

const recentProductsData = [
  {
    photo: "https://placehold.co/40x40/FFC0CB/FFF",
    name: "Cookie",
    stock: "Out of Stock",
    price: "$10.50",
  },
  {
    photo: "https://placehold.co/40x40/FF5733/FFF",
    name: "Glass",
    stock: "In Stock",
    price: "$70.25",
  },
  {
    photo: "https://placehold.co/40x40/B0E0E6/FFF",
    name: "Headphone",
    stock: "In Stock",
    price: "$870.50",
  },
  {
    photo: "https://placehold.co/40x40/DDA0DD/FFF",
    name: "Perfume",
    stock: "In Stock",
    price: "$170.50",
  },
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-8 bg-white/10 text-black min-h-screen">
      {/* --- Top Header and Search --- */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Overview</h1>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer p-3 bg-white rounded-xl border border-purple-700 hover:bg-purple-700 transition-colors">
            <FaRegBellSlash />
          </button>
          <Link
            to="/add-product"
            className="cursor-pointer flex items-center text-white gap-2 px-4 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <PlusIcon className="text-white" />
            <span className="text-sm font-medium">Add Product</span>
          </Link>
        </div>
      </header>

      {/* --- Main Content Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* --- Sales Chart and Channels (Row 1) --- */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-md border border-purple-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-purple-500">
              Sales Chart
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg font-bold text-gray-700">
                $10,552.40
              </span>
              <span className="flex items-center text-green-600 font-medium">
                <ArrowUp className="text-green-600 w-4 h-4 mr-1" />
                +8.30%
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                {/* Soft Purple grid */}
                <CartesianGrid strokeDasharray="3 3" stroke="#E9D5FF" />

                {/* Axes in purple-300 */}
                <XAxis
                  dataKey="name"
                  stroke="#C4B5FD"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="#C4B5FD" tickLine={false} axisLine={false} />

                {/* Light tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    color: "#4B5563",
                    borderRadius: "0.5rem",
                    padding: "8px",
                  }}
                />

                {/* Legend with purple text */}
                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "10px", color: "#7C3AED" }}
                />

                {/* Lines */}
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#7C3AED" // purple-600
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#A855F7" // purple-500
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-purple-500">Channels</h2>
            <button className="flex items-center cursor-pointer text-purple-500 text-sm hover:text-purple-600 transition-colors">
              <FaFileDownload className="mr-1" />
              Download Report
            </button>
          </div>

          {/* Pie Chart */}
          <div className="h-64 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {channelsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]} // purple palette
                    />
                  ))}
                </Pie>

                {/* Light Tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "0.5rem",
                    color: "#4B5563",
                    padding: "8px",
                  }}
                />

                {/* Legend */}
                <Legend
                  iconType="circle"
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{
                    color: "#7C3AED", // purple-600
                    fontSize: "0.875rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Orders, Sales, Customer Rating (Row 2) --- */}
        <div className="md:col-span-1 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-purple-400">Orders</h3>
            <p className="text-3xl font-bold text-black mt-2">310</p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <p className="text-xs text-green-500">Over last month 1.4%</p>
            <div className="h-16 w-1/3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[{ v: 10 }, { v: 15 }, { v: 12 }, { v: 20 }, { v: 18 }]}
                >
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-purple-400">Sales</h3>
            <p className="text-3xl font-bold text-black mt-2">$3,759.00</p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <p className="text-xs text-green-500">Over last month 2.4%</p>
            <div className="h-16 w-1/3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[{ v: 20 }, { v: 25 }, { v: 18 }, { v: 30 }, { v: 22 }]}
                >
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#6366F1"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-purple-400">Customer Rating</h3>
            <p className="text-3xl font-bold text-black mt-2">3.0</p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-500">+30</span>
              <span className="text-xs text-purple-400">
                point from last month
              </span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <span className="text-sm">(318)</span>
            </div>
          </div>
        </div>

        {/* --- Products Sold and Reviews (Row 3) --- */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Products Sold</h2>
              <FaEdit />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={soldProductsData}>
                  <XAxis
                    dataKey="name"
                    stroke="#9CA3AF"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "purple/30",
                      border: "1px solid #374151",
                    }}
                  />
                  <Bar dataKey="sold" fill="#6366F1" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Reviews</h2>
              <span className="text-sm text-indigo-400 cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white  rounded-xl p-6 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-black font-bold text-sm">
                  J
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-sm">Johnath Siddeley</h4>
                    <span className="text-yellow-400 text-xs ml-2">
                      ★★★★★ (5)
                    </span>
                  </div>
                  <p className="text-xs text-purple-400 mt-1">
                    Very nice glasses. I ordered for my friend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Top Countries and Activity Overview (Row 4) --- */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Your Top Countries</h2>
              <span className="text-sm text-indigo-400 cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <ul className="space-y-4">
              {topCountriesData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-700 pb-2 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-sm font-medium">{item.country}</span>
                  </div>
                  <span className="text-sm text-gray-800">{item.sales}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-indigo-500/20 rounded-xl">
                  <Globe2Icon className="text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Delivered</h4>
                  <p className="text-xs text-purple-400">12,500 Packages</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Package className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Ordered</h4>
                  <p className="text-xs text-purple-400">1,500 Items</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <FaRegCopyright className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Reported</h4>
                  <p className="text-xs text-purple-400">
                    50 Support new tickets
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <CheckCheck className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Arrived</h4>
                  <p className="text-xs text-purple-400">
                    34 Upgraded boxed glasses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Recent Products Table (Row 5) --- */}
        <div className="md:col-span-3 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Products</h2>
          <p className="text-sm text-purple-400 mb-4">
            Products added today. Click here for more details
          </p>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-sm uppercase">
                <th className="py-2 px-4 font-normal text-purple-400">Photo</th>
                <th className="py-2 px-4 font-normal text-purple-400">Name</th>
                <th className="py-2 px-4 font-normal text-purple-400">Stock</th>
                <th className="py-2 px-4 font-normal text-purple-400">Price</th>
                <th className="py-2 px-4 font-normal text-purple-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentProductsData.map((product, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="py-4 px-4">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg"
                    />
                  </td>
                  <td className="py-4 px-4">{product.name}</td>
                  <td className="py-4 px-4 text-red-500">{product.stock}</td>
                  <td className="py-4 px-4">{product.price}</td>
                  <td className="py-4 px-4">
                    <button>
                      <FaEdit className="cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="mt-8 text-center text-xs text-gray-500">
        © 2025 JinStore - Blacktip themes
      </footer>
    </div>
  );
};

export default Dashboard;
