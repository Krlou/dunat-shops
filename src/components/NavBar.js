import React from "react";

import classes from "./NavBar.module.css";
import NavBarItems from "./NavBarItems";

const navBar = props => {
  return (
    <nav className={classes.navBar}>
      <NavBarItems
        isMobile={props.isMobile}
        changeLang={props.changeLang}
        isSerbian={props.isSerbian}
      />
    </nav>
  );
};

export default navBar;
