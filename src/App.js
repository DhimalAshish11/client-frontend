import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
