import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Login = () => {
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
    <section className=" min-h-screen flex justify-center items-center absolute top-0 left-0 w-full bg bg-transparent">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center items-center gap-6 bg-[#A89011C7] p-10 rounded-xl ${inter.className}`}
      >
        <h6 className="text-white text-xl">Login</h6>
        <input
          className="rounded-lg px-2 "
          type="text"
          name="email"
          onChange={handleChnage}
        />
        <input
          className="rounded-lg px-2 "
          type="password"
          name="password"
          onChange={handleChnage}
        />
        <input
          className="rounded-lg px-2 bg-[#CFC77A] text-white text-lg cursor-pointer hover:opacity-90"
          type="submit"
          value="Login"
        />
      </form>
    </section>
  );
};

export default Login;
