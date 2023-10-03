import React from "react";

import { Grid } from "@mui/material";

import DashboardBoughtEventsItem from "../dashboard-boughtEvents-item/dashboard-boughtEvents-item.components";
import MyCard from "../../../../../shared/Card/card-components";
import MyButton from "../../../../../shared/Button/button.components";
import "./dashboard-boughtEvents-list.styles.css";

const DashboardBoughtEventsList = ({ items }) => {
  // If there is no event, display a card component to buy an event
  if (items.length === 0) {
    return (
      <div className="event-List center">
        <MyCard>
          <h2>
            You haven't purchased an event yet! Check Out our Catalogue of
            Events
          </h2>
          <MyButton to="/all-events"> Explore Events</MyButton>
        </MyCard>
      </div>
    );
  }
  return (
    <div className="event-list-dash">
      <Grid container spacing={2}>
        {items.map((event) => {
          return <DashboardBoughtEventsItem key={event.id} event={event} />;
        })}
      </Grid>
    </div>
  );
};

export default DashboardBoughtEventsList;
