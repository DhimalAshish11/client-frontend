import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartAction } from "../../addToCart/CartAction";
import { updatecartquantity } from "../../addToCart/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartInfo);

  const handleOnClick = (_id) => {
    dispatch(removeCartAction(_id));
  };

  return (
    <>
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-full bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">{carts.length} items</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-s uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-s uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-s uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-s uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {carts.map((item, i) => (
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                  <div class="w-60">
                    <img
                      src={
                        process.env.REACT_APP_ROOTSERVER +
                        item.thumbnail?.slice(6)
                      }
                      alt={""}
                      clasName="w-1/3 rounded-lg sm:w-40"
                    />
                  </div>
                  <div class="flex flex-col  justify-center ml-4 flex-grow">
                    <span class="font-bold text-md">{item.name}</span>

                    <button
                      class="font-semibold hover:text-red-500 text-gray-500 text-sm"
                      onClick={() => handleOnClick(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">{item.orderqty}</div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${item.price}
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${item.price * item.orderqty}
                </span>
              </div>
            ))}

            <a
              href="/"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
