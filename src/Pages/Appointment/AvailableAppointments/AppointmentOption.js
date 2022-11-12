import React from "react";
import { Link } from "react-router-dom";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="">
      <Link
        to=""
        class="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg h-full"
      >
        <div>
          <h3 class="text-5xl font-bold text-blue-900">100+</h3>
          <div class="mt-4 border-t-2 border-yellow-900 pt-2">
            <p class="text-sm font-medium uppercase tracking-widest  text-pink-900">
              {name}
            </p>
            <p class="text-sm font-medium uppercase tracking-widest text-pink-900 mt-2">
              {slots.length > 0 ? slots[0] : "Try Another Day"}
            </p>
            <p class="text-sm font-medium uppercase tracking-widest text-pink-900 mt-2">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
          </div>
        </div>

        <div class="mt-16 inline-flex items-center text-blue-900">
          <p class="text-lg font-medium">How we did it</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
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
        </div>
      </Link>
    </div>
  );
};

export default AppointmentOption;
