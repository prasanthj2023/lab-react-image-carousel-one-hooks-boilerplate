import React, { Component, useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
function Carousel() {
  let [currIndex, setCurrIndex] = useState(0);

  function moveBackard() {
    if (currIndex <= 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  }

  function moveForward() {
    if (currIndex == images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  }

  return (
    <>
      <div id="main">
        <button className="btn" onClick={moveBackard}>
          <ArrowBackIosIcon />
        </button>
        <div id="image">
          <img src={images[currIndex].img} alt="" />
          <h1>{images[currIndex].title}</h1>
          <p>{images[currIndex].subtitle}</p>
        </div>

        <button className="btn" onClick={moveForward}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default Carousel;
