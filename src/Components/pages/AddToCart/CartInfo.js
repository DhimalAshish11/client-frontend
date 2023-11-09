import React from "react";
import ClientLayout from "../../layout/ClientLayout";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import SubTotal from "./SubTotal";

export const CartInfo = () => {
  const { carts } = useSelector((state) => state.cartInfo);

  return (
    <ClientLayout>
      {carts.length === 0 ? (
        <div className="h-[50vh] flex items-center justify-center text-3xl">
          No item Found
        </div>
      ) : (
        <>
          <Cart /> <SubTotal />
        </>
      )}
    </ClientLayout>
  );
};

export default CartInfo;
