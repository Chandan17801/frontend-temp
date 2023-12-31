import React, { useState } from "react";
import { useHttpClient } from "@/hooks/http-hook";
import { Inter } from "next/font/google";
import Link from "next/link";

const pathUrl = "http://localhost:4001/api/v1/user/register";

const inter = Inter({ subsets: ["latin"] });

const Signup = () => {
  const [loginData, setLoginData] = useState({});
  const { sendRequest } = useHttpClient();

  // Chnage handler
  const handleChnage = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  //   submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    let res;
    try {
      res = await sendRequest("/user/register", "post", loginData);
      console.log(res);
    } catch (error) {
      console.log("Error " + res);
    }
    console.log("Submited");
  };
  return (
    <div className="relative">
      <section className=" min-h-screen usersContainer flex justify-center items-center absolute top-0 left-0 w-full bg bg-transparent">
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col justify-center items-center gap-6 bg-[#A89011C7] p-10 rounded-xl ${inter.className}`}
        >
          <h6 className="text-white text-xl">Signup</h6>
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="name"
            onChange={handleChnage}
            placeholder="Full Name"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="phone"
            onChange={handleChnage}
            placeholder="Phone number"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="email"
            onChange={handleChnage}
            placeholder="email"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="password"
            name="password"
            onChange={handleChnage}
            placeholder="Password"
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="password"
            name="password"
            onChange={handleChnage}
            placeholder="Confirm Password"
          />
          <input
            className="rounded-lg px-2 bg-[#CFC77A] text-white text-lg cursor-pointer hover:opacity-90"
            type="submit"
            value="Signup"
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

export default Signup;
