import React from "react";
import logo from "../../assets/logo.png";

function Sidebar(props) {
  return (
    <aside
      className={`xl:hidden fixed top-0 left-[-40rem] w-[30rem] py-[3rem] h-full z-10 transition-transform bg-white ${
        props.show && "translate-x-[40rem]"
      }`}
      onClick={props.onClick}
    >
      <img src={logo.src} className="ml-[2rem] w-[20rem]" alt="" />
      {props.children}
    </aside>
  );
}

export default Sidebar;
