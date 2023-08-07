import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../../shared/Avatar/avatar.components";
import Card from "../../../shared/Card/card-components";

import "./user-item.styles.css";

const UserItem = ({ user }) => {
  const { name, id, createdEvents, image } = user;
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/events`}>
          <div className="user-item__image">
            <Avatar image={image.url} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {createdEvents.length}{" "}
              {createdEvents.length === 1 ? "Created Event" : "Created Events"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
