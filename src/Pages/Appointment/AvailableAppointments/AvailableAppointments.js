import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selected }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentsOptions.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <div className="my-16 w-9/12 mx-auto">
      <p className="text-center text-2xl text-blue-900">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="relative grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16">
        {options.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            selected={selected}
            setOptions={setOptions}
          ></AppointmentOption>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default AvailableAppointments;
