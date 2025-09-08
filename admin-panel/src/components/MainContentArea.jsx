import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";
import Orders from "../components/Pages/Order";
import Products from "../components/Pages/Products";
// Import other pages...
import InVoices from "././Pages/Invoices";
import Customers from "./Pages/Customers";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/Addproduct";
const MainContent = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/invoices" element={<InVoices />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        {/* Add other routes */}
      </Routes>
    </div>
  );
};

export default MainContent;
