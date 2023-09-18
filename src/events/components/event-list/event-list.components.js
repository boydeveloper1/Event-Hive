import React from "react";

import Card from "../../../shared/Card/card-components";
import EventItem from "../event-Item/event-item.components";
import Button from "../../../shared/Button/button.components";
import "./event-list.components";

const EventList = ({ items, onDeleteEvent }) => {
  if (items.length === 0) {
    return (
      <div className="event-List center">
        <Card>
          <h2>No Event found! You can create one below. </h2>
          <Button to="/events/new"> Add Event</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="event-list">
      {items.map((event) => {
        return (
          <EventItem key={event.id} event={event} onDelete={onDeleteEvent} />
        );
      })}
    </ul>
  );
};

export default EventList;
