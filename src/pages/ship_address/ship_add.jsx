import React from "react";
import OrderSummary from "@/components/orderSummary/OrderSum";

const ShipAdd = () => {
  return (
    <div className="flex flex-col  mt-10 md:flex-row m-5 p-4">
      <div className=" border-4 md:w-1/2 overflow-hidden ">
        <OrderSummary />
      </div>

      <div className=" border-5-red md:w-1/2 bg-gray-300 p-4 ">
        <h1 className="text-white">hi shipping</h1>
      </div>
    </div>
  );
};

export default ShipAdd;
