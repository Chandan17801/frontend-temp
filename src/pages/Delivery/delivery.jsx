import React from "react";
import Link from "next/link";
import OrderSummary from "@/components/orderSummary/OrderSum";

const Delivery = () => {
  return (
    <div className="flex flex-col m-15   md:flex-row m-5 p-4">
      <div className=" border-4 md:w-1/2 overflow-hidden ">
        <OrderSummary />
      </div>

      <div className="p-10 border-5-red md:w-1/2 bg-gray-300 p-4 ">
        <div>
          <h1>Delivery</h1>
        </div>
        <div className="flex text-white justify-end">
          <div className="bg-white m-10 p-8 text-black w-full">
            <div className="text-gray-700 font-bold mb-2">
              <h1>Delivery Options</h1>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="address2"
                name="shipping-address"
                className="mr-2"
              />
              <label htmlFor="address2">Standard 5-7 Business Days</label>
              <p className="ml-auto text-green-500">FREE</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <Link href="/ship_address/ship_add">
              <button className="bg-white border border-yellow-600 text-yellow-600 px-4 py-2 rounded">
                Back
              </button>
            </Link>
          </div>
          <div>
            <Link href="/Payment/payment">
              <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
