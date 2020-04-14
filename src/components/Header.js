import React from "react";

import classes from "./Header.module.css";
import ToggleButton from "./ToggleButton";
import NavLogo from "./NavLogo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const header = props => {
  let nav = props.isMobile ? (
    <MobileNav
      isMobile={props.isMobile}
      clicked={props.clicked}
      changeLang={props.changeLang}
      isSerbian={props.isSerbian}
    />
  ) : (
    <React.Fragment>
      <ToggleButton toggleMenu={props.toggleMenu} />
      <NavLogo />
      <NavBar
        isMobile={props.isMobile}
        changeLang={props.changeLang}
        isSerbian={props.isSerbian}
      />
    </React.Fragment>
  );
  return <header className={classes.pageHeader}>{nav}</header>;
};

export default header;
