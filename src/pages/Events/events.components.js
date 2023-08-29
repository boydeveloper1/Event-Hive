import React, { Fragment, useState, useEffect } from "react";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import FeaturedEventsList from "../Home/components/featured-events/featured-events-list/featured-events-list.components";

import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Events = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedEvents, setLoadedEvents] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/events"
        );

        setLoadedEvents(responseData.events);
      } catch (error) {}
    };
    fetchEvents();
  }, [sendRequest]);

  return (
    <Fragment>
      <HeroHeader text={"events."} />
      // <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedEvents && (
        <FeaturedEventsList items={loadedEvents} />
      )}
    </Fragment>
  );
};

export default Events;
