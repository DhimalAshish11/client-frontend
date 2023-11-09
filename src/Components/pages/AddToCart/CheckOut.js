import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { removeCartAction } from "../../addToCart/CartAction";

const stripePromise = loadStripe(process.env.React_App_Publishable_KEY);

const CheckOut = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartInfo);
  const { payments } = useSelector((state) => state.paymentInfo);

  const [checkedDt, setCheckedDt] = useState("");

  const handleOnChecked = (e) => {
    const { value } = e.target;
    setCheckedDt(value);
  };

  const handleOnClick = (_id) => {
    dispatch(removeCartAction(_id));
  };

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Check Out
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid sm:px-10 lg:grid-cols-2 gap-10 mb-8 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {carts.map((item) => (
              <div
                key={item._id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-30 w-28 rounded-md border object-cover object-center"
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt={item.name}
                  c
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="float-right text-gray-400">
                    Order Quantity {item.orderqty}
                  </span>
                  <p className="text-lg font-bold">
                    ${item.price * item.orderqty}
                  </p>
                </div>

                <button
                  className="font-semibold hover:text-red-500 text-red-500 text-sm mr-7"
                  onClick={() => handleOnClick(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </>
  );
};

export default CheckOut;
