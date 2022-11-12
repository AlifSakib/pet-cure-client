import React from "react";
import { Link } from "react-router-dom";

const InfoCard = () => {
  return (
    <div className=" w-9/12 mx-auto grid grid-cols-3 gap-6">
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <Link className="block rounded-xl bg-white p-6 sm:p-8" to="#">
          <div className="mt-16 sm:pr-8">
            <h3 className="text-xl font-bold text-gray-900">
              Science of Chemistry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci.
            </p>
          </div>
        </Link>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <Link className="block rounded-xl bg-white p-6 sm:p-8" to="#">
          <div className="mt-16 sm:pr-8">
            <h3 className="text-xl font-bold text-gray-900">
              Science of Chemistry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci.
            </p>
          </div>
        </Link>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <Link className="block rounded-xl bg-white p-6 sm:p-8" to="#">
          <div className="mt-16 sm:pr-8">
            <h3 className="text-xl font-bold text-gray-900">
              Science of Chemistry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
