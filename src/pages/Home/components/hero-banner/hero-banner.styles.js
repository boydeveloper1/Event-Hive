export const styles = {
  container: {
    position: "relative",
    marginBottom: "3%",
    color: "#ffffff",
    textAlign: "center",
    minHeight: "80vh",
    maxHeight: "50em",
    backgroundColor: "green",

    "@media (max-width: 900px)": {
      minHeight: "53vh",
      marginBottom: "6%",
    },
  },
  backgroundBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "brightness(40%)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 900px)": {
      width: "107%",
    },
  },
  contentBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "70%",
  },
  button: {
    backgroundColor: "white",
    color: "green",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "#FECB00",
    fontSize: "24px",
    zIndex: 2,
    "@media (max-width: 900px)": {
      fontSize: "15px",
      marginBottom: "0.5rem",
      paddingTop: "5%",
    },
  },
  headingStyles: {
    fontSize: "90px",
    fontWeight: "bold",
    marginBottom: "3rem",
    lineHeight: "90%",
    "@media (max-width: 900px)": {
      fontSize: "22px",
      marginBottom: "1rem",
      lineHeight: "1.6rem",
    },
    "@media (min-width: 2646px) and (max-width: 5000px)": {
      fontSize: "200px",
    },
  },
};
