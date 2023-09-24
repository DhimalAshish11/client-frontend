import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./Components/pages/Category/categories/CategorySlice";
import productReducer from "./Components/product/productSlice";
import cartReducer from "./Components/addToCart/CartSlice";
import paymentReducer from "./Components/payment/PaymentSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const cartPersistConfig = {
  key: "cartInfo",
  storage,
};

const persistCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    productInfo: productReducer,
    paymentInfo: paymentReducer,
    cartInfo: persistCartReducer,
  },
});

const persister = persistStore(store);

export { store, persister };
