import React from "react";

import classes from "./Languages.module.css";

const languages = props => {
  return (
    <li className={classes.navBarItem}>
      <span>
        <button
          className={classes.english}
          title="english"
          onClick={() => props.changeLang("en")}
        >
          EN
        </button>
        <button
          className={classes.serbian}
          title="serbian"
          onClick={() => props.changeLang("sr")}
        >
          SR
        </button>
      </span>
    </li>
  );
};

export default languages;
