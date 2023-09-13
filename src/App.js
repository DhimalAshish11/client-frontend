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
        <Route path="/guitars/:slug?/:_id?" element={<Guitars />}></Route>
        <Route path="/amps" element={<Amps />}></Route>
        <Route path="/productdetail" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
