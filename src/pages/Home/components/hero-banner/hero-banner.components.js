import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoubleHeader from "../../../../shared/double-header/double-header.components";
import { styles } from "./hero-banner.styles";

const BackgroundBox = () => (
  <Box
    sx={{
      ...styles.backgroundBox,
      backgroundImage:
        'url("https://images.unsplash.com/photo-1521706862577-47b053587f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
    }}
  />
);

const HeroBanner = () => {
  return (
    <Box sx={styles.container}>
      <BackgroundBox />
      <Box sx={styles.contentBox}>
        <DoubleHeader
          subheading={"Find Your Next Experience"}
          heading={`Discover & Promote Upcoming Event`}
          subHeadingStyles={styles.subHeadingStyles}
          headingStyles={styles.headingStyles}
        />
        <Button
          sx={styles.button}
          variant="contained"
          size="medium"
          color="secondary"
          href={"/all-events"}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
