import React, { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField } from "@mui/material";

import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { CartContext } from "../../shared/context/cart-context";
import { AuthContext } from "../../shared/context/auth-context";

import { styles } from "./eventdetails.styles";

const EventDetailPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [event, setEvent] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);

  //onClick function to add to cart
  const forwardItemsToCart = () => {
    if (auth.isLoggedIn) {
      return cart.addItemToCart(event, ticketQuantity);
    } else {
      navigate("/authentication");
    }
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/events/${id}`
        );

        setEvent(responseData.event);
      } catch (error) {}
    };
    fetchEvent();
  }, [sendRequest, id]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setTicketQuantity(newQuantity);
  };

  const calculateSubtotal = () => {
    return ticketQuantity * event.price;
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && event && (
        <div>
          <HeroHeader
            src={
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2524&q=80"
            }
            text={event.title}
          />

          <Grid container spacing={4} sx={styles.grid}>
            <Grid item xs={12} sm={8}>
              <Box sx={styles.box1}>
                <Box className="gradient-overlay" sx={styles.box2}></Box>
                <Box sx={styles.box3}>
                  <Typography sx={styles.typography1} variant="h2">
                    {event.title}
                  </Typography>
                  <Typography sx={styles.typography2} variant="h3">
                    Date: {event.date}
                  </Typography>
                  <Typography sx={styles.typography3} variant="h3">
                    Time: {event.startTime} - {event.endTime} (UTC+0)
                  </Typography>
                  <Typography sx={styles.typography4} variant="h3">
                    Venue: {event.address}
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.box4}>
                <img
                  src={event?.image?.url}
                  alt="Event"
                  style={{ width: "100%" }}
                />
                <Typography variant="h2" component="h2" sx={styles.typography5}>
                  About Event
                </Typography>
                <Typography variant="p" component="p" sx={styles.typography6}>
                  {event.description}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={styles.box5}>
                <Typography sx={styles.typography7} variant="h4">
                  More Event Details
                </Typography>
                <Typography sx={styles.typography8} variant="body2">
                  Event Category: {event.category}
                </Typography>
                <Typography sx={styles.typography8} variant="body2">
                  Province: {event.province}
                </Typography>
                <Typography sx={styles.typography8} variant="body2">
                  Start Time: {event.startTime}
                </Typography>
                <Typography sx={styles.typography8} variant="body2">
                  End Time: {event.endTime}
                </Typography>
              </Box>

              <Box sx={styles.box6}>
                <Typography sx={styles.typography9} variant="h4">
                  PURCHASE TICKET
                </Typography>
                <Typography sx={styles.typography10} variant="body2">
                  Price: ${event.price}
                </Typography>
                <Box sx={styles.box7}>
                  <TextField
                    label="Quantity"
                    type="number"
                    value={ticketQuantity}
                    onChange={handleQuantityChange}
                    sx={styles.textfield}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: "20px",
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => setTicketQuantity(+ticketQuantity + 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setTicketQuantity(Math.max(1, ticketQuantity - 1))
                    }
                  >
                    -
                  </Button>
                </Box>
                <Typography variant="body2">
                  Subtotal: ${calculateSubtotal()}
                </Typography>
              </Box>

              <Box sx={styles.box8}>
                <Typography sx={styles.typography11} variant="h5">
                  Total Quantity: {ticketQuantity}
                </Typography>
                <Typography sx={styles.typography12} variant="h5">
                  Total Price: ${calculateSubtotal()}
                </Typography>
                <Button
                  className="add-to-cart"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "green",
                    "&:hover": { backgroundColor: "black" },
                  }}
                  onClick={forwardItemsToCart}
                >
                  ADD TO CART
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default EventDetailPage;
