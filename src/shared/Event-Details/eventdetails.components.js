import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Box, Button, TextField } from "@mui/material";

import ErrorModal from "../Error-Modal/error-modal.components";
import LoadingSpinner from "../Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../shared/hooks/http-hook";
import HeroHeader from "../hero-header/hero-header.components";

const EventDetailPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [event, setEvent] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);

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
    const newQuantity = e.target.value;
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

          <Grid
            container
            spacing={4}
            sx={{
              width: "90%",
              margin: "0 auto",
              marginBottom: "7%",
            }}
          >
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  p: 2,
                  backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  height: "20%",
                  color: "white",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  className="gradient-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(to bottom, transparent, black)",
                    opacity: 0.9,
                    margin: "auto",
                    pointerEvents: "none",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    // backgroundColor: "white",
                    padding: "2% 3.5%",
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      paddingBottom: "1.5%",
                    }}
                    variant="h2"
                  >
                    {event.title}
                  </Typography>
                  <Typography sx={{ fontSize: "17px" }} variant="h3">
                    Date: {event.date}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "17px", padding: "3px 0" }}
                    variant="h3"
                  >
                    Time: {event.startTime} - {event.endTime} (UTC+0)
                  </Typography>
                  <Typography sx={{ fontSize: "17px" }} variant="h3">
                    Venue: {event.address}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <img
                  src={event?.image?.url}
                  alt="Event"
                  style={{ width: "100%" }}
                />
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ mt: 2, fontSize: "45px" }}
                >
                  About Event
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: 2 }}>
                  {event.description}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{ p: 2, backgroundColor: "#FFCC02", marginBottom: "2%" }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  variant="h4"
                >
                  More Event Details
                </Typography>
                <Typography sx={{ fontSize: "15px" }} variant="body2">
                  Event Category: {event.category}
                </Typography>
                <Typography sx={{ fontSize: "15px" }} variant="body2">
                  Province: {event.province}
                </Typography>
                <Typography sx={{ fontSize: "15px" }} variant="body2">
                  Start Time: {event.startTime}
                </Typography>
                <Typography sx={{ fontSize: "15px" }} variant="body2">
                  End Time: {event.endTime}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#FFCC02",
                  marginBottom: "2%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  variant="h4"
                >
                  PURCHASE TICKET
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  variant="body2"
                >
                  Price: ${event.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <TextField
                    label="Quantity"
                    type="number"
                    value={ticketQuantity}
                    onChange={handleQuantityChange}
                    sx={{
                      width: "60px",
                      mr: 2,
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: "20px",
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => setTicketQuantity(ticketQuantity + 1)}
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
              {/* Total Quantity and Total Price */}
              <Box sx={{ p: 2, backgroundColor: "#FFCC02" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  variant="h5"
                >
                  Total Quantity: {ticketQuantity}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  variant="h5"
                >
                  Total Price: ${calculateSubtotal()}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  BUY TICKET
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
