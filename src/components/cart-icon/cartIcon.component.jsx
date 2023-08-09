import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const cartToggleHandler = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div onClick={cartToggleHandler} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;