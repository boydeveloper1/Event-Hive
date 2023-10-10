import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import HomeButton from "../Home/components/button/button.components";

import { styles } from "./about.styles";

const About = () => {
  return (
    <>
      <HeroHeader text={"about us."} />
      <Box sx={styles.box1}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box elevation={3} sx={styles.box2}>
              <Typography variant="body1" sx={styles.typography1}>
                Welcome
              </Typography>
              <Typography variant="h2" sx={styles.typography2}>
                We Inspire People to Go Out More
              </Typography>
              <Typography variant="p">
                At EventHive, we're dedicated to rekindling your love for
                experiencing new things. Our platform is designed to inspire you
                to break free from routines, discover exciting events, and
                connect with people who share your interests. Join us in the
                pursuit of a more adventurous and fulfilling life!
              </Typography>
              <HomeButton
                url={"/all-events"}
                text={"SEE ALL EVENT"}
                boxStyles={{ mt: "30px" }}
                buttonStyles={{
                  textTransform: "none",
                  "& .MuiButton-endIcon": {
                    marginLeft: 1,
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#009B4D",
                  },
                  backgroundColor: "#009B4D",
                  border: "double 4px #009B4D",
                  color: "white",
                  fontSize: "1rem",
                  padding: "9px 25px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={styles.box3}>
              <img
                src="/images/about.jpg"
                alt="Square"
                style={{ width: "65%", height: "100%" }}
              />
              <Box sx={styles.box4}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661315452408-ab1839e8d468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="Circular "
                  style={{ width: "200%", height: "200%", borderRadius: "50%" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={styles.grid1}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={styles.paper1}>
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_organizers.png"
                alt="Image 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography sx={styles.typography3} variant="h5">
                  40k+
                </Typography>
                <Typography sx={styles.typography4} variant="subtitle2">
                  Event Organizers
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={styles.paper1}>
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_host.png"
                alt=" 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography sx={styles.typography3} variant="h5">
                  29k+
                </Typography>
                <Typography sx={styles.typography4} variant="subtitle2">
                  Event Hosted
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={styles.paper1}>
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/tickets.png"
                alt=" 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography sx={styles.typography3} variant="h5">
                  11.4m+
                </Typography>
                <Typography sx={styles.typography4} variant="subtitle2">
                  Tickets Sold
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={styles.box5}>
          <Grid container spacing={2} alignItems="center" sx={styles.grid2}>
            <Grid item xs={12} md={6}>
              <Box sx={styles.box6}>
                <img
                  src="https://images.unsplash.com/photo-1506485927884-1900e37ac5ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                  alt="Square "
                  style={{ width: "75%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box elevation={3}>
                <Typography variant="body1" sx={styles.typography1}>
                  Organizers
                </Typography>
                <Typography variant="h2" sx={styles.typography6}>
                  Event Organizers
                </Typography>
                <Typography variant="p">
                  Your Partner in Success! At EventHive, we empower event
                  organizers to create memorable experiences. Connect with us
                  today to explore how our platform can elevate your events and
                  simplify your planning process. Let's make every event
                  exceptional!"
                </Typography>
                <HomeButton
                  url={"/contact-us"}
                  text={"CONTACT US"}
                  boxStyles={{ mt: "30px" }}
                  buttonStyles={{
                    textTransform: "none",
                    "& .MuiButton-endIcon": {
                      marginLeft: 1,
                    },
                    "&:hover": {
                      backgroundColor: "#009B4D",
                      color: "white",
                    },
                    backgroundColor: "transparent",
                    border: "double 4px #009B4D",
                    color: "#009B4D",
                    fontSize: "1rem",
                    padding: "9px 25px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={styles.box7}>
          <Typography variant="body1" sx={styles.typography1}>
            Work Plan
          </Typography>
          <Typography variant="h2" sx={styles.typography7}>
            Discover How We Work
          </Typography>
          <Grid container spacing={5}>
            {/* Box 1 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/sign-up-2887083-2396452.png?f=webp&w=512"
                  alt=" 1"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Sign up
                </Typography>
                <Typography variant="subtitle2">
                  Create an account to enjoy all features of this application.
                </Typography>
              </Paper>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-add-event-8-1131249.png?f=webp&w=512"
                  alt="Image 2"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Add your Event
                </Typography>
                <Typography variant="subtitle2">
                  Add an event to start monetizing immediately.
                </Typography>
              </Paper>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/modify-4114221-3416168.png?f=webp&w=512"
                  alt="Image 3"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Modify Event
                </Typography>
                <Typography variant="subtitle2">
                  Wrong details on your event? Edit at ease.
                </Typography>
              </Paper>
            </Grid>
            {/* Box 4 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={styles.paper2}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/purchase-19-1072417.png?f=webp&w=512"
                  alt="Image 4"
                  style={{ width: "30%" }}
                />
                <Typography sx={styles.typography8} variant="h5">
                  Purchase Ticket
                </Typography>
                <Typography variant="subtitle2">
                  Surf our hot catalogue of events and make a purchase.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={styles.box8}>
          <Box elevation={3} sx={styles.box9}>
            <img
              src="/images/eventus.jpg"
              alt="Rectangular Image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
