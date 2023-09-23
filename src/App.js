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
import CheckOut from "./Components/pages/AddToCart/CheckOut";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getNewProductAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:slug?/:_id?" element={<Guitars />}></Route>

        <Route path="/amps" element={<Amps />}></Route>
        <Route path="/cart/:slug?/:_id?" element={<CartInfo />}></Route>

        <Route path="/product/:slug?/:_id?" element={<ProductDetail />}></Route>
        <Route path="/check-out/" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
