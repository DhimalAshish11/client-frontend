import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./Components/pages/Category/categories/CategorySlice";
export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
  },
});
