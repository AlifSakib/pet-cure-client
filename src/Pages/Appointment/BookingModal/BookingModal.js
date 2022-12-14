import { format } from "date-fns";
import React, { useState } from "react";

const BookingModal = ({ handleModal, modal, option, selected, setOptions }) => {
  const { name, slots } = option;
  const date = format(selected, "PP");
  const [selectedOption, setSetSelectedOerson] = useState(slots[0]);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      option: name,
      patient: name,
      slot,
      email,
      phone,
    };

    console.log(booking);
    setOptions(null);
  };
  return (
    <div>
      <div id="booking-modal" class="rounded-xl  p-4 shadow-xl bg-blue-900">
        <div class="flex items-start gap-4">
          <span class="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div class="flex-1">
            <strong class="block font-medium text-white">
              {" "}
              Book Appointment{" "}
            </strong>

            <p class="mt-1 text-sm text-white">{name}</p>
            <form onSubmit={handleBooking}>
              <div className="mb-2">
                <input
                  type="text"
                  id="UserEmail"
                  defaultValue={date}
                  disabled
                  placeholder="john@rhcp.com"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  name="date"
                />
              </div>
              <div className="mb-2">
                <select name="slot" id="" className="w-full rounded-lg">
                  {slots.map((slot) => (
                    <option value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  name="name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  name="email"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="Phone Number"
                  placeholder="Phone Number"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  name="phone"
                />
              </div>
              <div class="mt-4 flex gap-2 ">
                <button
                  to="#"
                  class="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 w-full "
                >
                  <span class="text-sm "> Submit </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <button
            onClick={() => handleModal(!modal)}
            class="text-gray-500 transition hover:text-gray-600"
          >
            <span class="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
