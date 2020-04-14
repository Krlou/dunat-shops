import React from "react";

import MainHeading from "./MainHeading";
import Products from "./Products";
import About from "./About";

const mainPage = props => {
  return (
    <React.Fragment>
      <MainHeading />
      <Products isSerbian={props.isSerbian} />
      <About isSerbian={props.isSerbian} />
    </React.Fragment>
  );
};

export default mainPage;
