import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payments: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayments: (state, { payload }) => {
      state.payments = payload;
    },
  },
});
const { reducer, actions } = paymentSlice;
export const { setPayments } = actions;
export default reducer;
