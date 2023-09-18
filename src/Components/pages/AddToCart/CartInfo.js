import React from "react";
import ClientLayout from "../../layout/ClientLayout";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import SubTotal from "./SubTotal";

export const CartInfo = () => {
  const { carts } = useSelector((state) => state.cartInfo);
  return (
    <ClientLayout>
      {carts.map((item, i) => (
        <Cart
          name={item.name}
          thumbnail={item.thumbnail}
          price={item.price}
          _id={item._id}
        />
      ))}
      <SubTotal />
    </ClientLayout>
  );
};

export default CartInfo;
