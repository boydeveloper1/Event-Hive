import React, { useContext } from "react";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import { CartContext } from "../../shared/context/cart-context";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import CheckoutItem from "../../shared/Checkout-Item/checkout-item.components";
import PaymentForm from "../../shared/Payment-Form/payment-form.components";

import { styles } from "./checkout.styles";

const Checkout = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <HeroHeader text={"Checkout"} />
      <Paper sx={styles.paper}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.cartItems.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h4" sx={styles.typography}>
          Total: ${cart.cartTotal}
        </Typography>
      </Paper>
      <PaymentForm />
    </>
  );
};

export default Checkout;
