import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-9/12 mx-auto mt-24">
      <div className="text-6xl mb-12 underline underline-offset-4 text-light-blue-900">
        <h1>Our Services</h1>
      </div>
      <div className=" grid grid-cols-3  gap-6">
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Go around the world</h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <h3 className="mt-4 text-2xl font-medium">Go around the world</h3>

              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </Link>
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Go around the world</h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <h3 className="mt-4 text-2xl font-medium">Go around the world</h3>

              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </Link>
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Go around the world</h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <h3 className="mt-4 text-2xl font-medium">Go around the world</h3>

              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
