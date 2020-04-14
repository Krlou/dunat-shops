import React from "react";

import classes from "./AboutPcs.module.css";

const aboutPcs = (props) => {
  return (
    <div className={classes.aboutPcs}>
      <p className={classes.aboutPcsHeading}>
        {props.isSerbian ? "PCS SAVA" : "FREE SHOP SAVA"}
      </p>
      <div className={classes.aboutPcsText}>
        <p>
          {props.isSerbian
            ? "Privatno carinsko skladište namenjeno je snabdevanju turističkih brodova potrebnim namirnicama, alkoholnim pićima, duvanskim proizvodima i parfemima renomiranih proizvođača."
            : "The private customs warehouse is intended to supply cruise ships with the necessary provisions, spirits, tobacco products and perfumes from reputable manufacturers."}
        </p>
        <p>
          {props.isSerbian
            ? "Sva roba oslobođena je troškova carine i PDV-a."
            : "All goods are exempt from customs duties and VAT."}
        </p>
        <p>
          {props.isSerbian
            ? "Na zahtev klijenata, u mogućnosti smo da obezbedimo snabdevanje svežim voćem i povrćem."
            : "Upon request, we may provide our customers with fresh fruit and vegetables."}
        </p>
      </div>
    </div>
  );
};

export default aboutPcs;
