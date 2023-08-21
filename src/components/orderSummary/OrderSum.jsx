import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add_to_cart, reduceFromCart } from "../../../store/features/cart";
import formatToINR from "../../../utils/currencyFormatter";

const Ship = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const incrementSaree = (section) => {
    dispatch(add_to_cart(section.item));
  };

  const decrementSaree = (id) => {
    dispatch(reduceFromCart(id));
  };

  // original code
  console.log(cartData);

  let tax = (subtotal / 100) * 12;
  let total = subtotal + tax;
  // }, [cartData]);

  return (
    <div className="w-full md:w-1/2  ml-4 md:ml-10 mr-4 md:mr-10 mt-10 md:pb-10">
      <div className="flex flex-col md:flex-row">
        <FaArrowLeft className="mr-2" />
        <h2 className="pl-2 md:pl-4">Order Summary</h2>
      </div>
      {cartData &&
        cartData.map((item) => (
          <div className="flex m-6 items-center" key={item._id}>
            <div className="bg-gray-200 h-20 w-20">
              <img
                src={"http://localhost:4001/files/" + item.image}
                alt={item.name}
              />
            </div>
            <div>
              <h2 className="ml-6">{item.name}</h2>
              <div className="ml-4 mt-4 items-center">
                <button
                  className="text-gray-400 bg-gray-200"
                  onClick={() => decrementSaree(item._id)}
                >
                  <FaMinus />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="text-gray-400 bg-gray-200"
                  onClick={() => incrementSaree({ item })}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
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
          <div>{formatToINR(subtotal)}</div>
        </div>
        <hr className="border-t border-black-500 w-full ml-2" />
      </div>
      <div className="ml-4 md:ml-20 mt-6 md:mt-0">
        <div className="flex justify-between p-6">
          <div className="">Sales tax(12%)</div>
          <div>{formatToINR(tax)}</div>
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
          <div className="font-bold text-yellow-500">{formatToINR(total)}</div>
        </div>
      </div>
    </div>
  );
};

export default Ship;
