import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { route } = useRouter();
  return (
    <div className="w-full py-2 mb-2 flex justify-center items-center">
      {/* logo of navbar */}
      <div className="w-[154px] h-[65px]">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            onLoad={(e) => console.log(e.target.naturalWidth)}
          />
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
                className={`uppercase px-2 ${
                  route === "/mordrest" ? "bg-[#34251F] text-white" : null
                } cursor-pointer`}
              >
                Modrests
              </li>
            </Link>
            <Link href={"/trends"}>
              <li
                className={`uppercase px-2 ${
                  route === "/trends" ? "bg-[#34251F] text-white" : null
                } cursor-pointer`}
              >
                Trends
              </li>
            </Link>
            <Link href={"/premium_collection"}>
              <li
                className={`uppercase px-2 ${
                  route === "/premium_collection"
                    ? "bg-[#34251F] text-white"
                    : null
                } cursor-pointer`}
              >
                premium collection
              </li>
            </Link>
            <Link href={"/fashion"}>
              <li
                className={`uppercase px-2 ${
                  route === "/fashion" ? "bg-[#34251F] text-white" : null
                } cursor-pointer`}
              >
                Fashion
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
