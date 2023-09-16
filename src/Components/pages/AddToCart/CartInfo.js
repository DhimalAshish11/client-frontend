import React from "react";
import ClientLayout from "../../layout/ClientLayout";
import Cart from "./Cart";
import { useSelector } from "react-redux";

export const CartInfo = () => {
  const { carts } = useSelector((state) => state.cartInfo);
  return (
    <ClientLayout>
      {carts.map((item, i) => (
        <Cart name={item.name} thumbnail={item.thumbnail} price={item.price} />
      ))}
    </ClientLayout>
  );
};

export default CartInfo;
