import React from "react";

import NavBarItems from "./NavBarItems";

import classes from "./MobileNav.module.css";

const mobileNav = props => {
  return (
    <nav className={classes.mobileNav}>
      <NavBarItems
        isMobile={props.isMobile}
        clicked={props.clicked}
        changeLang={props.changeLang}
        isSerbian={props.isSerbian}
      />
    </nav>
  );
};

export default mobileNav;
