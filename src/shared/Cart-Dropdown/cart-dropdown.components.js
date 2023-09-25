import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.css";

import { CartContext } from "../context/cart-context";

import HomeButton from "../../pages/Home/components/button/button.components";
import CartItem from "../Cart-Item/cart-item.components";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const letsGoToCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container add-to-cart">
      <div className="cart-items-container">
        <div className="cart-items">
          {cart.cartItems.length ? (
            cart.cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))
          ) : (
            <span className="empty-message">Your Cart is Empty</span>
          )}
        </div>
      </div>
      <HomeButton
        boxStyles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          mt: 1,
        }}
        buttonStyles={{
          textTransform: "none",
          "& .MuiButton-endIcon": {
            marginLeft: 1,
          },
          "&:hover": {
            backgroundColor: "#FFCC02",
            color: "black",
          },
          backgroundColor: "transparent",
          border: "double 4px #FFCC02",
          color: "black",
          fontSize: "0.8rem",
          padding: "9px 18px",
        }}
        text={"Checkout"}
        onClick={letsGoToCheckOut}
      />
    </div>
  );
};

export default CartDropdown;
