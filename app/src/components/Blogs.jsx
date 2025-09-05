import React from "react";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "10 Tips for Healthy Eating",
    image:
      "https://thedoctorweighsin.com/wp-content/uploads/2018/04/Woman-enjoying-salad-1500-x-1000.jpg",
    excerpt:
      "Learn how to maintain a balanced diet with these simple and effective tips.",
  },
  {
    id: 2,
    title: "Top 5 Grocery Shopping Hacks",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/1183012322/Grocery-store/960x0.jpg?format=jpg&width=960",
    excerpt:
      "Save money and time while shopping for groceries with these handy tips.",
  },
  {
    id: 3,
    title: "Sustainable Living at Home",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    excerpt:
      "Discover how small changes in your daily routine can lead to a more sustainable lifestyle.",
  },
  {
    id: 4,
    title: "Delicious Homemade Recipes",
    image:
      "https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg",
    excerpt:
      "Try these easy and tasty recipes that you can make at home with minimal ingredients.",
  },
  {
    id: 5,
    title: "The Benefits of Organic Food",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    excerpt:
      "Why choosing organic products can be better for your health and the environment.",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pt-30">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
