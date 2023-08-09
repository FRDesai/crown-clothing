import React, { useContext } from "react";
import "./CartDropdown.styles.scss";
import Button from "../Button/Button";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
