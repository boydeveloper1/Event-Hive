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

const Checkout = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <HeroHeader text={"Checkout"} />
      <Paper
        sx={{
          width: "80%",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "10px",
          mb: "5%",
        }}
      >
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
        <Typography variant="h4" sx={{ marginTop: 3, textAlign: "right" }}>
          Total: ${cart.cartTotal}
        </Typography>
        <PaymentForm />
      </Paper>
    </>
  );
};

export default Checkout;
