import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./hero-header.styles";

const HeroHeader = ({ image, text }) => {
  return (
    <Box sx={styles.box}>
      {/* Add your image URL below */}
      <div style={{ position: "relative" }}>
        <img
          style={styles.image}
          src="https://t4.ftcdn.net/jpg/03/81/25/29/240_F_381252938_XfKEvBc6Z3flOUPN7Q80eHStdmcFSUBq.jpg"
          alt="Banner"
        />
        <Typography
          sx={styles.typography1}
          variant="h3"
          component="h1"
          gutterBottom
        >
          {text}
        </Typography>
      </div>
    </Box>
  );
};

export default HeroHeader;
