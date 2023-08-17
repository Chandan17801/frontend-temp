import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function SideDrawerItem(props) {
  const { route } = useRouter();
  const { name, url } = props.val;

  return (
    <Link href={url}>
      <div
        className={`transition-all text-[2.5rem] font-[600] px-[5rem] py-[3rem] duration-500 ${
          route === url && "activeLink"
        } cursor-pointer`}
      >
        {name}
      </div>
    </Link>
  );
}

export default SideDrawerItem;
