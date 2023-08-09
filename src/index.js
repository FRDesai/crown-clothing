import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Shop from "./Pages/shop/Shop";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Auth from "./Pages/auth/auth";
import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/product.context";
import { CartProvider } from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="shop" element={<Shop />} />
              <Route path="auth" element={<Auth />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
