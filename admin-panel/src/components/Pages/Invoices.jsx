import React, { useState } from "react";
import { FaBell, FaCreativeCommons } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MdCreateNewFolder } from "react-icons/md";
import { ChevronDown, Edit, Search } from "lucide-react";

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

const CreateInvoiceIcon = ({ size, className }) => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 2v6h6"></path>
    <path d="M12 18v-6"></path>
    <path d="M9 15h6"></path>
  </svg>
);

// Mock data for the invoices table
const initialInvoices = [
  {
    id: "INV-3145",
    customer: "Dotie Bullock",
    total: "$230",
    status: "On pre-order (cost paid)",
    date: "1/1/2021",
    photo: "D",
  },
  {
    id: "INV-7321",
    customer: "Holmes Hines",
    total: "$300",
    status: "Payment accepted",
    date: "1/15/2021",
    photo: "H",
  },
  {
    id: "INV-9342",
    customer: "Sereno Glover",
    total: "$250",
    status: "Payment error",
    date: "1/19/2021",
    photo: "S",
  },
  {
    id: "INV-6418",
    customer: "Dianne Brock",
    total: "$550",
    status: "Payment accepted",
    date: "1/5/2021",
    photo: "D",
  },
  {
    id: "INV-92327",
    customer: "Morgan Pitts",
    total: "$280",
    status: "Preparing the order",
    date: "3/24/2021",
    photo: "M",
  },
  {
    id: "INV-3013",
    customer: "Merril Richardson",
    total: "$128",
    status: "Awaiting PayPal payment",
    date: "4/12/2021",
    photo: "M",
  },
  {
    id: "INV-10323",
    customer: "Krista Mathis",
    total: "$500",
    status: "Shipped",
    date: "3/13/2021",
    photo: "K",
  },
  {
    id: "INV-4218",
    customer: "Frankie Hewitt",
    total: "$300",
    status: "Remote payment accepted",
    date: "3/10/2021",
    photo: "F",
  },
  {
    id: "INV-3158",
    customer: "Hayden Fitzgerald",
    total: "$200",
    status: "Delivered",
    date: "3/29/2021",
    photo: "H",
  },
  {
    id: "INV-9610",
    customer: "Cole Holcomb",
    total: "$700",
    status: "On pre-order (cost paid)",
    date: "1/13/2021",
    photo: "C",
  },
];

const InVoices = () => {
  const [invoices, setInvoices] = useState(initialInvoices);

  const getStatusColor = (status) => {
    switch (status) {
      case "On pre-order (cost paid)":
        return "bg-purple-100 text-purple-800";
      case "Payment accepted":
        return "bg-green-100 text-green-800";
      case "Payment error":
        return "bg-red-100 text-red-800";
      case "Preparing the order":
        return "bg-yellow-100 text-yellow-800";
      case "Awaiting PayPal payment":
        return "bg-blue-100 text-blue-800";
      case "Shipped":
        return "bg-indigo-100 text-indigo-800";
      case "Remote payment accepted":
        return "bg-green-100 text-green-800";
      case "Delivered":
        return "bg-lime-100 text-lime-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell
              className="text-gray-600 hover:text-purple-600 cursor-pointer"
              size={24}
            />
            <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
          </div>

          <Link
            to={"/invoice-form"}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
          >
            <MdCreateNewFolder size={20} />
            <span>Create Invoice</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col flex-grow">
        {/* Invoices Table */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-6">
            <div className="flex flex-wrap items-center space-x-2 md:space-x-4">
              <div className="relative">
                <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Sort by</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={20} />
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none block w-full bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>10</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={20} />
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
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
                <span>Actions</span>
                <ChevronDown size={20} />
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
                  <th className="py-3 px-4 font-semibold">INVOICE</th>
                  <th className="py-3 px-4 font-semibold">CUSTOMER</th>
                  <th className="py-3 px-4 font-semibold">TOTAL</th>
                  <th className="py-3 px-4 font-semibold">STATUS</th>
                  <th className="py-3 px-4 font-semibold">DATE</th>
                  <th className="py-3 px-4 font-semibold text-right">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
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
                      {invoice.id}
                    </td>
                    <td className="py-4 px-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center font-bold mr-2">
                        {invoice.photo}
                      </div>
                      <span>{invoice.customer}</span>
                    </td>
                    <td className="py-4 px-4">{invoice.total}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block py-1 px-3 text-xs font-semibold rounded-full ${getStatusColor(
                          invoice.status
                        )}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-500">{invoice.date}</td>
                    <td className="py-4 pl-4 text-right">
                      <button className="text-gray-500 hover:text-purple-600">
                        <Edit size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
        </div>
      </main>
    </div>
  );
};

export default InVoices;
