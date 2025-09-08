import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaChartBar,
  FaFileInvoice,
  FaBell,
  FaPlus,
} from "react-icons/fa";
import { NavLink, useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [selectedtab, setSelectedTab] = useState("/dashboard");
  return (
    <div className="w-72 h-screen bg-white shadow-lg flex flex-col justify-between p-4">
      {/* Top Section */}
      <div>
      

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
            B
          </div>
          <div>
            <h3 className="text-md font-semibold">Shawon Farabi</h3>
            <p className="text-sm text-gray-500">Vender</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/"
            onClick={() => setSelectedTab("/dashboard")}
            className={`flex items-center gap-3 ${
              selectedtab == "/dashboard" ? "bg-purple-100 text-purple-700" : ""
            }  px-4 py-2 rounded-lg font-medium`}
          >
            <FaHome /> Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            onClick={() => setSelectedTab("/orders")}
            className={`flex items-center gap-3 ${
              selectedtab == "/orders" ? "bg-purple-100 text-purple-700" : ""
            }  px-4 py-2 rounded-lg font-medium`}
          >
            <FaBox /> Orders
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setSelectedTab("/products")}
            className={`flex items-center gap-3 ${
              selectedtab == "/products" ? "bg-purple-100 text-purple-700" : ""
            }  px-4 py-2 rounded-lg font-medium`}
          >
            <FaBox /> Products
          </NavLink>
          <NavLink
            to="/customers"
            onClick={() => setSelectedTab("/customers")}
            className={`flex items-center gap-3 ${
              selectedtab == "/customers" ? "bg-purple-100 text-purple-700" : ""
            }  px-4 py-2 rounded-lg font-medium`}
          >
            <FaUsers /> Customers
          </NavLink>
          <NavLink
            to="/invoices"
            onClick={() => setSelectedTab("/invoices")}
            className={`flex items-center gap-3 ${
              selectedtab == "/invoices" ? "bg-purple-100 text-purple-700" : ""
            }  px-4 py-2 rounded-lg font-medium`}
          >
            <FaFileInvoice /> Invoice
          </NavLink>
        </nav>
      </div>

      {/* Bottom Action Button */}
      <div className="flex justify-end">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700">
          <CiLogout />
          logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
