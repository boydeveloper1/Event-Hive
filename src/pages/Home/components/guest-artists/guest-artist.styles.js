export const styles = {
  box: {
    background: "#FBEBCE",
    padding: "5% 15% 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  "@media (min-width: 400px) and (max-width: 900px)": {
    padding: "0% 0% 0%",
  },
  headingStyles: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "3rem",
    color: "#077307",
    "@media (max-width: 900px)": {
      fontSize: "35px",
    },
  },
  subHeadingStyles: {
    fontStyle: "italic",
    color: "black",
    fontSize: "24px",
  },
  card: { margin: 1, paddingLeft: "10%", paddingRight: "10%" },
  cardMedia: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginBottom: 1,
    margin: "auto",
    marginTop: "15px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    color: "black",
    fontSize: "22px",
    fontWeight: "bold",
  },
  div: { marginTop: 1, display: "flex" },
  iconButton: { margin: "0px -7px" },
};
