import React from "react";
import SidebarItems from "./SidebarItems";

const data = [
  { id: "1", title: "YOUR ORDERS" },
  { id: "2", title: "WISHLIST" },
  { id: "3", title: "CART" },
  { id: "4", title: "BEST OFFERS" },
  { id: "5", title: "MY REWARDS" },
  { id: "6", title: "CUSTOMER CARE" },
];

function ProfileSidebar() {
  return (
    <div className="lg:w-[34.75rem] md:w-[32rem] w-[37rem] bg-[#EBECE5] py-[2.25rem] pl-[5.44rem] pr-[10rem]">
      {data.map((d) => (
        <SidebarItems key={d.id} name={d.title} />
      ))}
      <div className="bg-[#D6CB6B] md:ml-[17rem] m-auto cursor-pointer mt-[4rem] w-[7.5rem] h-[3.2rem] rounded-[0.625rem] flex justify-center items-center text-[1.5rem] text-white">
        LOG OUT
      </div>
    </div>
  );
}

export default ProfileSidebar;
