export const styles = {
  box1: {
    textAlign: "left",
    py: "2rem",
    px: "8rem",

    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "0rem",
    },
  },
  typography1: { fontStyle: "italic", color: "#FECB00", fontSize: "24px" },
  typography2: {
    fontWeight: "bold",
    lineHeight: "3.9rem",
    marginBottom: "2%",
    "@media (max-width: 900px)": {
      fontSize: "40px",
      lineHeight: "2.9rem",
      marginBottom: "6%",
    },
  },
  box2: { p: "2rem" },
  box3: { overflow: "hidden" },
  box4: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(250%, 280%)",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  grid1: {
    mt: "10rem",
    mb: "3rem",
    px: "8rem",

    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "2rem",
      mt: "3rem",
    },
  },
  paper1: {
    p: "1.5rem",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  typography3: { fontWeight: "bold", fontSize: "40px" },
  typography4: { fontSize: "20px" },
  box5: {
    textAlign: "left",
    py: "2rem",
    px: "8rem",
    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "3rem",
    },
  },
  grid2: { marginTop: "3%" },
  box6: {
    overflow: "hidden",
    marginRight: "9%",
    "@media (max-width: 900px)": {
      marginRight: "0%",
    },
  },
  typography5: {
    fontStyle: "italic",
    color: "#FECB00",
    fontSize: "24px",
  },
  typography6: {
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "3.9rem",
    marginBottom: "2%",
    "@media (max-width: 900px)": {
      fontSize: "40px",
      lineHeight: "2.9rem",
      marginBottom: "6%",
    },
  },
  box7: {
    mt: "3rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    px: "8rem",
    marginTop: "8%",
    "@media (min-width: 100px) and (max-width: 900px)": {
      px: "2rem",
      mt: "3rem",
    },
  },
  typography7: {
    textAlign: "center",
    fontSize: "45px",
    fontWeight: "bold",
    lineHeight: "3.9rem",
    marginBottom: "5%",
    "@media (max-width: 900px)": {
      fontSize: "40px",
      lineHeight: "2.9rem",
      marginBottom: "10%",
    },
  },
  paper2: { p: "5px", textAlign: "center", pb: "30px" },
  typography8: {
    color: "green",
    fontWeight: "bold",
    paddingBottom: "8px",
  },
  box8: { mt: "3rem" },
  box9: {
    p: "2rem",
    textAlign: "center",
    width: "100%",
    marginBottom: "-15%",
    zIndex: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};
