import React, { useState } from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import MainHeader from "../Main-Header/main-header.components";
import Navlinks from "../Nav-Links/nav-links.components";
import SideDrawer from "../Side-Drawer/side-drawer.components";
import Backdrop from "../../Backdrop/backdrop.components";

import "./main-navigation.styles.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // to handle opening of the side drawer for mobile
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  // to handle closing of the side drawer for mobile
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      {/* All Navlink inside Side-drawer for Mobile  */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <Navlinks />
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
          <img src="/images/EventHive.png"></img>
        </Link>
        <nav className="main-navigation__header-nav">
          <Navlinks />
        </nav>
      </MainHeader>
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;
