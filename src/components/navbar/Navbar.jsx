import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import NavbarItems from "./NavbarItems";
import BackDrop from "../UIElements/BackDrop";
import Sidebar from "./Sidebar";
import SideDrawerItem from "./SideDrawerItem";
import Users from "../user/users";
import logo from "../../assets/logo.png";
import cart from "../../assets/Cart.png";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Suggestions from "../suggestions/Suggestions";

const navdata = [
  { id: 1, name: "MODERSTS", url: "/mordrest" },
  { id: 2, name: "TRENDS", url: "/trends" },
  { id: 3, name: "PREMIUM COLLECTION", url: "/premium_collection" },
  { id: 4, name: "FASHION", url: "/fashion" },
  { id: 5, name: "PARTY WEAR", url: "/party_wear" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const { route } = useRouter();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const cartItemsNumber = 9;

  useEffect(() => {
    const readCookies = () => {
      const cookieString = document.cookie;
      console.log(cookieString);
    };
    readCookies();
  }, []);

  const openNavHandler = () => {
    setShow(true);
  };
  const closeNavHandler = () => {
    setShow(false);
  };
  const toggleOptionHandler = () => {
    setShowOption((prev) => !prev);
  };

  return (
    <Fragment>
      {show && <BackDrop onClick={closeNavHandler} />}
      <Sidebar show={show} onClick={closeNavHandler}>
        {navdata.map((data) => (
          <SideDrawerItem key={data.id} val={data} />
        ))}
      </Sidebar>
      <div className="xl:w-[94.95rem] lg:w-[68rem] md:w-[64rem] w-[50rem] py-[2rem] mb-[1rem] flex justify-between items-center">
        <div className="w-[20.3125rem] flex justify-center items-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-full  h-[65px] flex justify-center pt-[1rem] items-center flex-col">
          <Suggestions />

          <div className="2xl:block m-2 hidden">
            <div className="flex justify-around items-center gap-4">
              {navdata.map((data) => (
                <NavbarItems key={data.id} val={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:gap-2 gap-1 w-32 mr-2 items-center">
          <Image
            src={cart}
            className="cursor-pointer h-[2.19794rem] w-[2.23438rem]"
            alt=""
          />
          {loggedIn ? (
            <div className="relative flex ml-[1.5rem] md:w-[6.75rem] w-[4.5rem] h-[2.8125rem]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                className="cursor-pointer"
                onClick={toggleOptionHandler}
              />
              {showOption && <Users />}
            </div>
          ) : (
            <Link href={"/users/login"}>
              <div className="flex md:w-[6.75rem] w-[4.5rem] h-[2.8125rem] md:p-[0.8125rem] p-1 justify-center items-center font-[600] text-[1.125rem] cursor-pointer transition-all duration-700 hover:text-white hover:bg-[#34251f]">
                LOGIN
              </div>
            </Link>
          )}
          <div className="mr-4 visible hidden">
            <AiOutlineMenu />
          </div>
        </div>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/4254/4254068.png"}
          onClick={openNavHandler}
          className="mx-[1rem] 2xl:hidden h-[2.5rem] w-[2.5rem] my-[3rem] border-2 rounded-md border-black"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Navbar;
