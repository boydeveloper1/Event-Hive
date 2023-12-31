export const styles = {
  card: {
    maxWidth: 400,
    margin: "auto",
    backGroundColor: "#white",
    mt: "3px",
    mb: "3px",
    boxShadow: "10px 5px 5px #D0D2CC",
  },

  cardContent: {
    height: 200,
    pb: "3px",
    marginBottom: "90px",
    color: "black",
  },

  title: { fontWeight: "bold" },

  room: {
    fontSize: 25,
    verticalAlign: "middle",
    color: "#009B4D",
    marginLeft: "-4px",
  },

  category: {
    fontSize: 22,
    verticalAlign: "middle",
    color: "#009B4D",
    marginRight: "4px",
  },

  date: { mt: "9px" },

  Link: { textDecoration: "none" },

  event: {
    fontSize: 22,
    verticalAlign: "middle",
    color: "#009B4D",
    marginRight: "4px",
  },

  organizedBy: { mt: "9px", fontSize: 15, fontSize: 17 },

  organizer: {
    fontWeight: 700,
    fontSize: 19,
    color: "green",
  },

  buttonDisabled: {
    border: "3px solid green",
    color: "green",
    "&:hover": {
      backgroundColor: "#009B4D",
      color: "white",
    },
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5% 5%",
  },

  buttonOne: {
    flex: 1,
    marginRight: 1,
    backgroundColor: "transparent",
    border: "thick double #F5F5F5",
    color: "black",
    "@media (max-width:900px)": {
      fontSize: "10px",
    },
  },

  buttonTwo: {
    flex: 1,
    backgroundColor: "#FFCC00",
    color: "black",
    border: "thick double #FFCC00",
    "@media (max-width:900px)": {
      fontSize: "10px",
    },
  },
};
