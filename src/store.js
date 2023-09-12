import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./Components/pages/Category/categories/CategorySlice";
import productReducer from "./Components/product/productSlice";
export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    productInfo: productReducer,
  },
});
