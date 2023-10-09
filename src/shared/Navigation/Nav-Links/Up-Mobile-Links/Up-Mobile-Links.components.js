import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profileAvatar from "../../../../images/profile.jpg";

import { AuthContext } from "../../../../shared/context/auth-context";

import "./Up-Mobile-Links.styles.css";
import CartIcon from "../../../Cart-Icon/cart-Icon.components";

const UpMobileLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <Fragment>
      <ul className="up-links">
        {auth.isLoggedIn && (
          <li>
            <Link style={{ textDecoration: "none" }} to="/checkout">
              <CartIcon />
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

export default UpMobileLinks;
