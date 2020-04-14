import React from "react";

import classes from "./ToggleButton.module.css";

//button: onClick=openMobileNav
const toggleButton = props => {
  return (
    <button className={classes.toggleButton} onClick={props.toggleMenu}>
      <span className={classes.toggleButtonBar}></span>
      <span className={classes.toggleButtonBar}></span>
      <span className={classes.toggleButtonBar}></span>
    </button>
  );
};

export default toggleButton;
