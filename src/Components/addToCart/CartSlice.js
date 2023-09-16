import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addcarts: (state, { payload }) => {
      const isThisNewItem = state.carts.find((item) => item._id == payload._id);
      console.log(isThisNewItem);

      if (!isThisNewItem) {
        state.carts.push(payload);
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
  },
});
const { reducer, actions } = cartSlice;
export const { addcarts } = actions;
export default reducer;
