import React from "react";
import { Button, Box } from "@mui/material/";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styles } from "./button.styles";

const HomeButton = ({ text, url, boxStyles, buttonStyles }) => {
  return (
    <Box sx={boxStyles || styles.box}>
      <Button
        sx={buttonStyles || styles.button}
        endIcon={<ArrowForwardIcon />}
        href={url}
      >
        {text}
      </Button>
    </Box>
  );
};

export default HomeButton;
