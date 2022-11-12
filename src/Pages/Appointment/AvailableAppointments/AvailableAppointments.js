import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selected }) => {
  return (
    <div className="my-16">
      <p className="text-center text-2xl text-blue-900">
        Available Appointments on {format(selected, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
