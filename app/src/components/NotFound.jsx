import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center font-sans pt-30">
      <div className="container mx-auto p-8 text-center max-w-2xl">
        {/* Illustration */}
        <div className="relative w-full mb-12 flex justify-center">
          <svg
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 max-w-lg"
          >
            {/* Shadow */}
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="6"
                  floodColor="#000"
                  floodOpacity="0.15"
                />
              </filter>
            </defs>

            {/* 4 */}
            <text
              x="80"
              y="400"
              fontFamily="Inter, sans-serif"
              fontSize="250"
              fontWeight="700"
              fill="#7c3aed"
              filter="url(#shadow)"
            >
              4
            </text>

            {/* Funny face zero */}
            <g transform="translate(280,180)">
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#7c3aed"
                strokeWidth="8"
                fill="#fff"
                filter="url(#shadow)"
              />
              {/* Eyes */}
              <circle cx="160" cy="170" r="12" fill="#333" />
              <circle cx="240" cy="170" r="12" fill="#333" />
              {/* Smile */}
              <path
                d="M160 230 Q200 270 240 230"
                stroke="#333"
                strokeWidth="6"
                fill="transparent"
                strokeLinecap="round"
              />
            </g>

            {/* 4 */}
            <text
              x="560"
              y="400"
              fontFamily="Inter, sans-serif"
              fontSize="250"
              fontWeight="700"
              fill="#7c3aed"
              filter="url(#shadow)"
            >
              4
            </text>

            {/* Decorative floating circles */}
            <circle cx="120" cy="120" r="20" fill="#facc15" opacity="0.8" />
            <circle cx="700" cy="150" r="25" fill="#22d3ee" opacity="0.8" />
            <circle cx="650" cy="480" r="15" fill="#34d399" opacity="0.8" />
            <circle cx="150" cy="500" r="18" fill="#f472b6" opacity="0.8" />
          </svg>
        </div>

        {/* Title + Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Oops! Page not found
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-10">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Go Home
          </Link>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
