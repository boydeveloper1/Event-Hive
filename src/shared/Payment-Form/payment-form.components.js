import React, { useContext, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHttpClient } from "../hooks/http-hook";
import { AuthContext } from "../context/auth-context";
import { CartContext } from "../context/cart-context";
import MyButton from "../Button/button.components";
import ErrorModal from "../Error-Modal/error-modal.components";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";
import Modal from "../Modal/modal.components";

import { styles } from "./payment-form.styles";

const PaymentForm = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentResultError, setPaymentResultError] = useState("");

  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);

  const { sendRequest, isLoading } = useHttpClient();
  const stripe = useStripe();
  const elements = useElements();

  // this fires for the payment intent after the oay button is clicked
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_ASSET_URL + `/create-payment-intent`,
        "POST",
        JSON.stringify({
          amount: cart.cartTotal * 100,
          user: auth.userId,
        }),
        { "Content-Type": "application/json" }
      );

      const clientSecret = responseData.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: auth.name,
          },
        },
      });

      setIsProcessingPayment(false);

      if (paymentResult.error) {
        setPaymentSuccessful(false);
        setPaymentResultError(
          `Hello ${
            auth.name.split(" ")[0]
          }, There appears to be an issue while processing your payment. This could be linked to the card information you provided. Kindly double-check that you have entered the correct test card details.`
        );
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setPaymentSuccessful(true);
          cart.setCartItems([]);

          // when the status of paymentmentsuccessful is true, this fires a post request to the backend and pushes the events bought
          try {
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/events/${auth.userId}`,
              "POST",
              JSON.stringify({
                event: cart.cartItems,
                user: auth.userId,
              }),
              {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.token,
              }
            );
          } catch (error) {}
        }
      }
    } catch (error) {}
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <Container maxWidth="md" sx={styles.container1}>
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h6" gutterBottom>
            Credit Card Payment
          </Typography>
          {!paymentSuccessful && (
            <ErrorModal
              error={paymentResultError}
              onClear={() => {
                setPaymentResultError(null);
              }}
            />
          )}
          <form onSubmit={paymentHandler}>
            <CardElement sx={styles.cardElement} />
            {isProcessingPayment ? (
              <CircularProgress sx={styles.circularProgress} />
            ) : (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={styles.button}
                disabled={
                  !stripe || isProcessingPayment || cart.cartTotal === 0
                }
              >
                {`Pay $${cart.cartTotal}`}
              </Button>
            )}
          </form>
          {paymentSuccessful && (
            <Modal
              show={paymentSuccessful}
              onCancel={() => setPaymentSuccessful(false)}
              header="Payment Successful!"
              footer={
                <MyButton href={`/${auth.userId}/dashboard`}>
                  Dashboard
                </MyButton>
              }
            >
              <Typography>
                Thank you for purchasing the ticket(s). You can view your
                purchased tickets in your Dashboard, under "Purchased Events".
              </Typography>
            </Modal>
          )}
        </Paper>
        <Container maxWidth="sm" sx={styles.container2}>
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="h6" gutterBottom>
              Payment Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={styles.typography}>
                  Stripe instance:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  This Stripe instance is not in live mode, so we will utilize
                  Stripe test cards.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={styles.typography}>
                  Card Number:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">4242 4242 4242 4242</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={styles.typography}>
                  MM/YY:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">0424</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={styles.typography}>
                  CVV:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">424</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={styles.typography}>
                  Zip:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">42424</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Container>
    </>
  );
};

export default PaymentForm;
