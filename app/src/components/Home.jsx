import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";

// Banner Data
const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
];

const categories = [
  {
    name: "Fruits & Vegetables",
    image:
      "https://img.freepik.com/free-psd/vibrant-colorful-fresh-produce-delightful-healthy-eating_191095-90828.jpg?w=1480",
  },
  {
    name: "Baby & Pregnancy",
    image: "https://m.media-amazon.com/images/I/51IBPXV6wyL._SL1200_.jpg",
  },
  {
    name: "Beverages",
    image:
      "https://img.freepik.com/free-photo/beverages-set-wooden-board_140725-4463.jpg?w=1480",
  },
  {
    name: "Meats & Seafood",
    image: "https://cfishct.com/wp-content/uploads/2019/11/SalmonSteak.jpg",
  },
  {
    name: "Biscuits & Snacks",
    image:
      "https://ars.els-cdn.com/content/image/3-s2.0-B9780128155790000143-f14-01-9780128155790.jpg",
  },
  {
    name: "Breads & Bakery",
    image:
      "https://img.freepik.com/premium-photo/variety-bread_943860-4689.jpg",
  },
  {
    name: "Breakfast & Dairy",
    image:
      "https://static.virtubox.io/project/file/20210510-063214-w19i-dairy-breakfast.png",
  },
  {
    name: "Frozen Foods",
    image:
      "https://www.mtrfoods.com/mtr_admin/data_content/products_category/background_img/vada1.jpg",
  },
  {
    name: "Grocery & Staples",
    image:
      "https://www.apo-elearning.org/pluginfile.php/42228/course/overviewfiles/Modern%20Food%20Retail.jpg",
  },
];

const topProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Top Product ${i + 1}`,
  price: "$49.99",
  image: `https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70`,
}));

const clothes = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Clothes ${i + 1}`,
  price: "$29.99",
  image: `https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/9/x/g/l-tmrpoloful-p36-tripr-original-imah9fqgbnvqgfdh.jpeg?q=90`,
}));

const grocery = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Grocery ${i + 1}`,
  price: "$9.99",
  image: `https://content.jdmagicbox.com/comp/jatani/h7/9999p6755.6755.180630221240.d8h7/catalogue/grocery-business-panchagaon-jatani-grocery-stores-rqd51x3gfp.jpg`,
}));

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === banners.length - 1 ? 0 : current + 1);

  return (
    <div className="w-full pt-28">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center text-center">
        <img
          src={banners[current].image}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-gray-200">
            Discover the best products with unbeatable prices
          </p>
          <Link className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition transform hover:scale-105">
            Shop Now
          </Link>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 rounded-full text-white hover:bg-purple-600 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 rounded-full text-white hover:bg-purple-600 transition"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Categories */}
      <section className="my-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
          Shop by Category
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 py-4 md:justify-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-none flex flex-col items-center cursor-pointer transition transform hover:scale-105"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg ring-2 ring-purple-500/50 hover:ring-purple-600">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section className="my-16 px-4 sm:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Top Products
          </h2>
          <button className="text-purple-600 font-semibold hover:underline text-sm sm:text-base">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {topProducts.map((product) => (
            <Link
              to={`/products-details/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-1 text-gray-800 text-sm sm:text-base">
                  {product.name}
                </h3>
                <p className="text-purple-600 font-bold mb-3">
                  {product.price}
                </p>
                <button className="mt-auto bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="my-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
          Best Sellers
        </h2>

        {/* Clothes */}
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Clothes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {clothes.map((item) => (
            <Link
              to={`/products-details/${item.id}`}
              key={item.id}
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition group flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 sm:h-40 object-cover rounded group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col flex-1">
                <h4 className="mt-2 font-semibold text-sm text-gray-800">
                  {item.name}
                </h4>
                <p className="text-purple-600 font-bold mb-3">{item.price}</p>
                <button className="mt-auto bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Grocery */}
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Grocery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {grocery.map((item) => (
            <Link
              to={`/products-details/${item.id}`}
              key={item.id}
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition group flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 sm:h-35 object-cover rounded group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col flex-1">
                <h4 className="mt-2 font-semibold text-sm text-gray-800">
                  {item.name}
                </h4>
                <p className="text-purple-600 font-bold mb-3">{item.price}</p>
                <button className="mt-auto bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
