import React from "react";

import { useContext, useRef, useEffect } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../context/cart-context";

import "./cart-icon.styles.css";

const CartIcon = () => {
  const cart = useContext(CartContext);
  const toggleIsCartOpen = () => cart.setIsCartOpen(!cart.isCartOpen);

  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener("click", closeCartOnClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", closeCartOnClickOutside);
    };
  }, []);

  // Reference to the cart icon container
  const cartIconRef = useRef();

  // Function to close the cart when clicking outside of it
  const closeCartOnClickOutside = (e) => {
    const clickedElement = e.target;

    // Check if the clicked element or any of its ancestors have the class "add-to-cart"
    let isAddToCartClicked = false;
    let currentElement = clickedElement;

    while (currentElement) {
      if (currentElement.classList.contains("add-to-cart")) {
        isAddToCartClicked = true;
        break;
      }
      currentElement = currentElement.parentElement;
    }

    // Check if the click is outside the cart icon and not on an "add-to-cart" element
    if (
      !isAddToCartClicked &&
      cartIconRef.current &&
      !cartIconRef.current.contains(clickedElement)
    ) {
      cart.setIsCartOpen(false);
    }
  };

  return (
    <div
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
      ref={cartIconRef}
    >
      <span className="item-count">{cart.cartCount}</span>
      <ShoppingIcon className="shopping-icon" />
    </div>
  );
};
export default CartIcon;
