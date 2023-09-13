import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profileAvatar from "../../../images/profile.jpg";

import { AuthContext } from "../../../shared/context/auth-context";
import "./nav-links.styles.css";

const Navlinks = () => {
  const auth = useContext(AuthContext);
  return (
    <Fragment>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact="true">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-events">EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/blog">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">CONTACT</NavLink>
        </li>

        {auth.isLoggedIn && (
          <li>
            <Link to="/add-new-event" className="linkaa">
              <button>ADD EVENT</button>
            </Link>
          </li>
        )}

        {!auth.isLoggedIn && (
          <li>
            <Link to="/authentication">
              <img className="profile-avatar" src={profileAvatar} />
            </Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <Link to={`/${auth.userId}/dashboard`}>
              <img className="profile-avatar" src={auth.image} />
            </Link>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default Navlinks;
