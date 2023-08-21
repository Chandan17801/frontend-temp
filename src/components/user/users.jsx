import React, { use } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/features/user";
import { BiLogOut } from "react-icons/bi";
import { LiaCartArrowDownSolid, LiaUserCircle } from "react-icons/lia";

const Users = () => {
  const dispatch = useDispatch();

  const onClickLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="text-2xl z-50 flex absolute top-[3rem] right-[1.7rem] bg-white justify-center w-67">
      <div className="p-[2rem] rounded-lg shadow-md">
        <div className="mb-4 flex items-center hover:bg-yellow-500 ">
          <LiaCartArrowDownSolid className="mr-6 " />
          <Link href="/orders">Orders</Link>
        </div>
        <hr className="border-gray-600 my- " />
        <div className="mb-4 flex items-center hover:bg-yellow-500 ">
          <LiaUserCircle className="mr-6" />
          <Link href="/users/profile">Profile</Link>
        </div>
        <hr className="border-gray-600 my-2" />
        <div
          className="flex items-center hover:bg-yellow-500"
          onClick={onClickLogoutHandler}
        >
          <BiLogOut className="mr-6" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Users;
