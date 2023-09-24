import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  cartItemCount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addcarts: (state, { payload }) => {
      const isThisNewItem = state.carts.find(
        (item) => item._id === payload._id
      );
      console.log(isThisNewItem);

      if (!isThisNewItem) {
        state.carts.push(payload);
        state.cartItemCount += 1;
        return;
      } else {
        const indexOfItemToBeReplaced = state.carts.findIndex(
          (item) => item._id === payload._id
        );

        payload.orderqty += state.carts[indexOfItemToBeReplaced].orderqty;
        console.log(indexOfItemToBeReplaced);

        state.carts.splice(indexOfItemToBeReplaced, 1);
        state.carts.push(payload);
      }
    },

    removecart: (state, { payload }) => {
      const IsItemRemoved = (state.carts = state.carts.filter(
        (item) => item._id !== payload
      ));

      // Find the index of the cart item with the given _id and remove it from the carts array.
      /* const indexOfItemToRemove = state.carts.findIndex(
        (item) => item._id === payload._id
      ); */

      if (IsItemRemoved) {
        state.cartItemCount -= 1;
        if (state.cartItemCount < 0) {
          state.cartItemCount = 0;
        }
      }
    },
    updatecartquantity: (state, { payload }) => {
      const { _id, newQuantity } = payload;

      const cartItem = state.carts.find((item) => item._id === _id);
      console.log(cartItem);
      if (cartItem) {
        // Update the order quantity of the cart item
        cartItem.orderqty = newQuantity;
      }
    },
  },
});
const { reducer, actions } = cartSlice;
export const { addcarts, removecart, updatecartquantity } = actions;
export default reducer;
