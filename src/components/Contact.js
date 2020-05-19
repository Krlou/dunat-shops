import React from "react";

import mapIcon from "../assets/images/icons/map-icon.svg";
import emailIcon from "../assets/images/icons/email-icon.svg";
import phoneIcon from "../assets/images/icons/phone-icon.svg";

import classes from "./Contact.module.css";

const contact = (props) => {
  return (
    <footer id="contactId" className={classes.contactSection}>
      <div>
        <p style={{ color: "#ce2026" }}>
          <img
            src={mapIcon}
            alt=""
            width="24px"
            height="24px"
            style={{ verticalAlign: "middle" }}
          />
          <strong>OFFICE</strong>
        </p>
        <p>
          {props.isSerbian ? "Trg Nikole Pašića 7/4" : "Trg Nikole Pasica 7/4"}
        </p>
      </div>
      <div>
        <p style={{ color: "#ce2026" }}>
          <img
            src={phoneIcon}
            alt=""
            width="24px"
            height="24px"
            style={{ verticalAlign: "middle" }}
          />
          <strong>{props.isSerbian ? "TELEFON" : "CALL US"}</strong>
        </p>
        <p>(011)32-88-248</p>
      </div>
      <div>
        <p style={{ color: "#ce2026" }}>
          <img
            src={emailIcon}
            alt=""
            width="24px"
            height="24px"
            style={{ verticalAlign: "middle" }}
          />
          <strong>{props.isSerbian ? "EMAIL" : "EMAIL US"}</strong>
        </p>
        <p>officebeograd@dunat.rs</p>
      </div>
    </footer>
  );
};

export default contact;
