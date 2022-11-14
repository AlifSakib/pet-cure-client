import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(console.error(err));
      });
  };
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1 className="text-start text-gray-700">Email</h1>
          <input
            className="block w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm mb-4 border"
            type="email"
            {...register("email", { required: "Email Address Is Required" })}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
          <h1 className="text-start text-gray-700">Password</h1>
          <input
            className="block w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm mb-4 border"
            type="password"
            {...register("password", {
              required: "Password Is Required",
              minLength: { value: 6, message: "Must be 6 character" },
            })}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
          <input
            className="  inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full cursor-pointer"
            type="submit"
          />
        </form>

        <button
          className=" inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm
          font-medium text-white w-full cursor-pointer mt-5"
          type="submit"
        >
          Continue with Google
        </button>
        <p className="text-start py-2">
          New to PetCure ? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
