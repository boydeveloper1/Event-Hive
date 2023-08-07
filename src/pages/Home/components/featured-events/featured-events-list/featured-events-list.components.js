import React from "react";

import { Grid } from "@mui/material";

import MyCard from "../../../../../shared/Card/card-components";
import FeaturedEventsItem from "../featured-events-item/featured-events-item.components";
import MyButton from "../../../../../shared/Button/button.components";
import "./featured-events-list.styles.css";

const FeaturedEventsList = ({ items }) => {
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
    <div className="event-list">
      <Grid container spacing={2.5}>
        {items.map((event) => {
          return <FeaturedEventsItem key={event.id} event={event} />;
        })}
      </Grid>
    </div>
  );
};

export default FeaturedEventsList;
