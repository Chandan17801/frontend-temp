import React from "react";
import WishlistCard from "./WishlistCard";

import lady1 from "../../assets/wishlist/8b188fcddee137d4b159753236fdd370 1.png";
import lady2 from "../../assets/wishlist/yellow-georgette-lehenga-saree-wj802034-711x1280 1.png";

const wishlist = [
  {
    id: "1",
    img: lady1,
    title: "Saree......",
    star: 5,
    reviews: "200+",
    price: "$450.55",
    color: [
      { id: "c1", col: "#388613" },
      { id: "c2", col: "#FF461E" },
      { id: "c3", col: "#1E78FF" },
      { id: "c4", col: "#8E3785" },
    ],
  },
  {
    id: "2",
    img: lady2,
    title: "Saree......",
    star: 5,
    reviews: "200+",
    price: "$450.55",
    color: [
      { id: "c1", col: "#388613" },
      { id: "c2", col: "#FFE81E" },
      { id: "c3", col: "#1E78FF" },
      { id: "c4", col: "#8E3785" },
    ],
  },
];

function Wishlist() {
  return (
    <div className="px-[6.19rem] mb-10">
      <div className="text-3xl font-bold mb-4">Wishlist</div>
      <div className="">
        {wishlist.map((data) => (
          <WishlistCard
            key={data.id}
            img={data.img}
            title={data.title}
            star={data.star}
            reviews={data.reviews}
            price={data.price}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
