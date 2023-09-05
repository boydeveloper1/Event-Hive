import React, { useEffect, useState } from "react";
import HerroBanner from "./components/hero-banner/hero-banner.components";
import FeaturedEventsList from "./components/featured-events/featured-events-list/featured-events-list.components";
import HomeButton from "./components/button/button.components";
import DoubleHeader from "../../shared/double-header/double-header.components";

import CarouselComponent from "./components/slider-area/slider-area.components";
import BrowseByProvince from "./components/browser/browser.components";
import GuestArtist from "./components/guest-artists/guest-artist.components";
import ErrorModal from "../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../shared/Loading-Spinner/loading-spinner.components";

import { useHttpClient } from "../../shared/hooks/http-hook";

import "./home.styles.css";

const Home = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [loadedEventsCounts, setLoadedEventsCounts] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/events"
        );
        const startIndex = Math.max(0, responseData.events.length - 6);
        const last6Events = responseData.events.slice(startIndex).reverse();

        setLoadedEvents(last6Events);
        setLoadedEventsCounts(responseData.events);
      } catch (error) {}
    };
    fetchEvents();
  }, [sendRequest]);

  return (
    <div className="entireHome">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <HerroBanner />
      <DoubleHeader subheading={"Upcoming Event"} heading={"Featured Events"} />
      {!isLoading && loadedEvents && (
        <FeaturedEventsList items={loadedEvents} />
      )}
      <HomeButton text="See More Events" url="/all-events" />
      <CarouselComponent events={loadedEventsCounts} />
      <BrowseByProvince events={loadedEventsCounts} />
      <GuestArtist />
    </div>
  );
};

export default Home;
