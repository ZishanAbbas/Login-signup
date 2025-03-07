import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[88vh] p-6">
      <div className=" bg-red-400 backdrop-blur-sm h-110 w-110 border-4 border-blue-600 rounded-xl">
        <div className="flex flex-col items-center m-6 p-0">
          <h1 className="text-2xl font-bold">Login</h1>
          <label className="text-xl font-bold pt-5 pb-2" htmlFor="">
            User Name
          </label>
          <input
            className="border rounded-sm p-3 bg-red-200"
            type="text"
            placeholder="Enter your Name"
          />

          <label className="text-xl font-bold pt-5 pb-2" htmlFor="">
            Password
          </label>
          <input
            className="border rounded-sm p-3 bg-red-200"
            type="password"
            placeholder="Enter your password"
          />

          <button className="border-2 p-2 mt-6 rounded-xl cursor-pointer bg-red-100 hover:bg-amber-300 ">
            Submit
          </button>
        </div>

        <div className="flex justify-center ">
          <label className="text-xl font-bold" htmlFor="">
            New User?
          </label>
          <Link to="/Signup">
            <button
              className="text-xl hover:text-blue-700 pl-3 underline cursor-pointer"
              type="button"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
