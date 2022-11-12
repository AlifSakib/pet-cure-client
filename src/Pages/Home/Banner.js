import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/Images/hero.jpg";
const Banner = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden  sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-6xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link
                to="#"
                className="mt-8 inline-flex items-center border hover:border-blue-900  px-8 py-4 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500 bg-gradient-to-r from-blue-900 to-pink-900 hover:from-white hover:to-white"
              >
                <span className="text-sm font-medium "> Get Started </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
