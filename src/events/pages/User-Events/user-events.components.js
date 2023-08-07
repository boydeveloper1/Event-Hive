import React, { Fragment, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import EventList from "../../components/event-list/event-list.components";
import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import HeroHeader from "../../../shared/hero-header/hero-header.components";
import { useHttpClient } from "../../../shared/hooks/http-hook";

const Dummy_Events = [
  {
    id: "p1",
    title: "Carabana Event",
    description: "Vibes all night for this event",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "1735 Coronation Drive",
    price: "$100",
    date: "25th of June 2019",
    location: {
      lat: 40.7847475,
      lng: -73.9857385,
    },
    creator: "u1",
  },
  ``,
];

const UserEvents = () => {
  // const [loadedEvents, setLoadedEvents] = useState();
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // This gives the dynamic part of route from App.js
  const userId = useParams().userId;

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${process.env.REACT_APP_BACKEND_URL}/events/user/${userId}`
  //       );
  //       setLoadedEvents(responseData.events);
  //     } catch (error) {}
  //   };
  //   fetchEvents();
  // }, [sendRequest, userId]);

  // Compare it against the data we have to render exactly events based on the user

  // filtering out the events that was deleted

  // const eventDeletedHandler = (deletedEventId) => {
  //   setLoadedEvents((prevevents) =>
  //     prevevents.filter((event) => event.id !== deletedEventId)
  //   );
  // };

  return (
    <Fragment>
      <HeroHeader text={"Created Events"} />
      {/* <ErrorModal error={error} onClear={clearError} />
    //{isLoading && (
    <div className="center">
    //<LoadingSpinner />
    </div>
)}
{!isLoading && loadedEvents && (
   <EventList items={Dummy_Events} onDeleteevent={eventDeletedHandler} />
)} */}

      <EventList items={Dummy_Events} />
    </Fragment>
  );
};

export default UserEvents;
