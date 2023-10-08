import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  CssBaseline,
} from "@mui/material";

import Map from "../../shared/Map/map.components";

import HeroHeader from "../../shared/hero-header/hero-header.components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend with the formData
    try {
      const response = await fetch("/your-backend-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle a successful response (e.g., show a success message)
        console.log("Form data sent successfully!");
      } else {
        // Handle an error response (e.g., show an error message)
        console.error("Failed to send form data.");
      }
    } catch (error) {
      console.error("An error occurred while sending the form data:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <HeroHeader text={"Contact Us"} />
      <Container sx={{ marginTop: 4 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "green" }}
        >
          Get in Touch
        </Typography>
        <Grid container spacing={6} sx={{ marginTop: "3px" }}>
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  marginTop: 2,
                  backgroundColor: "green",
                  color: "#fff",
                  "&:hover": { backgroundColor: "green" },
                  transition: "background-color 0.3s",
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: "green" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2, color: "white" }}>
                <strong>Address:</strong>
                <br />
                678 EventHive Street, Wellington Road
                <br />
                London, Ontario, ADE 226
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2, color: "white" }}>
                <strong>Email:</strong>
                <br />
                help@adetayo.net
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2, color: "white" }}>
                <strong>Telephone:</strong>
                <br />
                +1 (226) xxx-xxxx
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundColor: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Map
          center={{ lat: 42.98694800912513, lng: -81.24039290275509 }}
          zoom={15}
          style={{ height: "100%" }}
        />
      </Box>
    </>
  );
};

export default Contact;
