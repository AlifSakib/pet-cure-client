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
    <div className="my-16">
      <p className="text-center text-2xl text-blue-900">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div>
        {options.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
