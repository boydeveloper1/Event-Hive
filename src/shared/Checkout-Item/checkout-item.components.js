import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  const cart = useContext(CartContext);

  const clearItemHandler = () => cart.clearItemFromCart(cartItem);
  const increaseItemHandler = () => cart.addItemToCart(cartItem);
  const decreaseItemHandler = () => cart.removeItemToCart(cartItem);

  return (
    <TableRow>
      <TableCell>
        <img
          src={image.url}
          alt={title}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>
        <IconButton onClick={decreaseItemHandler}>
          <RemoveIcon />
        </IconButton>
        <span
          style={{ fontSize: "18px", fontWeight: "400px", margin: "0 10px" }}
        >
          {quantity}
        </span>
        <IconButton onClick={increaseItemHandler}>
          <AddIcon />
        </IconButton>
      </TableCell>
      <TableCell style={{ fontSize: "18px", fontWeight: "500px" }}>
        ${price}
      </TableCell>
      <TableCell>
        <IconButton onClick={clearItemHandler}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CheckoutItem;
