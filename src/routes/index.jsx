import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop/shop";
import Cart from "../pages/cart/cart";
import Home from "../pages/Home";
import Product from "../pages/Product1/Product-laptop";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default RoutesMap;
