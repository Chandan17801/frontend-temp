import React from "react";
import SimilarItemsCard from "./SimilarItemsCard";

const data = [
  {
    id: "1",
    title: "Saree......",
    star: 4.9,
    price: "$450.55",
  },
  {
    id: "2",
    title: "Saree......",
    star: 4.8,
    price: "$450.55",
  },
];

function SimilarOptions() {
  return (
    <div className="flex flex-col mb-10">
      <div className="text-2xl my-3 font-semibold text-center">Similar Options</div>
      <div className="flex flex-col justify-center gap-[4rem] items-center">
        {data.map((d) => (
          <SimilarItemsCard key={d.id} val={d} />
        ))}
      </div>
    </div>
  );
}

export default SimilarOptions;
