import React from "react";
import "./slider.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <h2 className="slider__title">The Power of Simplicity</h2>

      <h3 className="slider__text">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </h3>

      <button className="slider__btn">Learn</button>

      <div className="slider__dots--wrapper">
        <ul className="slider__dots">
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot slider__dot--active"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
        </ul>
      </div>
    </div>
  );
};
