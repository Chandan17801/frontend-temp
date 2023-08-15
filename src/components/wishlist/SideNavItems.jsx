import React from "react";

function SideNavItems(props) {
  const onClickHandler = (event) => {
    props.onClick(props.id);
  };

  return (
    <div
      className="w-full flex gap-3 cursor-pointer py-2 relative"
      onClick={onClickHandler}
    >
      <div
        className={`w-3 h-[2.625rem] absolute top-0 rounded-e-sm bg-[#FBD409] ${
          props.id != props.sel ? "hidden" : ""
        }`}
      ></div>
      <img
        src={props.image.src}
        className="ml-[3.19rem] w-6 h-[1.5625rem]"
        alt=""
      />
      <div className="font-normal text-lg font-[Podkova] hover:scale-110">{props.title}</div>
    </div>
  );
}

export default SideNavItems;
