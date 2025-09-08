import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLogin, user } = useAuthStore();
  return (
    <header className="w-full fixed border-b z-10 top-0 left-0  bg-white">
      {/* Top Bar */}

      {/* Middle Bar */}
      <div className="flex items-center justify-between px-4 md:px-6 ">
        {/* Logo */}
        <Link to={"/home"} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12 md:w-20 md:h-20 object-contain"
          />
          <span className="text-lg md:text-xl font-bold">JinStore</span>
          <span className="text-xs text-gray-500">.com</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6 items-center gap-4">
          <div className="flex items-center text-gray-600 text-sm">
            <span className="material-icons mr-1">place</span>
            Deliver to <span className="ml-1 font-medium">all</span>
          </div>

          <div className="flex-1 flex items-center bg-gray-100 rounded-md px-3 hover:border border-purple-500 transition-all duration-500">
            <input
              type="text"
              placeholder="Search for products, categories or brands..."
              className="flex-1 bg-transparent outline-none py-2 text-sm"
            />
            <SearchIcon className="text-gray-500" />
          </div>
        </div>

        {/* Right Section */}

        {isLogin ? (
          <div className="flex items-center gap-4 md:gap-6">
            {isLogin ? (
              // 🔹 Show user profile when logged in
              <Link
                to="/profile"
                className="hidden md:flex flex-col items-center text-sm"
              >
                {user?.profile ? (
                  <img
                    src={user.profile}
                    alt="profile"
                    className="w-10 h-10 rounded-full border border-purple-500"
                  />
                ) : (
                  <PersonOutlineIcon className="hover:text-purple-500" />
                )}
                <span className="hover:text-purple-500">
                  {user?.name || "Account"}
                </span>
              </Link>
            ) : (
              // 🔹 Show default "Account" link when not logged in
              <Link
                to="/login"
                className="hidden md:flex flex-col items-center text-sm"
              >
                <PersonOutlineIcon className="hover:text-purple-500" />
                <span className="hover:text-purple-500">Login</span>
              </Link>
            )}
            <Link to="/profile" className="relative">
              <FavoriteBorderIcon className="hover:text-purple-500" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
                0
              </span>
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCartOutlinedIcon className="hover:text-purple-500" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
                0
              </span>
            </Link>

            {/* Hamburger Menu */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        ) : (
          <div className="">
            <Link to="/login">
              <button className=" bg-purple-500 mx-2 rounded-sm px-2 py-1">
                Login
              </button>
            </Link>
            <Link to="/">
              <button className=" bg-purple-500 mx-2 rounded-sm px-2 py-1">
                Register{" "}
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom Nav - Desktop */}
      <nav className="hidden md:flex items-center justify-between px-6 py-2 text-sm font-medium">
        <div className="flex gap-6">
          <Link className="hover:text-purple-500" to="/home">
            Home
          </Link>
          <Link className="hover:text-purple-500" to="/filters">
            Shop
          </Link>
          <Link className="hover:text-purple-500" to="/filters">
            Fruits & Vegetables
          </Link>
          <Link className="hover:text-purple-500" to="/filters">
            Beverages
          </Link>
          <Link className="hover:text-purple-500" to="/blogs">
            Blog
          </Link>
          <Link className="hover:text-purple-500" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-purple-500" to="/about">
            About Us
          </Link>
          <Link className="hover:text-purple-500" to="/profile">
            My account
          </Link>
          <Link className="hover:text-purple-500" to="/profile">
            Wishlist
          </Link>
          <Link className="hover:text-purple-500" to="profile">
            Order Tracking
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          {/* Search Bar Mobile */}

          <div className="flex items-center bg-gray-100 rounded-md px-3 m-3">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none py-2 text-sm"
            />
            <SearchIcon className="text-gray-500" />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/home"
            >
              Home
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/filters"
            >
              Shop
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/filters"
            >
              Fruits & Vegetables
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/filters"
            >
              Beverages
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/about"
            >
              About Us
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/profile"
            >
              My account
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/profile"
            >
              Wishlist
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-500"
              to="/profile"
            >
              Order Tracking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
