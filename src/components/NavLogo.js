import React from "react";

import classes from "./NavLogo.module.css";
import imgLogo from "../assets/images/dunat-logo.jpg";

const navLogo = () => {
  return (
    <div className={classes.pageHeaderLogo}>
      <a href="/">
        <img src={imgLogo} alt="DUNAT" />
      </a>
    </div>
  );
};

export default navLogo;
