import React from "react";

import NavBarItem from "./NavBarItem";
import Languages from "./Languages";

import classes from "./NavBarItems.module.css";

//add clicked property to navBarItem
const navBarItems = props => {
  return (
    <ul
      className={props.isMobile ? classes.mobileNavItems : classes.navBarItems}
    >
      <NavBarItem
        label={props.isSerbian ? "PCS SAVA" : "FREE SHOP SAVA"}
        href="/pcs-sava"
        isMobile={props.isMobile}
        clicked={props.clicked}
      />
      <NavBarItem
        label="SHOP SAVA"
        href="/shop-sava"
        isMobile={props.isMobile}
        clicked={props.clicked}
      />
      <NavBarItem
        label={props.isSerbian ? "JCS BEZDAN" : "FREE SHOP BEZDAN"}
        href="/jcs-bezdan"
        isMobile={props.isMobile}
        clicked={props.clicked}
      />
      <li
        className={props.isMobile ? classes.mobileNavItem : classes.navBarItem}
      >
        <a href="#contactId" onClick={props.clicked}>
          {props.isSerbian ? "KONTAKT" : "CONTACT"}
        </a>
      </li>
      <Languages changeLang={props.changeLang} />
    </ul>
  );
};

export default navBarItems;
