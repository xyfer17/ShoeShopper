import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Cart,
  Checkout,
  Home,
  Login,
  Register,
  ShoeDetails,
  ShoePage,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/buy" element={<Checkout />} />
      <Route path="/product" element={<ShoePage />} />
      <Route path="/product/:id" element={<ShoeDetails />} />
    </Routes>
  );
};

export default Router;
