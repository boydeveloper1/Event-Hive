import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profileAvatar from "../../../images/profile.jpg";

import { AuthContext } from "../../../shared/context/auth-context";
import { CartContext } from "../../context/cart-context";

import "./nav-links.styles.css";
import CartIcon from "../../Cart-Icon/cart-Icon.components";
import CartDropdown from "../../Cart-Dropdown/cart-dropdown.components";

const Navlinks = () => {
  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);
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
            <CartIcon />
          </li>
        )}
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
      {cart.isCartOpen && <CartDropdown />}
    </Fragment>
  );
};

export default Navlinks;
