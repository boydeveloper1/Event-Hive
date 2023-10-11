export const styles = {
  card: {
    maxWidth: 700,
    margin: "auto",
    height: "400px",
    backgroundColor: "#FFFFFF",
    mt: "3px",
    mb: "3px",
    boxShadow: "10px 5px 5px #D0D2CC",
    "@media (max-width: 900px)": {
      height: "auto",
      paddingBottom: "7%",
    },
  },

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
  event: {
    fontSize: 22,
    verticalAlign: "middle",
    color: "#009B4D",
    marginRight: "4px",
  },

  cardMedia: {
    width: "40%",
    height: "auto",
    objectFit: "cover",
    textAlign: "left",
  },

  title: {
    fontWeight: "bold",
    color: "black",
  },

  organizedBy: {
    mt: "9px",
    fontSize: 15,
    fontSize: 17,
  },

  organizer: {
    fontWeight: 700,
    fontSize: 19,
    color: "green",
    marginBottom: "5%",
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5% 5% 5% 5%",
  },

  buttonOne: {
    flex: 1,
    marginRight: 1,
    backgroundColor: "black",
    border: "thick double black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "#FFCC02",
    },
  },

  buttonDisabled: {
    backgroundColor: "#FFCC02",
    color: "black",
    marginRight: "60%",
    marginTop: "5%",
    fontSize: "19px",
    "&:hover": {
      backgroundColor: "black",
      color: "#FFCC02",
    },
    "@media (max-width: 900px)": {
      fontSize: "10px",
    },
  },

  quantityLabel: {
    color: "#009B4D",
    fontWeight: "bold",
    fontSize: "14px",
    marginRight: "4px",
  },

  quantityText: {
    color: "white",
    backgroundColor: "#009B4D",
    padding: "6px 20px",
    borderRadius: "6px",
    fontWeight: "bold",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "14px",
    minWidth: "40px",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "10px",
    },
  },

  priceLabel: {
    color: "#009B4D",
    fontWeight: "bold",
    fontSize: "14px",
    marginRight: "4px",
  },

  quantityContainer: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  div: {
    display: "inline-block",
    verticalAlign: "center",
    marginTop: "5%",
  },
  priceContainer: {
    display: "inline-block",
    marginLeft: "4%",
    "@media (max-width: 900px)": {
      marginTop: "2.5%",
    },
  },
  cardContent: { display: "flex", flexDirection: "column", flexGrow: 1 },
};
