import React, { Component } from "react";

import classes from "./OneImageSlider.module.css";

class OneImageSlider extends Component {
  exitSlideshow = null;

  state = {
    slideIndex: 0,
  };

  componentDidMount() {
    this.showSlides();
  }

  componentWillUnmount() {
    window.clearTimeout(this.exitSlideshow);
  }

  showSlides = () => {
    let slides = document.getElementsByClassName(classes.mySlides);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.setProperty("display", "none");
    }
    let slideIndex = this.state.slideIndex + 1;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.setProperty("display", "block");
    this.setState({ slideIndex: slideIndex });
    this.exitSlideshow = setTimeout(this.showSlides, 3000); // Change image every 3 seconds
  };

  render() {
    let slides = this.props.images.map((image) => {
      return (
        <div className={classes.mySlides} key={image}>
          <img src={image} alt="" style={{ width: "100%" }} />
        </div>
      );
    });

    return <div className={classes.slideshowContainer}>{slides}</div>;
  }
}

export default OneImageSlider;
