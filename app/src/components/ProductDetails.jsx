import React, { useState } from "react";

// Dummy reviews
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
  {
    id: 6,
    name: "Emily Johnson",
    rating: 5,
    comment: "Stylish and affordable. Highly recommend!",
  },
  {
    id: 7,
    name: "Carlos Mendez",
    rating: 4,
    comment: "Pretty good sofa bed, value for money.",
  },
  {
    id: 8,
    name: "Priya Sharma",
    rating: 5,
    comment: "Perfect for small spaces. Loved it!",
  },
  {
    id: 9,
    name: "David Brown",
    rating: 2,
    comment: "Not very durable. Fabric started tearing in 2 months.",
  },
  {
    id: 10,
    name: "Anna Wilson",
    rating: 5,
    comment: "Great product at this price point!",
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
    <div className="bg-white text-gray-800 font-sans pt-32">
      <div className="container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <ProductImageGallery images={productData.images} />

          {/* Product Details */}
          <ProductDetails product={productData} />
        </div>
      </div>

      {/* Reviews */}
      <ReviewSection reviews={dummyReviews} />
    </div>
  );
};

const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg mb-4 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer ${
              mainImage === img ? "border-purple-500" : "border-gray-200"
            }`}
            onClick={() => setMainImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="text-yellow-400 mr-1">★★★★☆</span>
        <span>({product.rating}.0)</span>
        <span className="mx-2">•</span>
        <span>{product.reviews} Reviews</span>
      </div>
      <div className="flex items-end mb-4">
        <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
        <span className="text-lg text-gray-400 line-through ml-2">
          ${product.oldPrice.toFixed(2)}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <button className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Order on WhatsApp
        </button>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            defaultValue="1"
            className="w-20 border rounded-md text-center py-2"
          />
          <button className="flex-1 py-3 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
            🛒 Add to cart
          </button>
          <button className="flex-1 py-3 px-4 border rounded-md text-gray-700 hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>
      </div>

      <div className="text-gray-600 space-y-2">
        <p>{product.description}</p>
        <p>
          <span className="font-semibold">Material:</span> {product.material}
        </p>
        <p>
          <span className="font-semibold">Dimensions:</span>{" "}
          {product.dimensions}
        </p>
        <p>
          <span className="font-semibold">Warranty:</span> {product.warranty}
        </p>
        <p>
          <span className="font-semibold">Payment:</span> {product.payment}
        </p>
      </div>
    </div>
  );
};
const ReviewSection = ({ reviews }) => {
  const [userReviews, setUserReviews] = useState(reviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [visibleCount, setVisibleCount] = useState(5); // show first 5 reviews

  const handleAddReview = () => {
    if (!newReview.name || !newReview.comment) return;
    setUserReviews([
      ...userReviews,
      { id: userReviews.length + 1, ...newReview },
    ]);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
          Customer Reviews
        </h2>

        {/* Review Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Leave a Review
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({
                  ...newReview,
                  rating: parseInt(e.target.value),
                })
              }
              className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddReview}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
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
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {userReviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex gap-4 items-start hover:shadow-lg transition"
            >
              {/* Avatar */}
              <img
                src={
                  review.avatar || `https://i.pravatar.cc/150?u=${review.name}`
                }
                alt={review.name}
                className="w-12 h-12 rounded-full border border-gray-200 shadow-sm"
              />

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
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

        {/* Show More Button */}
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
    </div>
  );
};

export default ProductPage;
