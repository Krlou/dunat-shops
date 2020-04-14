import React, { Component } from "react";

import AboutShop from "./AboutShop";
import Products from "./Products";
import OneImageSlider from "./OneImageSlider";
import MultipleImageSlider from "./MultipleImageSlider";

//add images for pcs sava
import img1 from "../assets/images/shop-sava/img1-wide.jpg";
import img2 from "../assets/images/shop-sava/img2-wide.jpg";
import img3 from "../assets/images/shop-sava/img3-wide.jpg";
import img4 from "../assets/images/shop-sava/img4-wide.jpg";
import img5 from "../assets/images/shop-sava/img5-wide.jpg";
import img6 from "../assets/images/shop-sava/img6-wide.jpg";
import img7 from "../assets/images/shop-sava/img7-wide.jpg";
import img8 from "../assets/images/shop-sava/img8-wide.jpg";
import img9 from "../assets/images/shop-sava/img9-wide.jpg";
import img10 from "../assets/images/shop-sava/img10-wide.jpg";
import img11 from "../assets/images/shop-sava/img11-wide.jpg";

import img1Pro from "../assets/images/shop-sava/img1-pro.jpg";
import img2Pro from "../assets/images/shop-sava/img2-pro.jpg";
import img3Pro from "../assets/images/shop-sava/img3-pro.jpg";
import img4Pro from "../assets/images/shop-sava/img4-pro.jpg";
import img5Pro from "../assets/images/shop-sava/img5-pro.jpg";
import img6Pro from "../assets/images/shop-sava/img6-pro.jpg";
import img7Pro from "../assets/images/shop-sava/img7-pro.jpg";
import img8Pro from "../assets/images/shop-sava/img8-pro.jpg";
import img9Pro from "../assets/images/shop-sava/img9-pro.jpg";
import img10Pro from "../assets/images/shop-sava/img10-pro.jpg";
import img11Pro from "../assets/images/shop-sava/img11-pro.jpg";

import img1Tablet from "../assets/images/shop-sava/img1-tablet.jpg";
import img2Tablet from "../assets/images/shop-sava/img2-tablet.jpg";
import img3Tablet from "../assets/images/shop-sava/img3-tablet.jpg";
import img4Tablet from "../assets/images/shop-sava/img4-tablet.jpg";
import img5Tablet from "../assets/images/shop-sava/img5-tablet.jpg";
import img6Tablet from "../assets/images/shop-sava/img6-tablet.jpg";
import img7Tablet from "../assets/images/shop-sava/img7-tablet.jpg";
import img8Tablet from "../assets/images/shop-sava/img8-tablet.jpg";

import img1Phone from "../assets/images/shop-sava/img1-phone.jpg";
import img2Phone from "../assets/images/shop-sava/img2-phone.jpg";
import img3Phone from "../assets/images/shop-sava/img3-phone.jpg";
import img4Phone from "../assets/images/shop-sava/img4-phone.jpg";
import img5Phone from "../assets/images/shop-sava/img5-phone.jpg";
import img6Phone from "../assets/images/shop-sava/img6-phone.jpg";
import img7Phone from "../assets/images/shop-sava/img7-phone.jpg";
import img8Phone from "../assets/images/shop-sava/img8-phone.jpg";
import img9Phone from "../assets/images/shop-sava/img9-phone.jpg";
import img10Phone from "../assets/images/shop-sava/img10-phone.jpg";
import img11Phone from "../assets/images/shop-sava/img11-phone.jpg";

class ShopSava extends Component {
  render() {
    let images = []; //also add images in array
    let width = window.innerWidth; //current device width
    if (width > 1050) {
      //laptops
      images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11
      ];
    } else if (width > 950) {
      //ipadPro
      images = [
        img1Pro,
        img2Pro,
        img3Pro,
        img4Pro,
        img5Pro,
        img6Pro,
        img7Pro,
        img8Pro,
        img9Pro,
        img10Pro,
        img11Pro
      ];
    } else if (width > 500) {
      //tablets
      images = [
        img1Tablet,
        img2Tablet,
        img3Tablet,
        img4Tablet,
        img5Tablet,
        img6Tablet,
        img7Tablet,
        img8Tablet
      ];
    } else {
      //phone
      images = [
        img1Phone,
        img2Phone,
        img3Phone,
        img4Phone,
        img5Phone,
        img6Phone,
        img7Phone,
        img8Phone,
        img9Phone,
        img10Phone,
        img11Phone
      ];
    }

    let slider =
      width < 1000 ? (
        <OneImageSlider images={images} />
      ) : (
        <MultipleImageSlider images={images} />
      );
    return (
      <React.Fragment>
        {slider}
        <Products isSerbian={this.props.isSerbian} />
        <AboutShop isSerbian={this.props.isSerbian} />
      </React.Fragment>
    );
  }
}

export default ShopSava;
