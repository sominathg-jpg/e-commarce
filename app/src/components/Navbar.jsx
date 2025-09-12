import React, { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLogin, user } = useAuthStore();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b shadow-sm">
      {/* Main Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-purple-600">
            JinStore
          </span>
          <span className="text-xs text-gray-400">.com</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-8 items-center gap-4">
          <div className="text-gray-500 text-sm flex items-center">
            <span className="material-icons mr-1 text-purple-500">place</span>
            Deliver to <span className="ml-1 font-semibold">All</span>
          </div>

          <div className="flex-1 flex items-center bg-gray-100 border border-transparent focus-within:border-purple-500 rounded-lg px-3 transition">
            <input
              type="text"
              placeholder="Search for products, categories, or brands..."
              className="flex-1 bg-transparent outline-none py-2 text-sm"
            />
            <Search className="text-gray-500 w-5 h-5" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {isLogin ? (
            <Link
              to="/profile"
              className="hidden md:flex flex-col items-center text-sm"
            >
              {user?.profile ? (
                <img
                  src={user.profile}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                />
              ) : (
                <User className="text-gray-700 hover:text-purple-600" />
              )}
              <span className="text-gray-700 hover:text-purple-600">
                {user?.name || "Account"}
              </span>
            </Link>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  Login
                </button>
              </Link>
              <Link to="/">
                <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
                  Register
                </button>
              </Link>
            </div>
          )}

          {/* Wishlist */}
          <Link to="/profile" className="relative">
            <Heart className="text-gray-700 hover:text-purple-600 w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-gray-700 hover:text-purple-600 w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-center gap-8 px-6 py-2 text-sm font-medium text-gray-700">
        {[
          { label: "Home", to: "/home" },
          { label: "Shop", to: "/filters" },
          { label: "Fruits & Vegetables", to: "/filters" },
          { label: "Beverages", to: "/filters" },
          { label: "Blog", to: "/blogs" },
          { label: "Contact", to: "/contact" },
          { label: "About Us", to: "/about" },
          { label: "My Account", to: "/profile" },
          { label: "Wishlist", to: "/profile" },
          { label: "Order Tracking", to: "/profile" },
        ].map((link, idx) => (
          <Link
            key={idx}
            className="hover:text-purple-600 transition-colors"
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm animate-slideDown">
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 m-3">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none py-2 text-sm"
            />
            <Search className="text-gray-500 w-5 h-5" />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            {[
              { label: "Home", to: "/home" },
              { label: "Shop", to: "/filters" },
              { label: "Fruits & Vegetables", to: "/filters" },
              { label: "Beverages", to: "/filters" },
              { label: "Blog", to: "/blogs" },
              { label: "Contact", to: "/contact" },
              { label: "About Us", to: "/about" },
              { label: "My Account", to: "/profile" },
              { label: "Wishlist", to: "/profile" },
              { label: "Order Tracking", to: "/profile" },
            ].map((link, idx) => (
              <Link
                key={idx}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-purple-600 transition"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
