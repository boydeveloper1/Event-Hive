import React from "react";

import DoubleHeader from "../../../../shared/double-header/double-header.components";

import {
  CssBaseline,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";

import { styles } from "./guest-artist.styles";

import { data } from "./guest-data.js";

const GuestArtist = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <DoubleHeader
          heading={"Popular Attendees"}
          subheading={"guest artists"}
          headingStyles={styles.headingStyles}
          subHeadingStyles={styles.subHeadingStyles}
        />
        <Grid container spacing={1} justifyItems={"center"}>
          {data.map((item, index) => (
            <Grid item key={index} xs={6} sm={6} md={3}>
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  alt={`${item.title} Profile`}
                  height="100"
                  image={item.profileImage}
                  sx={styles.cardMedia}
                />
                <CardContent sx={styles.cardContent}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={styles.typography}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {item.subText}
                  </Typography>
                  <div sx={styles.div}>
                    <IconButton
                      size="small"
                      disabled
                      href={item.social.facebook}
                    >
                      <FacebookIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      size="small"
                      disabled
                      href={item.social.twitter}
                      sx={styles.iconButton}
                    >
                      <TwitterIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      size="small"
                      disabled
                      href={item.social.instagram}
                    >
                      <InstagramIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default GuestArtist;
