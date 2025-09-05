import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image:
        "https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image:
        "https://www.shutterstock.com/image-photo/crossed-arms-smile-portrait-businesswoman-260nw-2354440635.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Marketing",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/035/997/315/small/ai-generated-cheerful-business-woman-standing-isolated-free-photo.jpg",
    },
    {
      name: "Bob Williams",
      role: "Design Lead",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUmj4bEFQN0qQZZZTrKQPTKE9mh14AYwmjV4R-TNvIY5NVs5vpjNY8ZeqItOntd-G8Aw&usqp=CAU",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-30">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We strive to provide the ultimate online shopping experience by
            combining quality products, fast delivery, and excellent customer
            support. Your satisfaction is our priority.
          </p>
          <Link
            to="/blogs"
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Read Our Blogs
          </Link>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 my-16 max-w-6xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make online shopping easy, fast, and enjoyable for
            everyone. We carefully select high-quality products and ensure
            reliable delivery, aiming to exceed customer expectations. With
            innovation and technology at our core, we constantly strive to
            improve our services and create a seamless experience for every
            shopper.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision becoming a globally trusted e-commerce platform where
            people can find products they love with confidence. By embracing
            sustainable practices and supporting small businesses, we aim to
            create a positive impact in both the shopping and business
            community. Our vision is to connect people with meaningful products
            and deliver joy in every order.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-lg">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Discover More Insights from Our Blogs
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Stay updated with the latest trends, shopping tips, and company news
          by visiting our blog. Learn how we continue to innovate and bring you
          the best online shopping experience.
        </p>
        <Link
          to="/blogs"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Read Blogs
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
