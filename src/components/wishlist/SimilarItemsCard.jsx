import React from "react";
import star from "../../assets/star.png";

function SimilarItemsCard(props) {
  return (
    <div className="w-[11.9375rem] relative h-[15.0625rem] p-2 shadow-xl rounded-md">
      <div className="h-[70%] flex justify-center items-center">
        <div className="shadow-2xl h-[70%] w-[50%]"></div>
      </div>
      <div className="font-semibold">{props.val.title}</div>
      <div className="font-light">Price: {props.val.price}</div>
      <div className="flex">
        <img src={star.src} alt="" />
        <div>{props.val.star}</div>
      </div>
      <div className="absolute bottom-2 right-3 font-bold text-3xl rounded-full text-white flex justify-center items-center w-8 cursor-pointer h-7 pb-1 bg-[#e0db5c]">
        +
      </div>
    </div>
  );
}

export default SimilarItemsCard;
