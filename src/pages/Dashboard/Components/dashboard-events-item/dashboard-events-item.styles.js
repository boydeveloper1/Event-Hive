import { hover } from "@testing-library/user-event/dist/hover";

export const styles = {
  card: {
    maxWidth: 600,
    margin: "auto",
    height: "500px",
    backGroundColor: "#white",
    mt: "3px",
    mb: "3px",
    boxShadow: "10px 5px 5px #D0D2CC",
  },

  cardContent: {
    marginBottom: "70px",
    color: "black",
  },

  title: { fontWeight: "bold", color: "black" },

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

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5% 5% 5% 0%",
  },

  box: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0% 5% 1% 0%",
  },

  buttonOne: {
    flex: 1,
    marginRight: 1,
    backgroundColor: "transparent",
    border: "thick double #F5F5F5",
    color: "black",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  buttonTwo: {
    flex: 1,
    backgroundColor: "#FFCC00",
    color: "black",
    border: "thick double #FFCC00",
    "&:hover": {
      backgroundColor: "#FFCC00",
    },
  },

  buttonThree: {
    flex: 1,
    backgroundColor: "#FFCC00",
    color: "black",
    border: "thick double #FFCC00",
    marginRight: "3px",
    "&:hover": {
      backgroundColor: "#FFCC00",
    },
  },
  buttonFour: {
    flex: 1,
    backgroundColor: "red",
    color: "white",
    border: "thick double red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};
