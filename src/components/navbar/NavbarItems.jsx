import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function NavbarItems(props) {
  const { route } = useRouter();
  const { name, url } = props.val;

  return (
    <Link href={url}>
      <div
        className={`transition-all text-[1.125rem] font-[600] p-[0.5rem] duration-500 ${
          route === url && "activeLink"
        } cursor-pointer`}
      >
        {name}
      </div>
    </Link>
  );
}

export default NavbarItems;
