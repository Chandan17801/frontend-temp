import React, { useState } from "react";
import { FaMinus, FaPlus, FaArrowLeft } from "react-icons/fa";

const Ship = () => {
  const [sareeCount1, setSareeCount1] = useState(0);
  const [sareeCount2, setSareeCount2] = useState(0);

  const incrementSaree = (section) => {
    if (section === 1) {
      setSareeCount1(sareeCount1 + 1);
    } else if (section === 2) {
      setSareeCount2(sareeCount2 + 1);
    }
  };

  const decrementSaree = (section) => {
    if (section === 1 && sareeCount1 > 0) {
      setSareeCount1(sareeCount1 - 1);
    } else if (section === 2 && sareeCount2 > 0) {
      setSareeCount2(sareeCount2 - 1);
    }
  };

  return (
    <div className="w-full md:w-1/2  ml-4 md:ml-10 mr-4 md:mr-10 mt-10 md:pb-10">
      <div className="flex flex-col md:flex-row">
        <FaArrowLeft className="mr-2" />
        <h2 className="pl-2 md:pl-4">Order Summary</h2>
      </div>
      <div className="flex m-6 items-center">
        <div className="bg-gray-200 h-20 w-20"></div>
        <div>
          <h2 className="ml-6">Saree</h2>
          <div className="ml-4 mt-4 items-center">
            <button
              className="text-gray-400 bg-gray-200"
              onClick={() => decrementSaree(1)}
            >
              <FaMinus />
            </button>
            <span className="mx-2">{sareeCount1}</span>
            <button
              className="text-gray-400 bg-gray-200"
              onClick={() => incrementSaree(1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="flex m-6 items-center">
        <div className="bg-gray-200 h-20 w-20"></div>
        <div>
          <h2 className="ml-6">Saree</h2>
          <div className="ml-4 mt-4 items-center">
            <button
              className="text-gray-400 bg-gray-200"
              onClick={() => decrementSaree(2)}
            >
              <FaMinus />
            </button>
            <span className="mx-2">{sareeCount2}</span>
            <button
              className="text-gray-400 bg-gray-200"
              onClick={() => incrementSaree(2)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className=" md:ml-2 md:ml-15 items-center mt-6 md:mt-0">
        <div className="flex justify-between p-6">
          <p className=" md:mb-0 ">Gift Card/Discount Code</p>
          <a href="#" className="text-yellow-500  justify-between">
            Apply
          </a>
        </div>
      </div>
      <hr className="border-t border-yellow-500 w-full ml-2" />

      <div className="ml-4 md:ml-20 mt-6 md:mt-0">
        <div className="flex justify-between p-6">
          <div className="">Subtotal</div>
          <div>12,000.00</div>
        </div>
        <hr className="border-t border-black-500 w-full ml-2" />
      </div>
      <div className="ml-4 md:ml-20 mt-6 md:mt-0">
        <div className="flex justify-between p-6">
          <div className="">Sales tax(6.5%)</div>
          <div>40.23</div>
        </div>
        <hr className="border-t border-black-500 w-full ml-2" />
      </div>
      <div className="ml-4 md:ml-20 mt-6 md:mt-0">
        <div className="flex justify-between p-6">
          <div className="">Shipping Free</div>
          <div className="text-green-500">FREE</div>
        </div>
        <hr className="border-t border-black-500 w-full ml-2" />
      </div>
      <div className="bg-gray-700 border-4  ml-4 md:ml-20 mt-6 md:mt-0">
        <div className=" flex justify-between p-6">
          <div className="font-bold text-yellow-500">Total </div>
          <div className="font-bold text-yellow-500">12,130.23</div>
        </div>
      </div>
    </div>
  );
};

export default Ship;
