import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAction } from "./orderAction";
import ClientLayout from "../layout/ClientLayout";

const OrderComplete = () => {
  const dispatch = useDispatch();
  const orderNumBer = localStorage.getItem("orderNumber");
  useEffect(() => {
    dispatch(getOrderAction(orderNumBer));
  }, [dispatch, orderNumBer]);

  const { order } = useSelector((state) => state.orderInfo);
  const { formDt, orderNumber, carts } = order;
  console.log(formDt, orderNumber, carts);

  return (
    <ClientLayout>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">
              Thank You for Your Order!
            </h1>
            <p className="text-gray-600 mb-8">
              Your order has been successfully placed. We appreciate your
              business!
            </p>

            <div className="bg-indigo-100 p-4 rounded-lg text-center mb-6">
              <p className="text-lg font-semibold text-indigo-700 mb-2">
                Order Number:
              </p>
              <p className="text-xl text-indigo-900">{orderNumber}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">Product</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {carts?.map((item, index) => (
                    <tr key={index}>
                      <td className="p-2 border">{item.name}</td>
                      <td className="p-2 border">{item.orderqty}</td>
                      <td className="p-2 border">${item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
};

export default OrderComplete;
