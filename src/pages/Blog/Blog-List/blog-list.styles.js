export const styles = {
  blogsContainer: {
    paddingTop: "3px",
    marginBottom: "8rem",
  },
  blogTitle: {
    fontWeight: 700,
    paddingBottom: "35px",
    textAlign: "left",
    fontSize: "25px",
  },
  card: {
    maxWidth: "100%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },

  readMoreButton: {
    background: "transparent",
    color: "#98791E",
    padding: "8px 16px",
    borderColor: "#98791E",
    borderRadius: "4px",
    textDecoration: "none",
    "&:hover": {
      background: "#98791E",
      color: "white",
      borderColor: "#98791E",
    },
  },
  media: {
    height: 240,
  },
};
