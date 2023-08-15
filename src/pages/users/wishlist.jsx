import React from "react";
import SideNavbar from "@/components/wishlist/SideNavbar";
import Wishlist from "@/components/wishlist/Wishlist";
import SimilarOptions from "@/components/wishlist/SimilarOptions";

function wishlist() {
  return (
    <div className="w-full flex xl:flex-row flex-col">
      <SideNavbar />
      <Wishlist />
      <SimilarOptions />
    </div>
  );
}

export default wishlist;
