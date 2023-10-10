import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DoubleHeader from "../../../../shared/double-header/double-header.components";
import { styles } from "./hero-banner.styles";

const HeroBanner = () => {
  return (
    <Box sx={styles.box}>
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1521706862577-47b053587f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Banner"
        />
        <Box sx={styles.boxStyles}>
          <DoubleHeader
            subheading={"Find Your Next Experience"}
            heading={`Discover & Promote Upcoming Event`}
            subHeadingStyles={styles.subHeadingStyles}
            headingStyles={styles.headingStyles}
          />
          <Button
            sx={styles.button}
            variant="contained"
            size="large"
            color="secondary"
            href={"/all-events"}
          >
            Get Started
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default HeroBanner;
