import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartAction } from "../../addToCart/CartAction";
import { updatecartquantity } from "../../addToCart/CartSlice";

const Cart = ({ thumbnail, name, price, _id, orderqty }) => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(removeCartAction({ _id }));
  };

  return (
    <section>
      <div className="h-screen bg-gray-100 pt-20 flex flex-col items-center justify-start">
        <h1 clasName="mb-10 text-center text-xl font-bold ">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between flex-col mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={process.env.REACT_APP_ROOTSERVER + thumbnail?.slice(6)}
                alt={name}
                clasName="w-1/3 rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 clasName="text-lg font-bold text-gray-900">{name}</h2>

                  <p className="text-m p-10">{orderqty}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <p className="text-m p-10">${price * orderqty} </p>
                    <svg
                      onClick={handleOnClick}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub total */}
        </div>
      </div>
    </section>
  );
};

export default Cart;
