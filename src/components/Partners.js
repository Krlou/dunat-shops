import React from "react";

import atlanticImg from "../assets/images/partners/atlantic-grupa.png";
import batImg from "../assets/images/partners/bat.png";
import carlsbergImg from "../assets/images/partners/carlsberg.png";
import carnexImg from "../assets/images/partners/carnex.png";
import cocaColaImg from "../assets/images/partners/coca-cola.png";
import deltaDmdImg from "../assets/images/partners/delta-dmd.png";
import dinamicImg from "../assets/images/partners/dinamic-tobacco.png";
import g3Img from "../assets/images/partners/g3-spirits.jpg";
import monusImg from "../assets/images/partners/monus.png";
import pmImg from "../assets/images/partners/phillip-moris.png";
import rubinImg from "../assets/images/partners/rubin.png";
import timproImg from "../assets/images/partners/timpro.png";
import vitalImg from "../assets/images/partners/vital.png";
import weitImg from "../assets/images/partners/weitnauer.png";

import classes from "./Partners.module.css";

const partners = props => {
  return (
    <div className={classes.partners}>
      <p className={classes.partnersHeading}>
        {props.isSerbian ? "PARTNERI" : "PARTNERS"}
      </p>
      <div className={classes.partnersLogos}>
        <a
          target="_blank"
          href="https://www.pmi.com/"
          rel="noopener noreferrer"
        >
          <img src={pmImg} alt="" style={{ height: "44px" }} />
        </a>
        <a
          target="_blank"
          href="https://www.bat.com/"
          rel="noopener noreferrer"
        >
          <img src={batImg} alt="" style={{ height: "65px" }} />
        </a>
        <a
          target="_blank"
          href="http://dinamictobacco.rs/en/eng-front-page/"
          rel="noopener noreferrer"
        >
          <img src={dinamicImg} alt="" style={{ height: "60px" }} />
        </a>
        <a
          target="_blank"
          href="https://www.monus.rs/"
          rel="noopener noreferrer"
        >
          <img
            src={monusImg}
            alt=""
            style={{ width: "95px", height: "106px" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.weitnauer.ch/"
          rel="noopener noreferrer"
        >
          <img src={weitImg} alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.coca-cola.rs/sr/home/"
          rel="noopener noreferrer"
        >
          <img
            src={cocaColaImg}
            alt=""
            style={{ width: "81px", height: "81px" }}
          />
        </a>
        <a
          target="_blank"
          href="https://carlsbergsrbija.rs/"
          rel="noopener noreferrer"
        >
          <img
            src={carlsbergImg}
            alt=""
            style={{ width: "96px", height: "69px" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.rubin.rs/"
          rel="noopener noreferrer"
        >
          <img src={rubinImg} alt="" style={{ height: "80px" }} />
        </a>
        <a
          target="_blank"
          href="http://www.g3spirits.com/"
          rel="noopener noreferrer"
        >
          <img src={g3Img} alt="" style={{ width: "135px", height: "65px" }} />
        </a>
        <a target="_blank" href="https://carnex.rs/" rel="noopener noreferrer">
          <img src={carnexImg} alt="" style={{ height: "66px" }} />
        </a>
        <a target="_blank" href="http://vital.rs/" rel="noopener noreferrer">
          <img src={vitalImg} alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.deltadmd.rs/"
          rel="noopener noreferrer"
        >
          <img
            src={deltaDmdImg}
            alt=""
            style={{ width: "135px", height: "80px" }}
          />
        </a>
        <a
          className={classes.spanImg}
          target="_blank"
          href="https://www.atlanticgrupa.com/hr/"
          rel="noopener noreferrer"
        >
          <img src={atlanticImg} alt="" style={{ height: "70px" }} />
        </a>
        <a
          className={classes.spanImg}
          target="_blank"
          href="http://timpro.rs/"
          rel="noopener noreferrer"
        >
          <img src={timproImg} alt="" style={{ height: "70px" }} />
        </a>
      </div>
    </div>
  );
};

export default partners;
