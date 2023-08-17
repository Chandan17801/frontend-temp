import React from "react";
import OrderSummary from "@/components/orderSummary/OrderSum";

const ShipAdd = () => {
  return (
    <div className="flex flex-col  mt-10 md:flex-row m-5 p-4">
      <div className=" border-4 md:w-1/2 overflow-hidden ">
        <OrderSummary />
      </div>

      <div className=" text-center border-5-red md:w-1/2 bg-gray-300 p-4 ">
        <div className=" flex text-white ">
          <h1>
            <a href="#">Shipping</a>--------
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShipAdd;
