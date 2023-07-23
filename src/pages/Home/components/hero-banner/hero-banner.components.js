import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styles } from "./hero-banner.styles";

const HeroBanner = () => {
  return (
    <Box sx={styles.box}>
      {/* Add your image URL below */}
      <div style={{ position: "relative" }}>
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1521706862577-47b053587f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Banner"
        />
        <Typography
          sx={styles.typography1}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Welcome to Our Website
        </Typography>

        <Typography sx={styles.typography2} variant="body1" gutterBottom>
          Discover amazing products and services!
        </Typography>

        <Button
          sx={styles.button}
          variant="contained"
          size="large"
          color="secondary"
        >
          Get Started
        </Button>
      </div>
    </Box>
  );
};

export default HeroBanner;
