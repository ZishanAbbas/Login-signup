import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex  items-center justify-center h-[88vh]">
      <div className=" bg-red-400 backdrop-blur-sm h-140 w-130 border-4 border-blue-600 rounded-xl ">
        <div className="flex flex-col items-center p-0 ">
          <h1 className="text-2xl font-bold mt-8">SignUp</h1>
          <label className="text-xl font-bold pt-5 pb-2" htmlFor="">
            Name
          </label>
          <input
            className="border rounded-sm p-3 bg-red-200"
            type="text"
            placeholder="Enter your Name"
          />

          <label className=" text-xl font-bold pt-5 pb-2" htmlFor="">
            User Name
          </label>
          <input
            className="border rounded-sm p-3 bg-red-200"
            type="text"
            placeholder="Enter your UserName"
          />

          <label className="text-xl font-bold pt-5 pb-2" htmlFor="">
            Password
          </label>
          <input
            className="border rounded-sm p-3 bg-red-200"
            type="password"
            placeholder="Enter your password"
          />

          <button className=" mt-6 border-2 p-2 rounded-xl cursor-pointer bg-red-100 hover:bg-amber-300">
            Submit
          </button>
        </div>

        <div className="flex flex-row items-center justify-center mt-6">
          <label className="text-xl font-bold" htmlFor="">
            Existing User?
          </label>
          <Link to="/Login">
            <button className="text-xl hover:text-blue-700 pl-3 underline cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
