import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { route } = useRouter();
  const cartItemsNumber = 9;
  return (
    <div className="w-full py-2 mb-2 flex justify-center items-center">
      {/* logo of navbar */}
      <div className="w-[154px] h-[65px]">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      {/* menu buttons and search bar */}
      <div className="w-full h-[65px] flex justify-center items-center flex-col">
        {/* search bar */}
        <div className="flex justify-center items-center relative">
          <input
            type="text"
            className="search-gradient w-[500px] h-11 pl-[6px] rounded-md pr-[6px]"
          />
          <AiOutlineSearch className="w-11 h-11 border-black border rounded-md absolute right-0 bg-white cursor-pointer hover:scale-105 transition-all duration-700" />
        </div>
        {/* menu buttons */}
        <div className="mt-2">
          <ul className="flex justify-around items-center gap-4">
            <Link href={"/mordrest"}>
              <li
                className={`uppercase transition-all duration-500 px-2 ${
                  route === "/mordrest" ? "activeLink" : null
                } cursor-pointer`}
              >
                Modrests
              </li>
            </Link>
            <Link href={"/trends"}>
              <li
                className={`uppercase transition-all duration-500 px-2 ${
                  route === "/trends" ? "activeLink" : null
                } cursor-pointer`}
              >
                Trends
              </li>
            </Link>
            <Link href={"/premium_collection"}>
              <li
                className={`uppercase transition-all duration-500 px-2 ${
                  route === "/premium_collection" ? "activeLink" : null
                } cursor-pointer`}
              >
                premium collection
              </li>
            </Link>
            <Link href={"/fashion"}>
              <li
                className={`uppercase transition-all duration-500 px-2 ${
                  route === "/fashion" ? "activeLink" : null
                } cursor-pointer`}
              >
                Fashion
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-2 w-32 mr-2 items-center">
        {/* <AiOutlineShoppingCart className="text-2xl" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M5.25 6.83325L1 12.4999V32.3333C1 33.0847 1.29851 33.8054 1.82986 34.3367C2.36122 34.8681 3.08189 35.1666 3.83333 35.1666H23.6667C24.4181 35.1666 25.1388 34.8681 25.6701 34.3367C26.2015 33.8054 26.5 33.0847 26.5 32.3333V12.4999L22.25 6.83325H5.25Z"
            stroke="#34251F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 12.5H26.5"
            stroke="#34251F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4166 18.1667C19.4166 19.6696 18.8196 21.111 17.7569 22.1737C16.6942 23.2364 15.2528 23.8334 13.7499 23.8334C12.247 23.8334 10.8057 23.2364 9.74298 22.1737C8.68027 21.111 8.08325 19.6696 8.08325 18.1667"
            stroke="#34251F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="26" cy="8" r="9" fill="#C20A0A" />
          <text x="22" y="14" fill="white">
            {cartItemsNumber}
          </text>
        </svg>
        <Link href={"/users/login"}>
          <div className="p-1 cursor-pointer px-6 transition-all duration-700 hover:text-white hover:bg-[#34251f]">
            Login
          </div>
        </Link>
        <div className="mr-4 visible hidden">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
