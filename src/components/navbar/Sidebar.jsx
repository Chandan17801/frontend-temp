import React from "react";

function Sidebar(props) {
  return (
    <aside
      className={`xl:hidden fixed top-0 left-[-40rem] w-[30rem] py-[5rem] h-full z-10 transition-transform bg-white ${props.show && "translate-x-[40rem]"}`}
      onClick={props.onClick}
    >
      {props.children}
    </aside>
  );
}

export default Sidebar;
