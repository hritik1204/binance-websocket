import { Route, Routes } from "react-router-dom";

import Trade from "./pages/Trade/Trade";
import Earn from "./pages/Earn/Earn";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trade />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}
export default App;
