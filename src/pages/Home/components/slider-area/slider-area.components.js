import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Typography, Grid } from "@mui/material";
import HomeButton from "../button/button.components";
import DoubleHeader from "../../../../shared/double-header/double-header.components";

import { styles } from "./slider-area.styles";

const data = [
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/11496/11496762.png",
    title: "Health and Wellness",
    events: 5,
    url: "https://adetayo.net/",
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/3220/3220733.png",
    title: "Entertainment",
    events: 5,
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/3050/3050253.png",
    title: "Fashion and Beauty",
    events: 5,
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/3976/3976631.png",
    title: "Education and Training",
    events: 5,
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/3135/3135727.png",
    title: "Business and Strategy",
    events: 5,
  },
  {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/3311/3311579.png",
    title: "Sports and Travel",
    events: 5,
  },
];

const CarouselComponent = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1675073085353-708f8c2ba91d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: "cover",
        margin: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(5, 115, 7, 0.2)",
        },
        // Responsive styles for mobile devices
        "@media (max-width: 600px)": {
          height: "200vh",
          mb: "7%",
        },
        "@media (min-width: 601px) and (max-width: 1200px)": {
          height: "130vh",
        },
      }}
    >
      <DoubleHeader
        heading={"Browse By Category"}
        subheading={"category"}
        subHeadingStyles={{
          fontStyle: "italic",
          color: "#FECB00",
          fontSize: "24px",
          paddingTop: "20px",
        }}
        headingStyles={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
        }}
      />
      <Grid
        container
        spacing={2.5}
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: "10%",
          left: 0,
          width: "100%",
          padding: "5% 9%",
          height: "100%",
          overflow: "hidden",
          padding: "0 20px",
          alignItems: "center",
          "@media (max-width: 600px)": {
            height: "auto", // Allow the height to adjust to content
          },
          // "@media (min-width: 601px) and (max-width: 1200px)": {
          //   height: "auto",
          // },
        }}
      >
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
            <Link style={{ textDecoration: "none" }} to={item.url}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                  width: "100%",
                  marginBottom: "20px",
                  "@media (min-width: 960px)": {
                    // Desktop view
                    paddingTop: "80px",
                    paddingBottom: "80px",
                  },
                }}
              >
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
                <Typography
                  variant="h5"
                  sx={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  {item.title}{" "}
                </Typography>
                <Typography variant="body1">
                  Number of events: {item.events}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
        <Box
          sx={{
            textAlign: "center",
            "@media (max-width: 600px)": {
              mt: "30%",
            },
            "@media (min-width: 601px) and (max-width: 1200px)": {
              mt: "5%",
              mb: "2%",
            },
          }}
        >
          <HomeButton
            buttonStyles={{
              extTransform: "none",
              "& .MuiButton-endIcon": {
                marginLeft: 1,
              },
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
              backgroundColor: "#FECB00",
              border: "double 4px #FECB00",
              color: "black",
              fontSize: "1.2rem",
              padding: "12px 44px",
            }}
            boxStyles={{
              mt: "-50%",
            }}
            text={"About Us"}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default CarouselComponent;
