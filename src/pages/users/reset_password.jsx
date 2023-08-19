import React, { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


const Retrive_Password = () => {
  const [loginData, setLoginData] = useState({});
  // Chnage handler
  const handleChnage = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  //   submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };
  return (
    <div className="relative">
      <section className=" min-h-screen  usersContainer flex justify-center items-center absolute top-0 left-0 w-full bg bg-transparent">
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col justify-center items-center gap-6 bg-[#A89011C7] p-10 rounded-xl ${inter.className}`}
        >
          <h6 className="text-white text-xl">Retrive Password</h6>
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="phone"
            onChange={handleChnage}
            placeholder="Enter your Phone Number"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="otp"
            onChange={handleChnage}
            placeholder="SMS verification code"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="password"
            name="password"
            onChange={handleChnage}
            placeholder="Enter new Password"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="password"
            name="password"
            onChange={handleChnage}
            placeholder="Confirm new Password"
          />
          <input
            className="rounded-lg px-2 bg-[#CFC77A] text-white text-lg cursor-pointer hover:opacity-90"
            type="submit"
            value="Retrive Password"
          />
        </form>
      </section>
      <Link href={"/users/login"}>
        <button className="rounded-lg px-4 py-1 absolute right-6 top-4 bg-[#CFC77A] text-white text-lg cursor-pointer hover:opacity-90">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Retrive_Password