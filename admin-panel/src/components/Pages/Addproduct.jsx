import React, { useState, useEffect } from "react";

// Helper components for icons
const AddProductIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
);

const SearchIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const BellIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const CheckCircleIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.62"></path>
    <path d="M9 11l3 3L22 4"></path>
  </svg>
);

const XCircleIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

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

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    oldPrice: "",
    stock: "",
    brand: "",
    category: "",
    colors: "",
    weight: "",
    material: "",
    dimensions: "",
    warranty: "",
    payment: "",
    description: "",
    isFeatured: false,
    isBestseller: false,
    isNewArrival: false,
  });
  const [images, setImages] = useState([]);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Auth state change listener
  useEffect(() => {
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
      });
      return () => unsubscribe();
    }
  }, [auth]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (!db || !userId) {
      setMessage({
        type: "error",
        text: "Database not ready. Please try again.",
      });
      setLoading(false);
      return;
    }

    try {
      const productData = {
        name: formData.name,
        price: parseFloat(formData.price),
        oldPrice: formData.oldPrice ? parseFloat(formData.oldPrice) : null,
        stock: parseInt(formData.stock, 10),
        brand: formData.brand,
        category: formData.category,
        colors: formData.colors.split(",").map((c) => c.trim()),
        weight: formData.weight,
        material: formData.material,
        dimensions: formData.dimensions,
        warranty: formData.warranty,
        payment: formData.payment,
        description: formData.description,
        isFeatured: formData.isFeatured,
        isBestseller: formData.isBestseller,
        isNewArrival: formData.isNewArrival,
      };

      /*
      
      
      {
  "name": "Organic Apple Cider Vinegar",
  "price": 8.99,
  "oldPrice": 10.50,
  "stock": 150,
  "brand": "Healthy Harvest",
  "category": "Beverages",
  "colors": [
    "amber",
    "brown"
  ],
  "weight": "500 ml",
  "material": "Glass",
  "dimensions": "7x7x18 cm",
  "warranty": "6 Months",
  "payment": "Online, COD",
  "description": "A raw, unfiltered apple cider vinegar with the 'mother'. Perfect for dressings, marinades, and health tonics.",
  "images": [
    "https://example.com/images/apple-cider-1.jpg",
    "https://example.com/images/apple-cider-2.jpg"
  ],
  "isFeatured": true,
  "isBestseller": false,
  "isNewArrival": true,
  "createdAt": "2024-05-20T10:00:00Z"
}

      
      */
      if (images.length > 0) {
        // In a real-world scenario, you would upload the files to Firebase Storage here.
        // For example:
        // const uploadPromises = images.map(file => {
        //   const storageRef = ref(getStorage(), `product-images/${userId}/${file.name}`);
        //   return uploadBytes(storageRef, file).then(snapshot => getDownloadURL(snapshot.ref));
        // });
        // const imageUrls = await Promise.all(uploadPromises);
        // productData.images = imageUrls;
        setMessage({
          type: "info",
          text: "Images selected. In a real app, these would be uploaded to Cloud Storage and the URLs saved to the database.",
        });
      }

      await addDoc(productsCollectionRef, productData);
      setMessage({ type: "success", text: "Product added successfully!" });

      // Clear form data after successful submission
      setFormData({
        name: "",
        price: "",
        oldPrice: "",
        stock: "",
        brand: "",
        category: "",
        colors: "",
        weight: "",
        material: "",
        dimensions: "",
        warranty: "",
        payment: "",
        description: "",
        isFeatured: false,
        isBestseller: false,
        isNewArrival: false,
      });
      setImages([]);
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({
        type: "error",
        text: "Failed to add product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Add Product</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-grow justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            New Product Details
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Selling Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="oldPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Previous Price ($)
              </label>
              <input
                type="number"
                id="oldPrice"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleInputChange}
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700"
              >
                Available Quantity
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="colors"
                className="block text-sm font-medium text-gray-700"
              >
                Colors (comma-separated)
              </label>
              <input
                type="text"
                id="colors"
                name="colors"
                value={formData.colors}
                onChange={handleInputChange}
                placeholder="e.g., Red, Blue, Green"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700"
              >
                Weight
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="e.g., 500g, 1.2kg"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="material"
                className="block text-sm font-medium text-gray-700"
              >
                Material
              </label>
              <input
                type="text"
                id="material"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="dimensions"
                className="block text-sm font-medium text-gray-700"
              >
                Dimensions
              </label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                placeholder="e.g., 10x15x5 cm"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="warranty"
                className="block text-sm font-medium text-gray-700"
              >
                Warranty
              </label>
              <input
                type="text"
                id="warranty"
                name="warranty"
                value={formData.warranty}
                onChange={handleInputChange}
                placeholder="e.g., 1 Year, 6 Months"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Options
              </label>
              <input
                type="text"
                id="payment"
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
                placeholder="e.g., COD, Online, Card"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Detailed Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50 p-2"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Product Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="isFeatured"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Is Featured
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isBestseller"
                  name="isBestseller"
                  checked={formData.isBestseller}
                  onChange={handleInputChange}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="isBestseller"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Is Bestseller
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isNewArrival"
                  name="isNewArrival"
                  checked={formData.isNewArrival}
                  onChange={handleInputChange}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="isNewArrival"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Is New Arrival
                </label>
              </div>
            </div>

            {loading && (
              <div className="md:col-span-2 text-center text-purple-600 font-medium">
                Adding product...
              </div>
            )}
            {message.text && (
              <div
                className={`md:col-span-2 flex items-center space-x-2 p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : message.type === "info"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircleIcon size={20} />
                ) : (
                  <XCircleIcon size={20} />
                )}
                <span>{message.text}</span>
              </div>
            )}

            <div className="md:col-span-2 flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    name: "",
                    price: "",
                    oldPrice: "",
                    stock: "",
                    brand: "",
                    category: "",
                    colors: "",
                    weight: "",
                    material: "",
                    dimensions: "",
                    warranty: "",
                    payment: "",
                    description: "",
                    isFeatured: false,
                    isBestseller: false,
                    isNewArrival: false,
                  });
                  setImages([]);
                  setMessage({ type: "", text: "" });
                }}
                className="px-6 py-2 rounded-full font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <AddProductIcon size={18} className="inline-block mr-1" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
