import React from "react";

import { Box, CssBaseline, Typography } from "@mui/material";

const FooterCopyright = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#98791D",
          alignItems: "center",
          textAlign: "center",
          padding: "1% 10% 1%",
          verticalAlign: "center",
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            color: "white",
            "@media (min-width: 100px) and (max-width: 900px)": {
              fontSize: "12px",
            },
          }}
        >
          © 2023. Designed By Adetayo-Chukwudi. All rights reserved
        </Typography>
      </Box>
    </>
  );
};

export default FooterCopyright;
