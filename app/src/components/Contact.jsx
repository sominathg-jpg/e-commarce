import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Truck,
  ShieldCheck,
} from "lucide-react";

// ✅ Reusable Feature Card
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-4 space-x-4  rounded-lg shadow-md hover:shadow-lg transition">
    <Icon className="flex-shrink-0 w-6 h-6 text-yellow-400" />
    <div>
      <h3 className="text-sm font-semibold text-black">{title}</h3>
      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("✅ Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="  font-inter text-gray-300 antialiased pt-30">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Contact With Us
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
            You can ask us questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Contact us for all your questions and concerns. Send us your
            problems, and we’ll get back to you as soon as possible.
          </p>
        </section>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Offices & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">
              Our Offices
            </h3>
            <p className="text-gray-400 mb-8">
              Our offices are located worldwide to assist you quickly. Reach out
              to us at any branch, and our support team will be happy to help.
            </p>

            {/* Office Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="font-semibold text-black">
                    United States Office
                  </span>
                </div>
                <address className="text-sm text-gray-400 not-italic">
                  205 Middle Road, 2nd Floor, New York
                  <br />
                  +1 202-555-0123
                  <br />
                  <a
                    href="mailto:info@example.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    info@example.com
                  </a>
                </address>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="font-semibold text-black">
                    Main Office, USA
                  </span>
                </div>
                <address className="text-sm text-gray-400 not-italic">
                  99 Grand Ave, Los Angeles
                  <br />
                  +1 202-555-0199
                  <br />
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    contact@example.com
                  </a>
                </address>
              </div>
            </div>

            {/* Social Media */}
            <div className="border-t border-gray-700 pt-6">
              <span className="text-sm text-gray-400 font-semibold">
                Follow us:
              </span>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-400">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md outline-none  text-black border border-gray-700 p-3 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md outline-none   text-black border border-gray-700 p-3 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md  outline-none  text-black border border-gray-700 p-3 focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md  outline-none  text-black border border-gray-700 p-3 focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-md font-medium text-black bg-purple-600 hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Features */}
        <section className="mt-20 border-t border-gray-700 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Mail}
              title="Easy Payments"
              description="Fast and secure online payments with multiple options."
            />
            <FeatureCard
              icon={Phone}
              title="24/7 Support"
              description="Our team is available anytime you need assistance."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Quality Assurance"
              description="We guarantee high-quality standards for all services."
            />
            <FeatureCard
              icon={Truck}
              title="Fast Delivery"
              description="Quick delivery starting from just 1 hour."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
