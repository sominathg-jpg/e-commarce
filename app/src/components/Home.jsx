import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import { Link } from "react-router-dom";
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
      "https://img.freepik.com/free-psd/vibrant-colorful-fresh-produce-delightful-healthy-eating_191095-90828.jpg?t=st=1757065273~exp=1757068873~hmac=35653c3101a7f503268cd55b10c9e352bb55fbdbf0dc23bb9e45c25f5d7da781&w=1480",
  },
  {
    name: "Baby & Pregnancy",
    image: "https://m.media-amazon.com/images/I/51IBPXV6wyL._SL1200_.jpg",
  },
  {
    name: "Beverages",
    image:
      "https://img.freepik.com/free-photo/beverages-set-wooden-board_140725-4463.jpg?t=st=1757065369~exp=1757068969~hmac=137b11e5deaee1e6512de955d1ce99e896311eb125c984de04e7ae3f98fe5758&w=1480",
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

// Top Products Data
const topProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Top Product ${i + 1}`,
  price: "$49.99",
  image: `https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70`,
}));

// Best Sellers Data
const clothes = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Clothes ${i + 1}`,
  price: "$29.99",
  image: `https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/9/x/g/l-tmrpoloful-p36-tripr-original-imah9fqgbnvqgfdh.jpeg?q=90`,
}));

const grocery = Array.from({ length: 20 }, (_, i) => ({
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
    <div className="w-full">
      {/* Banner Carousel */}
      <section className="relative w-full h-[80vh] pt-30 flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative  max-w-2xl mx-auto px-4 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the best products with unbeatable prices
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition">
            Get Started
          </button>
        </div>
      </section>
      {/* Top Categories */}
      <section className="my-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
        <div className="bg-white p-6 rounded-3xl  m-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-6 py-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none hover:border-purple-500 flex flex-col items-center justify-center p-2 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-2 shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium text-center whitespace-nowrap">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="my-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Top Products</h2>
          <button className="text-red-500 font-semibold hover:underline">
            See More
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {topProducts.map((product) => (
            <Link
              to={`/products-details/${product.id}`}
              key={product.id}
              className="min-w-[250px] sm:min-w-[280px] bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition snap-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="my-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Best Sellers</h2>

        {/* Clothes */}
        <h3 className="text-xl font-semibold mb-4">Clothes</h3>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {clothes.map((item) => (
            <Link
              to={`/products-details/${item.id}`}
              key={item.id}
              className="min-w-[160px] bg-white p-2 rounded-lg shadow hover:shadow-lg transition snap-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="mt-2 font-semibold text-sm">{item.name}</h4>
              <p className="text-red-500 font-bold">{item.price}</p>
            </Link>
          ))}
        </div>

        {/* Grocery */}
        <h3 className="text-xl font-semibold mb-4">Grocery</h3>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {grocery.map((item) => (
            <Link
              to={`/products-details/${item.id}`}
              key={item.id}
              className="min-w-[160px] bg-white p-2 rounded-lg shadow hover:shadow-lg transition snap-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="mt-2 font-semibold text-sm">{item.name}</h4>
              <p className="text-red-500 font-bold">{item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
