import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import './styles/index.scss';

export const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Navbar />
        <Slider />
      </div>
    </div>
  );
};

