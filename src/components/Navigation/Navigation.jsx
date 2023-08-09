import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../cart-icon/cartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.components";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const { isCartOpen } = useContext(CartContext);

 
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign-out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-In
            </Link>
          )}
          <CartIcon />
        </div>
        {
          //short circuit operator
          isCartOpen && <CartDropdown />
        }
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
