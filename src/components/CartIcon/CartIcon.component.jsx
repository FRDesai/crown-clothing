import React, { useContext } from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  console.log("quantity: ", cartItems);

  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const cartToggleHandler = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div onClick={cartToggleHandler} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
