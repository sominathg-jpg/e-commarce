import React, { useState } from "react";

// Main Page
const FiletesPage = () => {
  const [filters, setFilters] = useState({
    fruits: true,
    vegetables: false,
    herbs: false,
    beverages: false,
    inStock: true,
  });

  const [sortBy, setSortBy] = useState("relevance");

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Organic Wraps, 6 Pack",
      price: 27.9,
      oldPrice: 32.8,
      rating: 3,
      discount: 10,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
      inStock: true,
      category: "Fruits & Vegetables",
    },
    {
      id: 2,
      name: "Orange, each",
      price: 0.99,
      oldPrice: 2.5,
      rating: 4,
      discount: 60,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
      inStock: true,
      category: "Fruits & Vegetables",
    },
    {
      id: 3,
      name: "Strawberry, 16oz",
      price: 1.5,
      oldPrice: 4.5,
      rating: 5,
      discount: 66,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
      inStock: false,
      category: "Fruits & Vegetables",
    },
    // Add more products...
  ];

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    if (filters.inStock && !product.inStock) return false;
    return true;
  });

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen pt-30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block col-span-1 bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4">Filters</h3>

            {/* Category */}
            <div className="mb-5">
              <h4 className="font-semibold mb-2">Category</h4>
              {["fruits", "vegetables", "herbs", "beverages"].map((cat) => (
                <label key={cat} className="flex items-center mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters[cat]}
                    onChange={() => handleFilterChange(cat)}
                    className="mr-2 rounded text-purple-600"
                  />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              ))}
            </div>

            {/* Stock */}
            <div className="mb-5">
              <h4 className="font-semibold mb-2">Stock Status</h4>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={() => handleFilterChange("inStock")}
                  className="mr-2 rounded text-purple-600"
                />
                In Stock Only
              </label>
            </div>

            {/* Price */}
            <div className="mb-5">
              <h4 className="font-semibold mb-2">Price Range</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 p-2 rounded-md border border-gray-300 text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 p-2 rounded-md border border-gray-300 text-sm"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="mb-5">
              <h4 className="font-semibold mb-2">Minimum Rating</h4>
              {[5, 4, 3, 2, 1].map((r) => (
                <label key={r} className="flex items-center mb-1 text-sm">
                  <input
                    type="radio"
                    name="rating"
                    className="mr-2"
                    onChange={() => {}}
                  />
                  {"★".repeat(r)}
                  {"☆".repeat(5 - r)}
                </label>
              ))}
            </div>

            <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
              Apply Filters
            </button>
          </aside>

          {/* Main Content */}
          <main className="col-span-1 md:col-span-3 lg:col-span-4">
            {/* Banner */}
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center overflow-hidden shadow">
              <div className="flex-1">
                <p className="text-xs text-purple-600 font-semibold uppercase mb-1">
                  Special Offer
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Fresh Grocery Discounts This Week
                </h2>
                <p className="text-gray-600 mb-4">
                  Shop your favorite fresh groceries at discounted prices. Don’t
                  miss out!
                </p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                  Shop Now →
                </button>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6">
                <img
                  src="https://images.all-free-download.com/images/thumbjpg/ecommerce_website_banner_template_shoppers_sketch_6920121.jpg"
                  alt="Banner"
                  className="rounded-lg h-32 md:h-48 object-cover"
                />
              </div>
            </div>

            {/* Sort + Items */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <span className="text-gray-600 text-sm mb-2 md:mb-0">
                Showing {filteredProducts.length} of {products.length} results
              </span>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="sort-by" className="text-gray-600">
                  Sort by:
                </label>
                <select
                  id="sort-by"
                  className="p-2 rounded-md border border-gray-300"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-asc">Price (Low → High)</option>
                  <option value="price-desc">Price (High → Low)</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow">
            -{product.discount}%
          </span>
        )}

        {/* Stock Badge */}
        <span
          className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-md shadow ${
            product.inStock
              ? "bg-green-500 text-white"
              : "bg-gray-400 text-white"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-sm mb-2">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
          <span className="ml-1 text-gray-500 text-xs">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-end mb-4">
          <span className="text-lg font-bold text-purple-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through ml-2">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart */}
        <div className="mt-auto">
          <button
            disabled={!product.inStock}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              product.inStock
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiletesPage;
