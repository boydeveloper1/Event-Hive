import React, { Fragment, useEffect, useState, useContext } from "react";

import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import DashboardEventsList from "../../../pages/Dashboard/Components/dashboard-events-list/dashboard-events-list.components";
import { AuthContext } from "../../../shared/context/auth-context";

const UserEvents = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/events/user/${auth.userId}`
        );
        const myEvents = responseData.events.reverse();
        setLoadedEvents(myEvents);
      } catch (error) {}
    };
    fetchEvents();
  }, [sendRequest, auth.userId]);

  // Compare it against the data we have to render exactly events based on the user

  // filtering out the events that was deleted

  const eventDeletedHandler = (deletedEventId) => {
    setLoadedEvents((prevevents) =>
      prevevents.filter((event) => event.id !== deletedEventId)
    );
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedEvents && (
        <DashboardEventsList
          items={loadedEvents}
          onDeletePlace={eventDeletedHandler}
        />
      )}
    </Fragment>
  );
};

export default UserEvents;

// this code will be refered for dashboard
