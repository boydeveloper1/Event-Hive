import React, { Fragment, useEffect, useState, useContext } from "react";

import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import DashboardBoughtEventsList from "./Components/dashboard-boughtevents-list/dashboard-boughtEvents-list.components";
import { AuthContext } from "../../../shared/context/auth-context";

const BoughtEvents = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/events/boughtEvents/user/${auth.userId}`
        );
        console.log(responseData);
        const myBoughtEvents = responseData.boughtEvents.reverse();
        setLoadedEvents(myBoughtEvents);
      } catch (error) {}
    };
    fetchEvents();
  }, [sendRequest, auth.userId]);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedEvents && (
        <DashboardBoughtEventsList items={loadedEvents} />
      )}
    </Fragment>
  );
};

export default BoughtEvents;

// this code will be used for dashboard - Bought Event
