import React from "react";

function SidebarItems(props) {
  return (
    <div className="w-[26rem] border-b-[0.15rem] border-[#676767] h-4rem my-[2rem] flex justify-between cursor-pointer px-[2rem]">
      <div className="text-[#676767] text-[1.5rem] font-[600] mb-2">{props.name}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="35"
        viewBox="0 0 27 35"
        fill="none"
      >
        <g clipPath="url(#clip0_3_89)">
          <path
            d="M8.89875 9.47919L14.0625 16.1584L19.2263 9.47919L20.8125 11.5354L14.0625 20.2854L7.3125 11.5354L8.89875 9.47919Z"
            fill="#969696"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_89">
            <rect width="27" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default SidebarItems;
