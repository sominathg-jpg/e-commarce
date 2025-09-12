import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  MessageCircle,
  CreditCard,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
// Dummy Reviews
const dummyReviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing quality! Totally worth it.",
  },
  {
    id: 2,
    name: "Alice Smith",
    rating: 4,
    comment: "Very comfortable, but delivery was a bit late.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent product. My family loves it!",
  },
  {
    id: 4,
    name: "Sophia Lee",
    rating: 3,
    comment: "Good but expected better fabric.",
  },
  {
    id: 5,
    name: "Mohammed Ali",
    rating: 4,
    comment: "Solid build, easy to assemble.",
  },
];

// Dummy Similar Products
const dummySimilarProducts = [
  {
    id: 1,
    name: "Urban Living 2-Seater Sofa",
    price: 299,
    image:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/9/x/g/l-tmrpoloful-p36-tripr-original-imah9fqgbnvqgfdh.jpeg?q=90",
  },
  {
    id: 2,
    name: "Comfort King Recliner",
    price: 399,
    image:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/9/x/g/l-tmrpoloful-p36-tripr-original-imah9fqgbnvqgfdh.jpeg?q=90",
  },
  {
    id: 3,
    name: "Modern Grey Sofa Bed",
    price: 350,
    image:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/9/x/g/l-tmrpoloful-p36-tripr-original-imah9fqgbnvqgfdh.jpeg?q=90",
  },
];

const ProductPage = () => {
  const productData = {
    id: 1,
    name: "Little Smile 1-Seater Polyester Sofa Bed",
    rating: 4,
    reviews: dummyReviews.length,
    price: 182.0,
    oldPrice: 250.0,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/n/i/j/single-182-1-seater-blue-polyester-91-no-9-fl017-little-smile-original-imah8wgyjwwjgcpy.jpeg?q=70",
    ],
    description:
      "This stylish 1-seater polyester sofa bed is perfect for compact spaces. Designed with comfort and durability in mind, it easily converts into a bed for your convenience.",
    material: "Premium Polyester",
    dimensions: "182 cm x 91 cm",
    warranty: "1 year manufacturer warranty",
    payment: "Secure payments with Google Pay, Online card, UPI, etc.",
  };

  return (
    <div className="bg-white text-gray-800 font-sans pt-28">
      {/* Product Top Section */}
      <div className="container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductImageGallery images={productData.images} />
          <ProductDetails product={productData} />
        </div>
      </div>

      {/* Bottom Section: Reviews + Similar Products */}
      <div className="container mx-auto px-4 sm:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-1 lg:order-2">
            <ReviewSection reviews={dummyReviews} />
          </div>
          <div className="order-2 lg:order-1">
            <SimilarProducts products={dummySimilarProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Image Gallery
const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition ${
              mainImage === img
                ? "border-purple-500"
                : "border-gray-200 hover:border-purple-300"
            }`}
            onClick={() => setMainImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Product Details
const ProductDetails = ({ product }) => (
  <div>
    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

    {/* Rating */}
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <div className="flex text-yellow-400 mr-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < product.rating ? "fill-yellow-400" : "fill-gray-300"
            }`}
          />
        ))}
      </div>
      <span>({product.rating}.0)</span>
      <span className="mx-2">•</span>
      <span>{product.reviews} Reviews</span>
    </div>

    {/* Price */}
    <div className="flex items-end mb-6">
      <span className="text-4xl font-bold text-purple-600">
        ${product.price.toFixed(2)}
      </span>
      <span className="text-lg text-gray-400 line-through ml-3">
        ${product.oldPrice.toFixed(2)}
      </span>
    </div>

    {/* Actions */}
    <div className="space-y-4 mb-8">
      <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        <MessageCircle className="w-5 h-5" /> Order on WhatsApp
      </button>
      <div className="flex items-center gap-3">
        <input
          type="number"
          defaultValue="1"
          min="1"
          className="w-20 border rounded-lg text-center py-2"
        />
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          <ShoppingCart className="w-5 h-5" /> Add to Cart
        </button>
        <button className="flex-1 py-3 px-4 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>
    </div>

    {/* Product Info */}
    <div className="text-gray-600 space-y-2 text-sm">
      <p>{product.description}</p>
      <p>
        <span className="font-semibold">Material:</span> {product.material}
      </p>
      <p>
        <span className="font-semibold">Dimensions:</span> {product.dimensions}
      </p>
      <p>
        <span className="font-semibold">Warranty:</span> {product.warranty}
      </p>
      <p>
        <span className="font-semibold">Payment:</span> {product.payment}
      </p>
      <p className="flex items-center gap-2 text-green-600">
        <Truck className="w-4 h-4" /> Free Delivery Available
      </p>
      <p className="flex items-center gap-2 text-blue-600">
        <CreditCard className="w-4 h-4" /> Easy EMI Options
      </p>
    </div>
  </div>
);

// Similar Products
const SimilarProducts = ({ products }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((prod, index) => (
        <Link
          to={`/products-details/${prod.id}`}
          key={prod.id}
          className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group flex flex-col"
        >
          <img
            src={prod.image}
            alt={prod.name}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
          />
          <div className="p-3 sm:p-4 flex flex-col flex-1">
            <h3 className="font-semibold mb-1 text-gray-800 text-sm sm:text-base">
              {prod.name}
            </h3>
            <p className="text-purple-600 font-bold mb-3">{prod.price}</p>
            <button className="mt-auto bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// Reviews Section
const ReviewSection = ({ reviews }) => {
  const [userReviews, setUserReviews] = useState(reviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [visibleCount, setVisibleCount] = useState(3);

  const handleAddReview = () => {
    if (!newReview.name || !newReview.comment) return;
    setUserReviews([
      ...userReviews,
      { id: userReviews.length + 1, ...newReview },
    ]);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: parseInt(e.target.value) })
            }
            className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-purple-500"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddReview}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </div>
        <textarea
          placeholder="Write your review..."
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-500"
          rows="3"
        />
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {userReviews.slice(0, visibleCount).map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition"
          >
            <img
              src={`https://i.pravatar.cc/150?u=${review.name}`}
              alt={review.name}
              className="w-12 h-12 rounded-full border border-gray-200"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </h3>
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      {visibleCount < userReviews.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount(userReviews.length)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            Show More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
