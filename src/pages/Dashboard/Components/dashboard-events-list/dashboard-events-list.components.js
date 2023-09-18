import React from "react";

import { Grid } from "@mui/material";

import DashboardEventsItem from "../dashboard-events-item/dashboard-events-item.components";
import MyCard from "../../../../shared/Card/card-components";
import MyButton from "../../../../shared/Button/button.components";
import "./dashboard-events-list.styles.css";

const DashboardEventsList = ({ items, onDeletePlace }) => {
  // If there is no event, display a card component to create a new event
  if (items.length === 0) {
    return (
      <div className="event-List center">
        <MyCard>
          <h2>No Event found! You can create one below. </h2>
          <MyButton to="/add-new-event"> Add Event</MyButton>
        </MyCard>
      </div>
    );
  }
  return (
    <div className="event-list-dash">
      <Grid container spacing={2}>
        {items.map((event) => {
          return (
            <DashboardEventsItem
              key={event.id}
              event={event}
              onDelete={onDeletePlace}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default DashboardEventsList;
