import React from "react";

import classes from "./Products.module.css";

const products = props => {
  return (
    <div className={classes.productsSection}>
      <div>{props.isSerbian ? "CIGARETE" : "CIGARETTES"}</div>
      <div>{props.isSerbian ? "HRANA" : "FOOD"}</div>
      <div>{props.isSerbian ? "PIĆE" : "BEVERAGES"}</div>
      <div style={{ borderRight: "none" }}>
        {props.isSerbian ? "PARFEMI" : "PERFUMES"}
      </div>
    </div>
  );
};

export default products;
