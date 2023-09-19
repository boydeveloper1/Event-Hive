import React, { useContext } from "react";

import "./cart-dropdown.styles.css";

import { CartContext } from "../context/cart-context";

import HomeButton from "../../pages/Home/components/button/button.components";
import CartItem from "../Cart-Item/cart-item.components";

const CartDropdown = () => {
  const cart = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.cartItems.length ? (
          cart.cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <HomeButton
        boxStyles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          mt: 2,
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
          fontSize: "1rem",
          padding: "12px 44px",
        }}
        text={"Checkout"}
        url={"/authentication"}
      />
    </div>
  );
};

export default CartDropdown;
