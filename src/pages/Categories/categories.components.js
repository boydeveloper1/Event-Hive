import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import HeroHeader from "../../shared/hero-header/hero-header.components";
import FeaturedEventsList from "../Home/components/featured-events/featured-events-list/featured-events-list.components";

import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Categories = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [allEvents, setAllEvents] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/events"
        );

        setAllEvents(responseData.events);
      } catch (error) {}
    };
    fetchEvents();
  }, [sendRequest]);

  const events = allEvents.filter((event) => {
    return event.category === category;
  });

  return (
    <Fragment>
      <HeroHeader
        text={category}
        src={
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        }
      />
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && events && <FeaturedEventsList items={events} />}
    </Fragment>
  );
};

export default Categories;
