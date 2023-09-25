import React, { useContext, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useHttpClient } from "../hooks/http-hook";
import { AuthContext } from "../context/auth-context";
import { CartContext } from "../context/cart-context";

import MyButton from "../Button/button.components";
import ErrorModal from "../Error-Modal/error-modal.components";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";

import "./payment-form.styles.css";
import Modal from "../Modal/modal.components";

const PaymentForm = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const auth = useContext(AuthContext);

  const cart = useContext(CartContext);

  const { sendRequest, isLoading, error, clearError } = useHttpClient();
  const stripe = useStripe();
  const elements = useElements();

  //payment handler for sending stripe payment request to backend
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    // send request for payment intent
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_ASSET_URL + `/create-payment-intent`,
        "POST",
        JSON.stringify({ amount: 2000 }),
        { "Content-Type": "application/json" }
      );
      // destructuring the client secret that stripe gives back
      const { client_secret } = responseData.intent;
      console.log(client_secret);

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Adetayo Chukwudi",
          },
        },
      });

      if (paymentResult.error) {
        alert(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setPaymentSuccessful(true);
          // clears cart items after purchase
          cart.setCartItems([]);
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {paymentSuccessful && (
        <Modal
          show={paymentSuccessful}
          onCancel={() => setPaymentSuccessful(false)} // Add onCancel to close the modal
          header={"Payment Successful!"}
          footer={
            <MyButton href={`/${auth.userId}/dashboard`}>Dashboard</MyButton>
          }
        >
          <p>
            Thank you for purchasing the ticket(s). You can view your purchased
            tickets in your Dashboard, under "Bought Events"
          </p>
        </Modal>
      )}
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="paymentContainer">
        <form className="formContainer" onSubmit={paymentHandler}>
          <h2>Credit Card Payment: </h2>
          <CardElement />
          <MyButton>Pay Now</MyButton>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
