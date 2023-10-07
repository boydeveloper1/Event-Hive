import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../context/cart-context";

import { styles } from "./cart.item.styles";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const { title, quantity, image, price, id } = cartItem;
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const clearItemHandler = () => cart.clearItemFromCart(cartItem);

  const letsGo = () => {
    navigate(`/event/details/${id}`);
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        src={image.url}
        alt={title}
        sx={styles.cardMedia}
        onClick={letsGo}
      />

      <CardContent sx={styles.cardContent}>
        <div>
          <Typography variant="h6" sx={styles.typography1}>
            {title}
          </Typography>
          <Typography variant="body2" sx={styles.typography2}>
            {quantity} x ${price}
          </Typography>
        </div>
        <IconButton
          className="add-to-cart"
          onClick={clearItemHandler}
          sx={styles.iconButton}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItem;
