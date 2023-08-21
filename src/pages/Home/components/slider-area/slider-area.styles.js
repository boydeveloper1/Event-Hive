export const styles = {
  box: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: "cover",
    padding: "7% 10% 0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "&::before": {
      content: '""',
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(5, 115, 7, 0.2)",
    },
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "#FECB00",
    fontSize: "24px",
  },
  headingStyles: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    marginBottom: "20px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)", // Adjust the scale value for pop-up effect
      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
      color: "#077307", // Adjust the shadow values
    },
  },
  buttonStyles: {
    extTransform: "none",
    "& .MuiButton-endIcon": {
      marginLeft: 1,
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    backgroundColor: "#FECB00",
    border: "double 4px #FECB00",
    color: "black",
    fontSize: "1.2rem",
    padding: "15px 44px",
  },
  typography: {
    fontSize: "17px",
    fontWeight: "bold",
    textAlign: "center",
    "@media (min-width: 900px) and (max-width: 1439px)": {
      fontSize: "11px",
    },
  },
  events: {
    "@media (min-width: 900px) and (max-width: 1439px)": {
      fontSize: "12px",
    },
  },
  grid: {
    marginTop: "3%",
  },
};
