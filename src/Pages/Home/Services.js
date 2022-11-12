import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/servicesImage/image1.webp";
import image2 from "../../assets/servicesImage/image2.jpeg";
import image3 from "../../assets/servicesImage/imagw3.webp";
const Services = () => {
  return (
    <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-6xl mb-12 underline underline-offset-4 text-light-blue-900">
        <h1>Our Services</h1>
      </div>
      <div className=" grid lg:grid-cols-3  gap-6">
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <img
                className="absolute h-full object-cover top-0 left-0 w-full"
                src={image1}
                alt=""
              />
              <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-t sm:from-black/75 sm:to-black/10"></div>

              <h2 className="relative mt-4 text-2xl font-medium text-white">
                <svg
                  className="w-10 mb-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Wellness & Vacination
              </h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 overflow-hidden">
              <h3 className="mt-4 text-2xl font-medium overflow-hidden">
                Wellness & Vacination
              </h3>

              <p className="mt-4 overflow-hidden">
                The WCVM Veterinary Medical Centre's Wellness Service offers
                vaccinations within wellness visits or through scheduled
                vaccination clinics that are frequently offered on Saturdays at
                the Small Animal Clinic. Contact us for more information.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </Link>
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <img
                className="absolute h-full object-cover top-0 left-0 w-full"
                src={image2}
                alt=""
              />
              <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-t sm:from-black/75 sm:to-black/10"></div>

              <h2 className="relative mt-4 text-2xl font-medium text-white">
                <svg
                  className="w-10 mb-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Surgery
              </h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <h3 className="mt-4 text-2xl font-medium">Surgery</h3>

              <p className="mt-4">
                Veterinary surgery is surgery performed on animals by
                veterinarians, whereby the procedures fall into three broad
                categories: orthopaedics (bones, joints, muscles), soft tissue
                surgery (skin, body cavities, cardiovascular system,
                GI/urogenital/respiratory tracts), and neurosurgery.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </Link>
        <Link to="#" className="group relative block h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
              <img
                className="absolute h-full object-cover top-0 left-0 w-full"
                src={image3}
                alt=""
              />
              <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-t sm:from-black/75 sm:to-black/10"></div>

              <h2 className="relative mt-4 text-2xl font-medium text-white">
                <svg
                  className="w-10 mb-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Dentistry
              </h2>
            </div>

            <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <h3 className="mt-4 text-2xl font-medium">Dentistry</h3>

              <p className="mt-4 overflow-hidden">
                Veterinary dentistry is the field of dentistry applied to the
                care of animals. It is the art and science of prevention,
                diagnosis, and treatment of conditions, diseases, and disorders
                of the oral cavity, the maxillofacial region, and its associated
                structures as it relates to animals.
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
