import React, { useContext } from "react";

import { Link } from "react-router-dom";

import HomeButton from "../../pages/Home/components/button/button.components";

import { Box, Grid, Typography } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { AuthContext } from "../context/auth-context";

import { styles } from "./footer.styles";

const usefulLinks = [
  { name: "Home", url: "/", id: 1 },
  { name: "About us", url: "/about-us", id: 2 },
  { name: "Blog", url: "/blog", id: 3 },
  { name: "Contact", url: "/contact-us", id: 4 },
];

const eventInfoLinks = [
  { name: "Login / Register", url: "/authentication", id: 1 },
  { name: "All Events", url: "/all-events", id: 2 },
  { name: "Add Events", url: "/add-new-event", id: 3 },
];

const lookingForHelpLinks = [
  { name: "FAQs", url: "", id: 1 },
  { name: "Privacy", url: "", id: 2 },
  { name: "Terms and Conditions", url: "", id: 3 },
];

const Footer = () => {
  const auth = useContext(AuthContext);
  return (
    <Box sx={styles.box1}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={styles.grid} key={1}>
          <Link to={"/"}>
            <img
              src="/images/EventHive.png"
              alt="Event Hive"
              style={{ marginLeft: "-2%" }}
            />
          </Link>
          <Typography variant="body1">
            Whether you want to host a single or multi-events, EventHive is the
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
        <Grid item xs={12} md={7} sx={styles.grid1} key={2}>
          <div style={{ marginBottom: "3%" }}>
            <Box sx={styles.box2}>
              <Typography variant="h6" sx={styles.typography6}>
                FOLLOW US:
              </Typography>
              <InstagramIcon sx={styles.icon} />
              <FacebookIcon sx={styles.icon} />
              <TwitterIcon sx={styles.icon} />
              <LinkedInIcon sx={styles.icon} />
              <YouTubeIcon />
            </Box>

            <Box sx={styles.box3}>
              <Typography variant="h6" sx={styles.typography7}>
                Useful Links
              </Typography>
              {usefulLinks.map((links) => (
                <Link to={links.url} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    sx={styles.typography3}
                    key={links.id}
                  >
                    {links.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </div>

          <hr style={{ border: "1px solid #8A9A5B" }} />

          <Grid container spacing={2} sx={styles.grid2}>
            <Grid item xs={12} md={4} key={3}>
              <Typography variant="h6" sx={styles.typography4}>
                The brand
              </Typography>
              <Typography variant="p" component="p" sx={styles.typography8}>
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
            <Grid item xs={12} md={4} key={4}>
              <Typography variant="h6" sx={styles.typography4}>
                Events Info
              </Typography>
              {eventInfoLinks.map((links) => (
                <Link to={links.url} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    sx={styles.typography5}
                    key={links.id}
                  >
                    {links.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} md={4} key={5}>
              <Typography variant="h6" sx={styles.typography4}>
                Looking For Help
              </Typography>
              {lookingForHelpLinks.map((links) => (
                <Link style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    sx={styles.typography5}
                    key={links.id}
                  >
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
