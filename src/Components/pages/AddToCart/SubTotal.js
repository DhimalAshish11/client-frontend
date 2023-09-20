import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubTotal = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartInfo);
  console.log(carts);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const productTotal = carts.reduce((acc, item) => {
      return acc + item.price * item.orderqty;
    }, 0);

    setTotal(productTotal);
  });

  console.log(total);
  return (
    <div className="total m-10">
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr clasName="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${total + 4.99}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  );
};

export default SubTotal;
