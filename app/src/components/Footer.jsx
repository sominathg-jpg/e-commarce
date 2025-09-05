import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-400 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-black mb-4 text-lg">
              Join our newsletter for £10 offs
            </h4>
            <p className="text-sm mb-4">
              Register now to get latest updates on promotions & coupons. Don't
              worry, we not spam!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded-l-md w-full text-black"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-black p-2 rounded-r-md">
                SEND
              </button>
            </div>
            <p className="text-xs mt-2">
              By subscribing you agree to our{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="underline">
                Cookies Policy
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-black mb-4 text-lg">
                Do You Need Help?
              </h4>
              <ul className="space-y-2">
                <li className="text-sm">
                  <p className="font-bold">Monday-Friday: 08am-0pm</p>
                  <p>📞 0800 300-353</p>
                </li>
                <li className="text-sm flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:info@example.com" className="hover:underline">
                    info@example.com
                  </a>
                </li>
                <li className="text-sm mt-4">Need help with your order?</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4 text-lg">
                Make Money with Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Sell on Grogin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sell Your Services on Grogin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sell on Grogin Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sell your Apps on Grogin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Become an Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Advertise Your Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sell-Publish with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Become an Browse Vendor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4 text-lg">
                Let Us Help You
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Your Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns & Replacements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping Rates & Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund and Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Follow us on social media:</p>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-gray-400 hover:text-black">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.772 1.624 4.965 4.965.058 1.265.068 1.645.068 4.849 0 3.204-.01 3.584-.068 4.849-.193 3.341-1.624 4.85-4.965 4.965-1.266.058-1.646.068-4.85.068-3.204 0-3.584-.01-4.85-.068-3.341-.193-4.85-1.624-4.965-4.965-.058-1.265-.068-1.645-.068-4.849 0-3.204.01-3.584.068-4.849.193-3.341 1.624-4.85 4.965-4.965 1.266-.058 1.646-.068 4.85-.068zm0-2.163c-3.259 0-3.66.014-4.949.072-4.492.205-6.602 2.316-6.806 6.806-.058 1.289-.072 1.69-.072 4.949 0 3.259.014 3.66.072 4.949.204 4.492 2.315 6.602 6.806 6.806 1.289.058 1.69.072 4.949.072 3.259 0 3.66-.014 4.949-.072 4.492-.204 6.602-2.315 6.806-6.806.058-1.289.072-1.69.072-4.949 0-3.259-.014-3.66-.072-4.949-.204-4.492-2.315-6.602-6.806-6.806-1.289-.058-1.69-.072-4.949-.072zM12 6.865c-2.822 0-5.135 2.313-5.135 5.135s2.313 5.135 5.135 5.135 5.135-2.313 5.135-5.135-2.313-5.135-5.135-5.135zm0 8.3c-1.745 0-3.165-1.42-3.165-3.165s1.42-3.165 3.165-3.165 3.165 1.42 3.165 3.165-1.42 3.165-3.165 3.165z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.783 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.34-1.6.57-2.46.68.88-.53 1.55-1.37 1.87-2.38-.82.49-1.73.85-2.67 1.05-1.46-1.56-3.6-2.52-5.96-2.52-4.5 0-8.1 3.6-8.1 8.1 0 .64.08 1.27.24 1.86-3.34-.17-6.3-1.76-8.31-4.17-.34.58-.53 1.26-.53 2.02 0 1.4.7 2.64 1.77 3.36-.65-.02-1.25-.2-1.78-.49v.09c0 3.92 2.8 7.2 6.54 7.94-.68.18-1.4.28-2.14.28-.52 0-1.03-.05-1.52-.14.93 2.92 3.62 5.06 6.8 5.12-2.78 2.18-6.28 3.5-10.1 3.5-.66 0-1.3-.04-1.92-.12 3.59 2.3 7.85 3.66 12.39 3.66 14.86 0 23.04-12.3 23.04-23.04 0-.35-.01-.7-.02-1.05.8-1.55 1.49-3.48 1.95-5.55z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.25 0h-16.5c-2.07 0-3.75 1.68-3.75 3.75v16.5c0 2.07 1.68 3.75 3.75 3.75h16.5c2.07 0 3.75-1.68 3.75-3.75v-16.5c0-2.07-1.68-3.75-3.75-3.75zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-6a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.028 17.534h-2.926v-9.566h2.926v9.566zm-1.464-10.999c-.933 0-1.689-.757-1.689-1.689s.756-1.689 1.689-1.689 1.689.757 1.689 1.689-.756 1.689-1.689 1.689zm8.563 10.999h-2.925v-4.66c0-1.125-.02-2.578-1.571-2.578-1.57 0-1.81 1.229-1.81 2.497v4.741h-2.925v-9.566h2.753v1.241h.04c.382-.727 1.309-1.493 2.716-1.493 2.904 0 3.444 1.908 3.444 4.398v5.42z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-sm hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Order Tracking
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-4">
          <p>
            Copyright 2024 © Jinstore Woo Commerce WordPress Theme. All right
            reserved. Powered by BlackRise Themes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
