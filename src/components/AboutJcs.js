import React from "react";

import classes from "./AboutJcs.module.css";

const aboutJcs = (props) => {
  return (
    <div className={classes.aboutJcs}>
      <p className={classes.aboutJcsHeading}>
        {props.isSerbian ? "JCS BEZDAN" : "FREE SHOP BEZDAN"}
      </p>
      <div className={classes.aboutJcsText}>
        <p>
          {props.isSerbian
            ? "Javno carinsko skladište tip I locirano je u zoni graničnog prelaza Bezdan, na reci Dunav (stacionaža km 1425).Namenjeno je snabdevanju svih tipova brodova, putničkih i teretnih, koji ulaze ili napuštaju područje Republike Srbije."
            : "Public customs warehouse type 1 is located on the river Danube, in the border crossing zone “Bezdan” (chainage, km 1425). It is intended for all kinds of ships, passenger and cargo, entering or leaving the territory of the Republic of Serbia."}
        </p>
        <p>
          {props.isSerbian
            ? "Karakteriše ga veliki magacinski i izložbeni prostor, kao i izuzetno širok asortiman proizvoda koji omogućava da se brod i posada u potpunosti snabdeju svim potrebnim namirnicama."
            : "It is characterized by a large warehouse and showroom, as well as an extremely wide range of products that enables the ship and crew to be fully supplied with all the necessary provisions."}
        </p>
        <p>
          {props.isSerbian
            ? "Zaposleni govore više stranih jezika. Radno vreme je 24/7 tokom čitave godine."
            : "Employees are fluent in several languages. Work hours: 24/7 all year long."}
        </p>
      </div>
    </div>
  );
};

export default aboutJcs;
