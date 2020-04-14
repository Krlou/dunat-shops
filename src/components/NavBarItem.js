import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBarItem.module.css";

//link: onclick="handlePcsSlider()"
const navBarItem = props => {
  return (
    <li className={props.isMobile ? classes.mobileNavItem : classes.navBarItem}>
      <NavLink to={props.href} onClick={props.clicked}>
        {props.label}
      </NavLink>
    </li>
  );
};

export default navBarItem;
