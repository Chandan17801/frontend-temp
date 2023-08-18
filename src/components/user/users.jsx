import React from "react";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { LiaCartArrowDownSolid, LiaUserCircle } from "react-icons/lia";

const Users = () => {
  return (
    <div className="text-2xl flex mt-10 bg-white justify-center w-67">
      <div className="p-20 rounded-lg shadow-md">
        <div className="mb-4 flex items-center hover:bg-yellow-500 ">
          <LiaCartArrowDownSolid className="mr-6 " />
          <Link href="/orders">Orders</Link>
        </div>
        <hr className="border-gray-600 my- " />
        <div className="mb-4 flex items-center hover:bg-yellow-500 ">
          <LiaUserCircle className="mr-6" />
          <Link href="/profile">Profile</Link>
        </div>
        <hr className="border-gray-600 my-2" />
        <div className="flex items-center hover:bg-yellow-500">
          <BiLogOut className="mr-6" />
          <Link href="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
