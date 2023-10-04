import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import HomeButton from "../Home/components/button/button.components";

const About = () => {
  return (
    <>
      <HeroHeader text={"about us."} />
      <Box
        sx={{
          textAlign: "left",
          py: "2rem",
          px: "8rem",
          "@media (min-width: 100px) and (max-width: 900px)": {
            px: "0rem",
          },
        }}
      >
        {/* First Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box elevation={3} sx={{ p: "2rem" }}>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", color: "#FECB00", fontSize: "24px" }}
              >
                Welcome
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  lineHeight: "3.9rem",
                  marginBottom: "2%",
                }}
              >
                We Inspire People to Go Out More
              </Typography>
              <Typography variant="p">
                Influential media, entertainment & technology show inspiratio
                speaker cluding game changing not just a large scale confere
                educational hub on digital technologie for business, wher people
                communicate, inspired find.
              </Typography>
              <HomeButton
                url={"/all-evenbts"}
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
                  fontSize: "1.2rem",
                  padding: "10px 25px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ overflow: "hidden" }}>
              <img
                src="/images/about.jpg"
                alt="Square Image"
                style={{ width: "65%", height: "100%" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(250%, 280%)",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661315452408-ab1839e8d468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="Circular Image"
                  style={{ width: "200%", height: "200%", borderRadius: "50%" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Second Section */}
        <Grid
          container
          spacing={2}
          sx={{
            mt: "6rem",
            px: "8rem",
            "@media (min-width: 100px) and (max-width: 900px)": {
              px: "2rem",
              mt: "3rem",
            },
          }}
        >
          {/* Box 1 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: "1.5rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_organizers.png"
                alt="Image 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "40px" }}
                  variant="h5"
                >
                  40k+
                </Typography>
                <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
                  Event Organizers
                </Typography>
              </div>
            </Paper>
          </Grid>
          {/* Box 2 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: "1.5rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_host.png"
                alt="Image 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "40px" }}
                  variant="h5"
                >
                  29k+
                </Typography>
                <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
                  Event Hosted
                </Typography>
              </div>
            </Paper>
          </Grid>
          {/* Box 3 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: "1.5rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/tickets.png"
                alt="Image 1"
                style={{ width: "12%" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "40px" }}
                  variant="h5"
                >
                  11.4m+
                </Typography>
                <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
                  Tickets Sold
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>

        {/* Third Section */}
        <Box
          sx={{
            textAlign: "left",
            py: "2rem",
            px: "8rem",
            "@media (min-width: 100px) and (max-width: 900px)": {
              px: "3rem",
            },
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ marginTop: "3%" }}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1506485927884-1900e37ac5ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                  alt="Square Image"
                  style={{ width: "75%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box elevation={3}>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "#FECB00",
                    fontSize: "24px",
                  }}
                >
                  Organizers
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "3.9rem",
                    marginBottom: "2%",
                  }}
                >
                  Event Organizers
                </Typography>
                <Typography variant="p">
                  Influential media, entertainment & technology show
                  inspirational speaker including game-changing not just a
                  large-scale conference, educational hub on digital technologie
                  for business, wher people communicate, inspired find.
                </Typography>
                <HomeButton
                  url={"/all-evenbts"}
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
                    fontSize: "1.2rem",
                    padding: "10px 25px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Fourth Section */}
        <Box
          sx={{
            mt: "3rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2">Work Plan</Typography>
          <Typography variant="h3">Discover How We Work</Typography>
          <Grid container spacing={2}>
            {/* Box 1 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={{ p: "1.5rem", textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Image 1"
                  style={{ width: "100%" }}
                />
                <Typography variant="h5">Box 1</Typography>
                <Typography variant="subtitle2">Subtitle for Box 1</Typography>
              </Paper>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={{ p: "1.5rem", textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Image 2"
                  style={{ width: "100%" }}
                />
                <Typography variant="h5">Box 2</Typography>
                <Typography variant="subtitle2">Subtitle for Box 2</Typography>
              </Paper>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={{ p: "1.5rem", textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Image 3"
                  style={{ width: "100%" }}
                />
                <Typography variant="h5">Box 3</Typography>
                <Typography variant="subtitle2">Subtitle for Box 3</Typography>
              </Paper>
            </Grid>
            {/* Box 4 */}
            <Grid item xs={12} sm={3}>
              <Paper elevation={3} sx={{ p: "1.5rem", textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="Image 4"
                  style={{ width: "100%" }}
                />
                <Typography variant="h5">Box 4</Typography>
                <Typography variant="subtitle2">Subtitle for Box 4</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Fifth Section */}
        <Box sx={{ mt: "3rem" }}>
          <Box
            elevation={3}
            sx={{
              p: "2rem",
              textAlign: "center",
              width: "100%",
              marginBottom: "-15%",
              zIndex: 1,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
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
