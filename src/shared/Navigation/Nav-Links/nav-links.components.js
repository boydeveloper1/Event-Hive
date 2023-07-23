import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import profileAvatar from "../../../images/profile.jpg";

// import { AuthContext } from "../../../../shared/context/auth-context";
import "./nav-links.styles.css";

const Navlinks = () => {
  // const auth = useContext(AuthContext);
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
        <li>
          <NavLink to="/add-event">ADD EVENT</NavLink>
        </li>
        {/* <li>
          <NavLink to="/authentication">AUTHENTICATION</NavLink>
        </li> */}

        <li>
          <button>ADD EVENT</button>
        </li>
        <li>
          <Link to="/authentication">
            <img
              className="profile-avatar"
              src={profileAvatar}
              alt="Profile Avatar"
            />
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navlinks;
