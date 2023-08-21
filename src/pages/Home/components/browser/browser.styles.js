export const styles = {
  box: {
    background: "linear-gradient(45deg, yellow, green)",
    padding: "5% 10% 0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  headingStyles: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "3rem",
    color: "white",
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "#FECB00",
    fontSize: "24px",
  },
  card: {
    boxShadow: 3,
    paddingBottom: "12px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardContent: { padding: "0px 0px 24px" },
  typography: {
    marginTop: 2,
    "@media (min-width: 900px) and (max-width: 1275px)": {
      fontSize: "12px",
    },
  },
  button: { marginTop: 2, backgroundColor: "transparent" },
  boxStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "100px",
    mb: "100px",
    fontSize: "1.5rem",
  },
  buttonStyles: {
    textTransform: "none",
    "& .MuiButton-endIcon": {
      marginLeft: 1,
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
      borderColor: "black",
    },
    backgroundColor: "white",
    border: "double 4px white",
    color: "#009B4D",
    fontSize: "1.2rem",
    padding: "12px 44px",
  },
};
