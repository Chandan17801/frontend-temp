import React from "react";
import SideNavbar from "@/components/wishlist/SideNavbar";
import Profile from "@/components/profile/Profile";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

function profile() {
  return (
    <div className="w-full flex md:flex-row flex-col">
      <SideNavbar className="xl:block hidden"/>
      <Profile />
      <ProfileSidebar />
    </div>
  );
}

export default profile;
