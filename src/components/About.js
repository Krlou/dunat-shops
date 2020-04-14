import React from "react";

import classes from "./About.module.css";

const about = (props) => {
  return (
    <div className={classes.aboutUs}>
      <p className={classes.aboutUsHeading}>
        {props.isSerbian ? "O NAMA" : "ABOUT US"}
      </p>
      <div className={classes.aboutUsText}>
        <p>
          {props.isSerbian
            ? "Kompanija Dunat d.o.o. je privatna kompanija čija je osnovna delatnost snabdevanje brodova, posada i putnika uvozno-neocarinjenom robom i domaćom robom namenjenoj izvozu, oslobođene carine i PDV-a."
            : "Dunat LLC isa a private company whose core bussines is supplying ships, their crews and passengers with imported customs-free goods and domestic goods intended for export, exempted from customs duties and VAT."}
        </p>
        <p>
          {props.isSerbian
            ? "Kompaniju sačinjava tim profesionalaca sa dugogodišnjim iskustvom u oblasti snabdevanja brodova, marketinga i rada sa državnim organima i institucijama."
            : "The company is represented by a team of professionals experienced in the field of ship supply, marketing and cooperation with state authorities and institutions."}
        </p>
        <p>
          {props.isSerbian
            ? "Cilj kompanije je da se na jednom mestu brod snabde svim potrebštinama po izuzetno povoljnim cenama, a takođe i da se strani turisti, po pristajanju, upoznaju sa našom kulturom i tradicijom."
            : "Our goal is to provide customers with all the necessities at extremely reasonable prices, all in one place, and introduce foreign tourists, upon landing, to the Serbian culture and tradition."}
        </p>
      </div>
    </div>
  );
};

export default about;
