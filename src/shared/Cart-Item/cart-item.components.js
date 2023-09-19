import React from "react";

import "./cart.item.styles.css";

const CartItem = ({ cartItem }) => {
  const { title, quantity } = cartItem;
  return (
    <div>
      <h2>{title}</h2>
      <h2>{quantity}</h2>
    </div>
  );
};

export default CartItem;
