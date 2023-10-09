import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import MainHeader from "../Main-Header/main-header.components";
import Navlinks from "../Nav-Links/nav-links.components";
import SideDrawer from "../Side-Drawer/side-drawer.components";
import Backdrop from "../../Backdrop/backdrop.components";

import MobileLinks from "../Nav-Links/Mobile-Link1/Mobile-Link1.components";
import UpMobileLinks from "../Nav-Links/Up-Mobile-Links/Up-Mobile-Links.components";
import "./main-navigation.styles.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);

  // Function to handle opening of the side drawer for mobile
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  // Function to handle closing of the side drawer for mobile
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  // Function to update isSmallScreen state based on window width
  const handleWindowResize = () => {
    setIsSmallScreen(window.innerWidth <= 900);
  };

  // Add an event listener to handle window resize
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      {/* All Navlink inside Side-drawer for Mobile  */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <MobileLinks />
        </nav>
      </SideDrawer>

      {/* For other views asides Mobile  */}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="underline">
          <img className="headerImage" src="/images/EventHive.png"></img>
        </Link>

        <nav className="main-navigation__header-nav">
          <Navlinks />
        </nav>

        {isSmallScreen && (
          <nav className="upMobileMenu">
            <UpMobileLinks />
          </nav>
        )}
      </MainHeader>
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;
