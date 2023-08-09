import { createContext, useState } from "react";

//helper function to check whether the Item exists in the cart
const addCartItem = (cartItems, productToAdd) => {
  //find if contains the product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //If found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/new cart Items
  // [{...productToAdd, quantity:1}] meaning all the fields as productToAdd, but also the additional quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  //to explicitly control what it is that we are adding to the cart
  addItemToCart: () => {},
});
/*

actual product
{
  id,
  name
  price,
  imageUrl
}

cart Item
{
  id,
  name,
  price,
  imageUrl,
  quantity,
  whenever we add somwthing to cart items, 
}
*/
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //This function will trigger whenever a user clicks on the button add to cart
  const addItemToCart = (productToAdd) => {
    //based on the variable productToAdd we are going to decide whether it's the new item that is being added, or do we just have to increase the quantity
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
