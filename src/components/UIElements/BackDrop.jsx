import React from "react";

function BackDrop(props) {
  return (
    <div
      className="xl:hidden fixed top-0 left-0 w-full h-full z-10 bg-slate-950/60"
      onClick={props.onClick}
    ></div>
  );
}

export default BackDrop;
