import React from "react";

import { Box, CssBaseline, Typography } from "@mui/material";

import { styles } from "./footer.styles";

const FooterCopyright = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <Typography variant="p" component="p" sx={styles.typography}>
          © 2023. Designed By Adetayo-Chukwudi
        </Typography>
      </Box>
    </>
  );
};

export default FooterCopyright;
