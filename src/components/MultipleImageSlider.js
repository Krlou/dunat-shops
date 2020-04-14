import React, { Component } from "react";

import classes from "./MultipleImageSlider.module.css";

class MultipleImageSlider extends Component {
  exitSlideshow = null;

  state = {
    slideIndex: 1
  };

  componentDidMount() {
    this.showSlides();
  }

  componentWillUnmount() {
    window.clearTimeout(this.exitSlideshow);
  }

  showSlides = () => {
    //console.log("slideshow");
    let slides = document.getElementsByClassName(classes.slide);

    let slideIndex = this.state.slideIndex;
    if (slideIndex === 0) {
      slides[0].children[0].src = this.props.images[
        this.props.images.length - 1
      ];
    } else {
      slides[0].children[0].src = this.props.images[slideIndex - 1];
    }
    slides[1].children[0].src = this.props.images[slideIndex];
    if (slideIndex === this.props.images.length - 1) {
      slides[2].children[0].src = this.props.images[0];
      slideIndex = 0;
    } else {
      slides[2].children[0].src = this.props.images[slideIndex + 1];
      slideIndex++;
    }
    this.setState({ slideIndex: slideIndex });
    this.exitSlideshow = setTimeout(this.showSlides, 3000); // Change image every 3 seconds
  };

  render() {
    return (
      <div className={classes.slideshowContainer}>
        <div className={classes.slide} style={{ flexBasis: "20%" }}>
          <img
            className={classes.sideSlide}
            alt=""
            src={this.props.images[0]}
          />
        </div>

        <div className={classes.slide} style={{ flexBasis: "60%" }}>
          <img alt="" src={this.props.images[1]} />
        </div>
        <div className={classes.slide} style={{ flexBasis: "20%" }}>
          <img
            alt=""
            className={classes.sideSlide}
            src={this.props.images[2]}
          />
        </div>
      </div>
    );
  }
}

export default MultipleImageSlider;
