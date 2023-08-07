import React, { Fragment } from "react";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import Users from "../../user/pages/Users.components";

const Events = () => {
  return (
    <Fragment>
      <HeroHeader text={"events."} />
      <Users />
    </Fragment>
  );
};

export default Events;
