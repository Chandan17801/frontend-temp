import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useHttpClient } from "@/hooks/http-hook";
import { login } from "../../../store/features/user";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { sendRequest } = useHttpClient();
  const dispatch = useDispatch();
  const router = useRouter();

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
    let res;
    try {
      res = await sendRequest("/user/login", "post", loginData);
      if (res.data) console.log(res.data);
      dispatch(login());
      router.push("/");
    } catch (error) {
      console.log("Error " + error);
    }
  };

  return (
    <div className="relative">
      <section className="usersContainer min-h-screen  flex justify-center items-center absolute top-0 left-0 w-full bg bg-transparent">
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col justify-center items-center gap-6 bg-[#A89011C7] p-10 rounded-xl ${inter.className}`}
        >
          <h6 className="text-white text-xl">Login</h6>
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
            type="text"
            name="email"
            onChange={handleChnage}
          />
          <input
            className="rounded-lg px-2 sm:w-64 w-56 focus:outline-yellow-200 shadow-2xl shadow-white"
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
      <Link href={"/users/signup"}>
        <button className="rounded-lg px-4 py-1 absolute right-6 top-4 bg-[#CFC77A] text-white text-lg cursor-pointer hover:opacity-90">
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Login;
