import React from "react";

import "./card.styles.css";

const MyCard = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default MyCard;
