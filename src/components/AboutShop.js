import React from "react";

import classes from "./AboutShop.module.css";

const aboutShop = (props) => {
  return (
    <div className={classes.aboutShop}>
      <p className={classes.aboutShopHeading}>SHOP SAVA</p>
      <div className={classes.aboutShopText}>
        <p>
          {props.isSerbian
            ? "Maloprodajni objekat lociran je na pristanu međunarodnog putničkog pristaništa Sava u Beogradu."
            : "The retail facility is situated on the docks of International passenger terminal in the Belgrade port on the river Sava."}
        </p>
        <p>
          {props.isSerbian
            ? "Namenjen je prvenstveno snabdevanju turista koji pristižu kruzerima. Na jednom mestu želimo da ih, širokim asortimanom suvenira i domaćih proizvoda, upoznamo sa našom kulturom i tradicijom."
            : "It is intended primarily for tourists arriving by cruisers. We are pleased to introduce them to Serbian culture and tradition offering a wide assortment of souvenirs and local products."}
        </p>
      </div>
    </div>
  );
};

export default aboutShop;
