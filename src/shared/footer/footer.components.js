import React from "react";

import { Link } from "react-router-dom";

import HomeButton from "../../pages/Home/components/button/button.components";

import { Box, Grid, Typography } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { styles } from "./footer.styles";

const usefulLinks = [
  { name: "Home", url: "/" },
  { name: "About us", url: "/about-us" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact-us" },
];

const eventInfoLinks = [
  { name: "Login / Register", url: "/authentication" },
  { name: "All Events", url: "/all-events" },
  { name: "Add Events", url: "/add-new-event" },
];

const lookingForHelpLinks = [
  { name: "FAQs", url: "" },
  { name: "Privacy", url: "" },
  { name: "Terms and COondition", url: "" },
];

const Footer = () => {
  return (
    <Box sx={styles.boxx}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={styles.grid}>
          <Link to={"/"}>
            <img
              src="/images/EventHive.png"
              alt="Event Hive"
              style={{ marginLeft: "-2%" }}
            />
          </Link>
          <Typography variant="body1">
            Whether you want to host a single or multi-events, EventHive is your
            best choice for you.
          </Typography>
          <Typography variant="h6" sx={styles.typography1}>
            DOWNLOAD APP:
          </Typography>
          <Link>
            <img
              src="/images/pengg.png"
              alt="Image 2"
              style={{ marginLeft: "-2%" }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={7} sx={styles.grid1}>
          <div style={{ marginBottom: "3%" }}>
            <Box
              sx={{
                display: "inline-block",
                verticalAlign: "top",
                "@media (min-width: 100px) and (max-width: 900px)": {
                  marginLeft: "3%",
                },
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "4%" }}>
                FOLLOW US:
              </Typography>
              <InstagramIcon sx={{ marginRight: 2 }} />
              <FacebookIcon sx={{ marginRight: 2 }} />
              <TwitterIcon sx={{ marginRight: 2 }} />
              <LinkedInIcon sx={{ marginRight: 2 }} />
              <YouTubeIcon />
            </Box>

            <Box sx={styles.box}>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: "1%",
                }}
              >
                Useful Links
              </Typography>
              {usefulLinks.map((links) => (
                <Link to={links.url} style={{ textDecoration: "none" }}>
                  <Typography variant="h6" sx={styles.typography3}>
                    {links.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </div>

          <hr style={{ border: "1px solid #8A9A5B" }} />

          <Grid container spacing={2} sx={styles.grid2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={styles.typography4}>
                The brand
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  marginBottom: "4%",
                  lineHeight: "23px",
                  fontSize: "15px",
                  paddingRight: "14px",
                }}
              >
                Connecting organizers, attendees, and presenters for
                unforgettable experiences.
              </Typography>
              <HomeButton
                url={"/about-us"}
                text={"About us"}
                boxStyles={{}}
                buttonStyles={styles.buttonStyles}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={styles.typography4}>
                Events Info
              </Typography>
              {eventInfoLinks.map((links) => (
                <Link to={links.url} style={{ textDecoration: "none" }}>
                  <Typography variant="h6" sx={styles.typography5}>
                    {links.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={styles.typography4}>
                Looking For Help
              </Typography>
              {lookingForHelpLinks.map((links) => (
                <Link style={{ textDecoration: "none" }}>
                  <Typography variant="h6" sx={styles.typography5}>
                    {links.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
