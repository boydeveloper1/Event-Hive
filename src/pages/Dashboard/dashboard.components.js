import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";

import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";

import UserEvents from "../../events/pages/User-Events/user-events.components";
import BoughtEvents from "../../events/pages/Bought-Events/bought-events.components";

import { styles } from "./dashboard.styles";

const items = [
  { name: "Dashboard", color: "#e0e9fb" },
  { name: "Created Events", color: "#eedefa" },
  { name: "Purchased Events", color: "#e0edf3" },
  { name: "Logout", color: "#f3eae7" },
];

const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUser, setLoadedUser] = useState({});
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const auth = useContext(AuthContext);

  const Navigate = useNavigate();
  const { loggedID } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${loggedID}`
        );

        setLoadedUser(responseData.user);
      } catch (error) {
        Navigate("/404");
      }
    };
    fetchUsers();
  }, [sendRequest, loggedID]);

  //when a sidebar is clicked
  const handleItemClick = (item) => {
    setSelectedItem(item);

    // logout a user when the logout tab is clicked
    if (item === "Logout") {
      auth.logout();
      Navigate("/");
    }
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUser && (
        <HeroHeader
          text={"My Account"}
          src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        />
      )}
      <Container maxWidth="xl" sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {items.map((item) => (
              <Box
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                sx={{
                  border: "0.5px solid black",
                  margin: "4% 0px",
                  p: 4,
                  cursor: "pointer",
                  borderRadius: 1,
                  transition: "background-color 0.3s ease",
                  backgroundColor: item.name ? item.color : "white",

                  color: selectedItem === "item.name" ? "#fff" : "inherit",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  border:
                    selectedItem === item.name ? "1px solid black" : "none",
                }}
              >
                {item.name}
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={9}>
            {/* Content for the selected item */}
            {selectedItem === "Dashboard" && loadedUser && (
              <Box sx={styles.box}>
                <Typography variant="h6" sx={styles.typography1}>
                  {`Howdy ${loadedUser?.name?.split(" ")[0]}`}
                  <Box sx={styles.box1}>
                    <img
                      className="profile-avatar"
                      src={auth.image}
                      alt="Profile Avatar"
                    />
                  </Box>
                  ( not {` ${loadedUser?.name?.split(" ")[0]}`} ?{" "}
                  <Button sx={styles.button} onClick={auth.logout}>
                    Logout
                  </Button>
                  )
                </Typography>
                <Typography variant="p">
                  From your account dashboard you can view your created event,
                  update and delete them, manage your purchased ticket. Other
                  features like editing billing address, password and general
                  account details coming soon.
                </Typography>
              </Box>
            )}
            {selectedItem === "Created Events" && loadedUser && (
              <Paper sx={styles.box}>
                <Typography variant="p" sx={styles.typography2}>
                  Here's a list of the events you've created!
                </Typography>
                <UserEvents />
              </Paper>
            )}
            {selectedItem === "Purchased Events" && (
              <Paper sx={styles.box}>
                <Typography variant="p" sx={styles.typography2}>
                  Here are your purchased tickets.
                </Typography>
                <BoughtEvents />
              </Paper>
            )}
            {selectedItem === "Logout" &&
              (() => {
                auth.logout();
              })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
