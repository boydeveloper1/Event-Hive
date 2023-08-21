import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Typography, Grid } from "@mui/material";
import HomeButton from "../button/button.components";
import DoubleHeader from "../../../../shared/double-header/double-header.components";

import { styles } from "./slider-area.styles";

import { data } from "./slider-data";

const CarouselComponent = () => {
  return (
    <Box sx={styles.box}>
      <DoubleHeader
        heading={"Browse By Category"}
        subheading={"category"}
        subHeadingStyles={styles.subHeadingStyles}
        headingStyles={styles.headingStyles}
      />
      <Grid container spacing={3} justifyContent="center" sx={styles.grid}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Link style={{ textDecoration: "none" }} to={item.url}>
              <Card sx={styles.card}>
                <img
                  src={item.imageUrl}
                  alt={`Card ${index + 1}`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h5" sx={styles.typography}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={styles.events}>
                  Number of events: {item.events}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <HomeButton
        buttonStyles={styles.buttonStyles}
        boxStyles={styles.boxStyles}
        text={"About Us"}
      />
    </Box>
  );
};

export default CarouselComponent;
