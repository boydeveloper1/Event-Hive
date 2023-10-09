import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../../../shared/context/auth-context";

import "./Mobile-Link1.styles..css";

const MobileLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <Fragment>
      <ul className="king-links">
        <li>
          <NavLink to="/" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/authentication">Login</NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <Link to="/add-new-event" className="addgt">
              <button>ADD EVENT</button>
            </Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <button className="linkaag" onClick={auth.logout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default MobileLinks;
