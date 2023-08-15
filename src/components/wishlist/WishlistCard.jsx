import React, { useState } from "react";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import redheart from "../../assets/sidebar/image 2.png";

function WishlistCard(props) {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked((prev) => !prev);
  };

  let arr = [];
  let i = 0;
  while (i++ < props.star) {
    arr.push({ id: i });
  }

  return (
    <div className="rounded-[0.625rem] xl:w-[44.5256rem] w-96 bg-white flex xl:flex-row items-center justify-center flex-col my-[2.2rem] shadow-xl">
      <div className="xl:w-[45%] flex justify-center items-center">
        <img src={props.img.src} alt={props.title} />
      </div>
      <div>
        <div className="text-[1.375rem] font-semibold mt-[1.75rem]">
          {props.title}
        </div>
        <div className="flex my-1 gap-2">
          {arr.map((data) => (
            <img key={data.id} src={star.src} alt="gvhjbknlm" />
          ))}
          <div className="md:visible hidden">({props.reviews} Reviews)</div>
        </div>
        <div className="mb-5 font-semibold">Description</div>
        <div className="text-[#FF6F07] font-semibold text-[1.125rem]">
          Price: {props.price}
        </div>
        <div className="flex md:flex-row flex-col gap-5 my-3">
          <div className="font-semibold text-[1.125rem]">Color:</div>
          <div className="flex gap-2">
            <div className="border-2 p-1 rounded-full border-[#388613]">
              <div className="h-4 w-4 rounded-full bg-[#388613]"></div>
            </div>
            <div className="border-2 p-1 rounded-full border-[#FF461E]">
              <div className="h-4 w-4 rounded-full bg-[#FF461E]"></div>
            </div>
            <div className="border-2 p-1 rounded-full border-[#1E78FF]">
              <div className="h-4 w-4 rounded-full bg-[#1E78FF]"></div>
            </div>
            <div className="border-2 p-1 rounded-full border-[#8E3785]">
              <div className="h-4 w-4 rounded-full bg-[#8E3785]"></div>
            </div>
          </div>
          <div className="px-2 bg-slate-200 w-20 flex rounded-2xl gap-2 shadow-black shadow-sm">
            <div className=" cursor-pointer shadow-black shadow-sm w-7 h-5 translate-y-1 rounded-full text-center font-bold border-black">
              <div className="-translate-y-1">-</div>
            </div>
            <div>1</div>
            <div className="cursor-pointer shadow-black shadow-sm w-7 h-5 translate-y-1 rounded-full text-center font-bold border-black">
            <div className="-translate-y-1">+</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 my-[2.69rem] font-semibold text-[1.125rem]">
          <div className="cursor-pointer  hover:scale-105 ease-linear" onClick={likeHandler}>
            <img
              src={liked ? redheart.src : heart.src}
              className="h-8"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center rounded-lg hover:scale-105 ease-linear hover:bg-yellow-200 border-yellow-500 border-2 px-2 cursor-pointer">
            Add to Cart
          </div>
          <div className="flex justify-center items-center rounded-lg px-2  hover:scale-105 ease-linear border-yellow-500 border-2 bg-yellow-200 cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
