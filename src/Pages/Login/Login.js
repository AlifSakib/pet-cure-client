import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <input
            className="block w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm mb-4 border"
            {...register("firstName")}
            placeholder="First name"
          />
          <input
            className="block w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm mb-4 border"
            {...register("firstName")}
            placeholder="First name"
          />
          <input
            className=" ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
