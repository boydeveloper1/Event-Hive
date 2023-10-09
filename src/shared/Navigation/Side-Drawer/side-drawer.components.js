import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";

import "./side-drawer.styles.css";

const SideDrawer = ({ children, show, onClick }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={`side-drawer ${show ? "open" : ""}`}>
        <button className="close-button" onClick={onClick}>
          <CloseIcon />
        </button>
        {children}
      </aside>
    </CSSTransition>
  );

  // to render the content of SideDrawer somewhere else
  return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
