import React, { useState } from "react";

import "./main-header.styles.css";

const MainHeader = ({ children }) => {
  const [headerColor, setHeaderColor] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 90) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);
  return (
    <header className={headerColor ? "main-header color" : "main-header"}>
      {children}
    </header>
  );
};

export default MainHeader;
