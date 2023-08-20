import React from "react";
import Link from "next/link";
import OrderSummary from "@/components/orderSummary/OrderSum";

const payment = () => {
  return (
    <div className="flex flex-col m-15   md:flex-row m-5 p-4">
      <div className=" border-4 md:w-1/2 overflow-hidden ">
        <OrderSummary />
      </div>
      <div className="p-10 border-5-red md:w-1/2 bg-gray-300">
        <div>
          <h1>Payment</h1>
        </div>
        <div className="flex text-white justify-end">
          <div className="bg-white m-10 p-8 text-black w-full">
            <div className="text-gray-700 font-bold mb-2">
              <h1>Payment Methods</h1>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <input
                  type="radio"
                  id="cash"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="cash">Pay on Delivery</label>
                <p className="mt-1">Pay with cash on delivery</p>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="credit"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="credit">Credit/Debit cards</label>
                <p className="mt-1">Pay with Credit/Debit Cards</p>

                <div className=" mt-1">
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Card Number"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      id="cardValidity"
                      name="cardValidity"
                      placeholder="MM/YY"
                      className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                    <span className="ml-2"></span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                      className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                    <span className="ml-2"></span>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  id="bank"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="bank">Direct Bank Transfer</label>
                <p className="mt-1">
                  Make payment directly through bank account
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <Link href="/Delivery/delivery">
              <button className="bg-white border border-yellow-600 text-yellow-600 px-4 py-2 rounded">
                Back
              </button>
            </Link>
          </div>
          <div>
            <Link href="/Payment/payment">
              <button className="bg-yellow-600 text-white rounded pl-8 pr-8 pt-3 pb-3">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
