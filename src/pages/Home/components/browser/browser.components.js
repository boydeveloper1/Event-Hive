import React from "react";

import { Link } from "react-router-dom";

import DoubleHeader from "../../../../shared/double-header/double-header.components";
import HomeButton from "../button/button.components";

import {
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";

import { cardData } from "./browser-data";
import { styles } from "./browser.styles";

const BrowseByProvince = ({ events }) => {
  const calculateCategoryCount = (province) => {
    if (events) {
      return events.filter((event) => event.province === province).length;
    }
    return 0;
  };
  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <DoubleHeader
          subheading={"location"}
          heading={"Browse By Province"}
          headingStyles={styles.headingStyles}
          subHeadingStyles={styles.subHeadingStyles}
        />
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/event/province/${card.title}`}
              >
                <Card key={card.id} sx={styles.card}>
                  <CardContent sx={styles.cardContent}>
                    <img
                      src={card.image}
                      alt={`Card ${index + 1}`}
                      style={{ maxWidth: "100%", margin: "-10% -10% 0% -10%" }}
                    />
                    <Typography variant="h6" sx={styles.typography}>
                      {card.title}
                    </Typography>
                    <Button variant="outlined" disabled sx={styles.button}>
                      {calculateCategoryCount(
                        card.title.replace("Events in ", "")
                      )}{" "}
                      events
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <HomeButton
          text={"Want more location?"}
          boxStyles={styles.boxStyles}
          url="/contact-us"
          buttonStyles={styles.buttonStyles}
        />
      </Box>
    </>
  );
};

export default BrowseByProvince;
