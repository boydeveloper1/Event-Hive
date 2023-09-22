import { CardElement } from "@stripe/react-stripe-js";

import MyButton from "../Button/button.components";

import React from "react";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <MyButton>Pay Now</MyButton>
    </div>
  );
};

export default PaymentForm;
