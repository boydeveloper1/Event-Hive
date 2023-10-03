import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroHeader from "../../shared/hero-header/hero-header.components";

const About = () => {
  return (
    <>
      <HeroHeader text={"about us."} />
      <div>
        {/* First Section */}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3">About Us</Typography>
            <Typography variant="subtitle1">
              Some introductory paragraphs about our company and mission.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
          <Box sx={{ flex: 1 }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="/path/to/square-image.jpg"
                  alt="Square Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <img
                    src="/path/to/circular-image.jpg"
                    alt="Circular Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Box>

        {/* Second Section */}
        <Box sx={{ display: "flex" }}>
          {/* Box 1 */}
          <Box sx={{ flex: 1 }}>
            <img src="/path/to/image1.jpg" alt="Image 1" />
            <Typography variant="h5">Box 1</Typography>
            <Typography variant="subtitle2">Subtitle for Box 1</Typography>
          </Box>
          {/* Box 2 */}
          <Box sx={{ flex: 1 }}>
            <img src="/path/to/image2.jpg" alt="Image 2" />
            <Typography variant="h5">Box 2</Typography>
            <Typography variant="subtitle2">Subtitle for Box 2</Typography>
          </Box>
          {/* Box 3 */}
          <Box sx={{ flex: 1 }}>
            <img src="/path/to/image3.jpg" alt="Image 3" />
            <Typography variant="h5">Box 3</Typography>
            <Typography variant="subtitle2">Subtitle for Box 3</Typography>
          </Box>
        </Box>

        {/* Third Section */}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <img src="/path/to/image.jpg" alt="Image" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3">About Us</Typography>
            <Typography variant="subtitle1">
              Some introductory paragraphs about our company and mission.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Fourth Section */}
        <Box>
          <Typography variant="subtitle2">Subtitle Text</Typography>
          <Typography variant="h3">Heading Text</Typography>
          <Box sx={{ display: "flex" }}>
            {/* Box 1 */}
            <Box sx={{ flex: 1 }}>
              <img src="/path/to/image1.jpg" alt="Image 1" />
              <Typography variant="h5">Box 1</Typography>
              <Typography variant="subtitle2">Subtitle for Box 1</Typography>
            </Box>
            {/* Box 2 */}
            <Box sx={{ flex: 1 }}>
              <img src="/path/to/image2.jpg" alt="Image 2" />
              <Typography variant="h5">Box 2</Typography>
              <Typography variant="subtitle2">Subtitle for Box 2</Typography>
            </Box>
            {/* Box 3 */}
            <Box sx={{ flex: 1 }}>
              <img src="/path/to/image3.jpg" alt="Image 3" />
              <Typography variant="h5">Box 3</Typography>
              <Typography variant="subtitle2">Subtitle for Box 3</Typography>
            </Box>
            {/* Box 4 */}
            <Box sx={{ flex: 1 }}>
              <img src="/path/to/image4.jpg" alt="Image 4" />
              <Typography variant="h5">Box 4</Typography>
              <Typography variant="subtitle2">Subtitle for Box 4</Typography>
            </Box>
          </Box>
        </Box>

        {/* Fifth Section */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <img
            src="/path/to/rectangular-image.jpg"
            alt="Rectangular Image"
            style={{ width: "60%" }}
          />
        </Box>
      </div>
    </>
  );
};

export default About;
