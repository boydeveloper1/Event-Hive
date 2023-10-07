import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { styles } from "./404.styles";

const ErrorPage = () => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h1" style={styles.typography}>
        404
      </Typography>
      <Typography variant="h6" style={styles.typography}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button sx={styles.button} variant="contained" href={"/"}>
        Back Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
