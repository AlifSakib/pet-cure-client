import React from "react";
import { Link } from "react-router-dom";

const InfoCard = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-3 gap-6">
        <Link
          to="#"
          className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
        >
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-4 text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, provident.
          </p>

          <span className="absolute bottom-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </Link>
        <Link
          to="#"
          className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
        >
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-4 text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, provident.
          </p>

          <span className="absolute bottom-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </Link>
        <Link
          to="#"
          className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
        >
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-4 text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, provident.
          </p>

          <span className="absolute bottom-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
