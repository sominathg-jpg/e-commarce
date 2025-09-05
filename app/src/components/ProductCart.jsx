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

export default ProductCard;
