import React from "react";
import Link from "next/link";

import OrderSummary from "@/components/orderSummary/OrderSum";

const ShipAdd = () => {
  return (
    <div className="flex flex-col m-15   md:flex-row m-5 p-4">
      <div className=" border-4 md:w-1/2 overflow-hidden ">
        <OrderSummary />
      </div>

      <div className="p-10 border-5-red md:w-1/2 bg-gray-300 p-4 ">
        <div>
          <h1>Shipping</h1>
        </div>
        <div className=" flex text-white ">
          <div className="bg-white m-10 p-4 text-black w-full">
            <div className="text-gray-700 font-bold mb-2">
              <h1>Contact Details</h1>
            </div>

            <form action="">
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="first-name"
                    className="block text-black-700  mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="last-name"
                    className="block text-black-700  mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black-700  mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 ">
                <label
                  htmlFor="phone-number"
                  className="block text-black-700  mb-2"
                >
                  Phone Number
                </label>
              </div>
              <div className="flex mb-4">
                <div className="w-1/4 pr-2">
                  <select
                    id="country-code"
                    name="country-code"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    {/* Add more country code options */}
                  </select>
                </div>
                <div className="w-3/4 pl-2">
                  <input
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white m-10 p-4 text-black ">
          <div className="text-gray-700 font-bold mb-2">
            <h1>Shipping Details</h1>
            <h2 className="text-yellow-500">Address 1</h2>
            <p></p>
            <div className="flex justify-between items-center">
              <p></p>
              <div className="flex items-center">
                <label htmlFor="address1">
                  Street2, The Mall, station Road. Malad(West) <br /> City:
                  Mumbai <br />
                  State:Marharstra <br /> Phone number: 00023212312 <br /> Zip
                  Code: 40041 <br />
                  Country calling code +91 Country India
                </label>{" "}
                <input type="radio" id="address1" name="shipping-address" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 font-bold mb-2">
            <h2 className="text-yellow-500">Address 2</h2>
            <p></p>
            <div className="flex justify-between items-center">
              <p></p>
              <div className="flex items-center">
                <label htmlFor="address2">
                  Street2, The Mall, station Road. Malad(West) <br /> City:
                  Mumbai <br />
                  State:Marharstra <br /> Phone number: 00023212312 <br /> Zip
                  Code: 40041 <br />
                  Country calling code +91 Country India
                </label>{" "}
                <input type="radio" id="address2" name="shipping-address" />
              </div>
            </div>
          </div>
          <h2 className="text-yellow-500 font-bold">Add Another address</h2>
          <br />
          <div className="mt-15">
            <input type="checkbox" name="billing-address" />
            <label htmlFor="">
              My Shipping and billing address is the same
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href="/Delivery/delivery">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipAdd;
