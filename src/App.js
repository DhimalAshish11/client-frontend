import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/pages/Home/Home";
import Guitars from "./Components/pages/Category/Guitars/Guitars";
import Amps from "./Components/pages/Category/Amps/Amps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoryAction } from "./Components/category/CatAction";
import { getNewProductAction } from "./Components/product/productAction";
import ProductDetail from "./Components/product/ProductDetail";
import CartInfo from "./Components/pages/AddToCart/CartInfo";

import { getPaymentAction } from "./Components/payment/PaymentAction";
import OrderSummary from "./Components/pages/AddToCart/OrderSummary";
import UserLogin from "./Components/user/UserLogin";
import SignUp from "./Components/user/SignUp";
import UserVerification from "./Components/user/UserVerification";
import { ToastContainer } from "react-toastify";
import Contact from "./Components/pages/Contact/Contact";
import ResetPassword from "./Components/user/ResetPassword";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getNewProductAction());
    dispatch(getPaymentAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-verification" element={<UserVerification />} />
        <Route path="/password-reset" element={<ResetPassword />} />

        <Route path="/category/:slug?/:_id?" element={<Guitars />}></Route>

        <Route path="/amps" element={<Amps />}></Route>
        <Route path="/cart/:slug?/:_id?" element={<CartInfo />}></Route>

        <Route path="/product/:slug?/:_id?" element={<ProductDetail />}></Route>
        <Route path="/order-summary/" element={<OrderSummary />}></Route>
        <Route path="/user-login/" element={<UserLogin />}></Route>
        <Route path="/sign-up/" element={<SignUp />}></Route>
        <Route path="/contact/" element={<Contact />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
