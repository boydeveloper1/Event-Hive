import React, { useState, useMemo } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
  CssBaseline,
} from "@mui/material";

import Map from "../../shared/Map/map.components";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import Input from "../../shared/Input/input.components";
import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";

// custom hook for server requests
import { useHttpClient } from "../../shared/hooks/http-hook";

// useForm hook for overall form validity
import { useForm } from "../../shared/hooks/form-hooks";

// importing validator
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../utils/validators.js";

import { styles } from "./contact.styles";

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const [errorSending, setErrorSending] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, InputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const contactSubmitHandler = async (event) => {
    event.preventDefault();

    // Send a POST request to your backend with the formData
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/secured/contact",
        "POST",
        JSON.stringify({
          name: formState.input.name.value,
          email: formState.input.email.value,
          message: formState.input.message.value,
        }),
        { "Content-Type": "application/json" }
      );
      setServerResponse(responseData.message);

      if (responseData.message) {
        setMessageStatus(true);
      } else {
        setErrorSending(true);
      }
    } catch (error) {}
  };

  // Wrap the Map component in useMemo
  const MemoizedMap = useMemo(
    () => (
      <Map
        center={{ lat: 42.98694800912513, lng: -81.24039290275509 }}
        zoom={15}
        style={{ height: "100%" }}
      />
    ),
    []
  );

  return (
    <>
      <CssBaseline />
      <HeroHeader text={"Contact Us"} />
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay={true} />}

      <Container sx={styles.container}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={styles.typography1}
        >
          Get in Touch
        </Typography>
        <Grid container spacing={6} sx={styles.grid}>
          <Grid item xs={12} sm={6}>
            <form onSubmit={contactSubmitHandler}>
              <Input
                element="input"
                id="name"
                type="text"
                label="Your Full Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a name"
                onInput={InputHandler}
              />
              <Input
                element="input"
                id="email"
                type="email"
                label="Enter Email Address"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address"
                onInput={InputHandler}
              />
              <Input
                id="message"
                element="textarea"
                label="Talk to me here"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter enough information (at least 5 characters)."
                onInput={InputHandler}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!formState.isValid}
                sx={styles.grid}
              >
                Submit
              </Button>
              {messageStatus && (
                <Typography sx={styles.messageStatus}>
                  {serverResponse}
                </Typography>
              )}
              {errorSending && (
                <Typography sx={styles.errorSending}>
                  There has been an error sending your message
                </Typography>
              )}
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={styles.paper}>
              <Typography variant="h6" sx={styles.typography3}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={styles.typography2}>
                <strong>Address:</strong>
                <br />
                678 EventHive Street, Wellington Road
                <br />
                London, Ontario, ADE 226
              </Typography>
              <Typography variant="body1" sx={styles.typography2}>
                <strong>Email:</strong>
                <br />
                help@adetayo.net
              </Typography>
              <Typography variant="body1" sx={styles.typography2}>
                <strong>Telephone:</strong>
                <br />
                +1 (226) xxx-xxxx
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box sx={styles.box}>{MemoizedMap}</Box>
    </>
  );
};

export default Contact;
