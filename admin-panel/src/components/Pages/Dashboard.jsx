import React from "react";
import { FaBell, FaDownload, FaSearch } from "react-icons/fa";
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

// --- Placeholder Icons (Inline SVG) to avoid dependencies ---
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 text-gray-500"
  >
    <path
      fill="currentColor"
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-208 48c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48zm128-48a128 128 0 1 0-256 0 128 128 0 1 0 256 0z"
    />
  </svg>
);
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5 text-purple-400"
  >
    <path
      fill="currentColor"
      d="M224 0c-17.7 0-32 14.3-32 32V68.3c-23.9 6.2-46.8 15.6-67.6 28.5L99.7 75.3c-22-11.3-47.1-3.9-58.4 18.1s-3.9 47.1 18.1 58.4l26.9 13.8C65.6 195 64 210.4 64 226v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V226c0-22.1 2.3-43.6 6.8-64.2C13.6 148.5-1.4 125.7 1.7 100.2s22.9-42.3 48.4-45.4C98.4 51.7 155.7 48 224 48s125.6 3.7 173.9 8.8c25.5 3.1 43.7 25.1 40.5 50.6s-22.9 42.3-48.4 45.4c-4.5 1.7-9.2 3.2-13.9 4.5l-2.4 .7c2.4 4.5 4.8 9.3 7.1 14.1l26.9 13.8c22 11.3 29.4 36.4 18.1 58.4s-36.4 29.4-58.4 18.1L371.7 255c-20.8-12.9-43.7-22.3-67.6-28.5V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V256H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V226c0-15.6 1.6-31.1 4.5-45.9L99.7 136c-22-11.3-29.4-36.4-18.1-58.4s36.4-29.4 58.4-18.1L224 100.2V32c0-17.7-14.3-32-32-32zM288 352v32c0 53-43 96-96 96H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32-14.3 32-32V352h32z"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4 text-black"
  >
    <path
      fill="currentColor"
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
    />
  </svg>
);
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-4 h-4 text-black"
  >
    <path
      fill="currentColor"
      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H64z"
    />
  </svg>
);
const ThreeDotsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 512"
    className="w-5 h-5 text-gray-500"
  >
    <path
      fill="currentColor"
      d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zM64 224c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32z"
    />
  </svg>
);
const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4"
  >
    <path
      fill="currentColor"
      d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zM224 448c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32z"
    />
  </svg>
);
const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4"
  >
    <path
      fill="currentColor"
      d="M201.4 485.4c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.7 86.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160zM224 480c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 17.7-14.3 32-32 32z"
    />
  </svg>
);
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48a208 208 0 1 0 0 416A208 208 0 1 0 256 48zm-32 96h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
    />
  </svg>
);
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 text-green-500"
  >
    <path
      fill="currentColor"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L225 353c-6.2 6.2-16.4 6.2-22.6 0l-78.1-78.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L213.4 316.6l143-143c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
    />
  </svg>
);
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="w-5 h-5 text-indigo-500"
  >
    <path
      fill="currentColor"
      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-64 128h128c53 0 96 43 96 96v128H0v-128c0-53 43-96 96-96zM480 256c70.7 0 128-57.3 128-128S550.7 0 480 0s-128 57.3-128 128 57.3 128 128 128zm-64 128h128c53 0 96 43 96 96v128H352v-128c0-53 43-96 96-96z"
    />
  </svg>
);
const PackageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="w-5 h-5 text-orange-500"
  >
    <path
      fill="currentColor"
      d="M35.6 198.8L126.3 35.6c23.1-39.6 67.2-62.9 113.8-62.9H576c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H576c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H384.4c-47 0-91.2 23.3-114.3 62.9L170.8 478.4c-9.5 16.3-30.8 21.6-47.1 12.1s-21.6-30.8-12.1-47.1L126.3 351.6c4.5-7.7 4.9-16.7 1.4-24.8-.6-1.5-1.4-3-2.4-4.5-12.2-18-36.8-23.7-54.8-11.5L35.6 198.8c-17.9 12.2-23.7 36.8-11.5 54.8s36.8 23.7 54.8 11.5L200.7 205c-15.5-23.6-25-50.6-27.7-79.6h-.1c-1.4-15.5 1.5-31 8.8-44.5L126.3 35.6C117 19.3 95.7 14 79.4 23.5s-14 41.5-23.5 57.8zM448 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H576c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H448z"
    />
  </svg>
);
const CheckListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="w-5 h-5 text-purple-400"
  >
    <path
      fill="currentColor"
      d="M64 48c-17.7 0-32 14.3-32 32V416c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32H64zM224 208c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zm0-96c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zM112 320h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16zM112 208h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16zM112 112h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16zm224 16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"
    />
  </svg>
);
const CheckDoubleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 text-green-500"
  >
    <path
      fill="currentColor"
      d="M128 0A128 128 0 1 0 128 256A128 128 0 1 0 128 0zM320 224h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256V64c0-17.7 14.3-32 32-32s32 14.3 32 32V224zm-32 24h32v32h-32v-32z"
    />
  </svg>
);

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
            <FaBell />
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
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Sales Chart</h2>
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <span className="text-lg font-bold text-black">$10,552.40</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon className="text-green-500" />
                +8.30%
              </span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                {/* Purple grid */}
                <CartesianGrid strokeDasharray="3 3" stroke="#A78BFA" />

                {/* Purple axes */}
                <XAxis
                  dataKey="name"
                  stroke="#C4B5FD"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="#C4B5FD" tickLine={false} axisLine={false} />

                {/* Purple tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#bf9ae3", // deep purple background
                    border: "1px solid #8B5CF6", // lighter purple border
                    color: "#white", // text color (lavender/white)
                  }}
                />

                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "10px", color: "white" }}
                />

                {/* Lines */}
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="purple" // Indigo
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#8B5CF6" // Purple
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Channels</h2>
            <button className="flex items-center cursor-pointer text-purple-400 text-sm hover:text-indigo-500 transition-colors">
              <FaDownload className="mr-1" />
              Download Report
            </button>
          </div>
          <div className="h-64 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {channelsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]} // Use your purple palette
                    />
                  ))}
                </Pie>

                {/* Purple Tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#6D28D9", // deep purple
                    border: "1px solid #8B5CF6", // soft purple border
                    color: "white", // light text
                  }}
                />

                {/* Legend styled in purple */}
                <Legend
                  iconType="circle"
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{
                    color: "#C4B5FD", // lavender text for legend
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
              <ThreeDotsIcon />
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
                      backgroundColor: "#1F2937",
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
                  <GlobeIcon className="text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Delivered</h4>
                  <p className="text-xs text-purple-400">12,500 Packages</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <PackageIcon className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Ordered</h4>
                  <p className="text-xs text-purple-400">1,500 Items</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white shadow-lg p-4 rounded-xl">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <CheckListIcon className="text-red-500" />
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
                  <CheckDoubleIcon className="text-green-500" />
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
                      <ThreeDotsIcon />
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
