import React from "react";
import HerroBanner from "./components/hero-banner/hero-banner.components";
import FeaturedEventsList from "./components/featured-events/featured-events-list/featured-events-list.components";
import HomeButton from "./components/button/button.components";
import DoubleHeader from "../../shared/double-header/double-header.components";

import "./home.styles.css";
import CarouselComponent from "./components/slider-area/slider-area.components";
import BrowseByProvince from "./components/browser/browser.components";

import GuestArtist from "./components/guest-artists/guest-artist.components";

// Data fpr sliderCard
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1690746138480-1245dc220809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    text: "Card 1",
    events: 10,
  },
  {
    image:
      "https://images.unsplash.com/photo-1690746138480-1245dc220809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    text: "Card 1",
    events: 10,
  },
  // Add more data for the remaining cards
];

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building Empire State Building ",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    organizer: "House of Piano",
    date: "25th March 2023",
    province: "Alberta",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building Empire State Building ",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    organizer: "House of Piano",
    date: "25th March 2023",
    province: "Alberta",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "Empire State Building Empire State Building ",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    organizer: "House of Piano",
    date: "25th March 2023",
    province: "Alberta",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p4",
    title: "Empire State Building Empire State Building ",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    organizer: "House of Piano",
    date: "25th March 2023",
    province: "Alberta",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p5",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    organizer: "House of Piano",
    date: "25th March 2023",
    province: "Alberta",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p6",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const Home = () => {
  return (
    <div className="entireHome">
      <HerroBanner />
      <DoubleHeader subheading={"Upcoming Event"} heading={"Featured Events"} />
      <FeaturedEventsList items={DUMMY_PLACES} />
      <HomeButton text="See More Events" url="/all-events" />
      <CarouselComponent />
      <BrowseByProvince />
      <GuestArtist />
    </div>
  );
};

export default Home;
