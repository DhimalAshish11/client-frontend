import React from "react";
import ClientLayout from "../../layout/ClientLayout";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import SubTotal from "./SubTotal";

export const CartInfo = () => {
  return (
    <ClientLayout>
      <Cart />
      <SubTotal />
    </ClientLayout>
  );
};

export default CartInfo;
