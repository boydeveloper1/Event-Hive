export const styles = {
  image: {
    marginTop: "-10%",
    width: "100%",
    maxHeight: "100VH",
    backgroundColor: "green",
    filter: "brightness(60%)",
    "@media (max-width: 900px)": {
      padding: "40% 0",
    },
  },
  box: {
    position: "relative",
    color: "#ffffff",
    textAlign: "center",
    padding: "40px 0",
  },
  button: {},
  typography1: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "100%",
  },
  typography2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "100%",
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "#FECB00",
    fontSize: "24px",
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
    "@media (max-width: 1275px)": {
      fontSize: "30px",
    },
    "@media (min-width: 2646px) and (max-width: 5000px)": {
      fontSize: "200px",
    },
  },
  boxStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "70%",
  },
};
