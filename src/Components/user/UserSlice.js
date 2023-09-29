import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userDisplay: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUserDisplay: (state, { payload }) => {
      state.userDisplay = payload;
    },
  },
});
const { reducer, actions } = userSlice;
export const { setUser, setUserDisplay } = actions;
export default reducer;
