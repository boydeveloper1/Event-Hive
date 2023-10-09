export const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "50px",
    mb: "50px",
    fontSize: "1.5rem",
  },
  button: {
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
    padding: "12px 44px",
    "@media (max-width: 900px)": {
      fontSize: "1rem",
      padding: "6px 18px",
    },
  },
};
