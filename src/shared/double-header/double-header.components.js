import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styles } from "./double-header.styles";

const DoubleHeader = ({
  subheading,
  heading,
  subHeadingStyles,
  headingStyles,
}) => {
  return (
    <Box textAlign="center" sx={{ position: "relative", zIndex: 2 }}>
      <Typography
        variant="h6"
        component="h2"
        sx={subHeadingStyles || styles.subHeading}
      >
        {subheading}
      </Typography>
      <Typography
        variant="h4"
        component="h1"
        sx={headingStyles || styles.heading}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default DoubleHeader;