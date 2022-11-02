import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import './styles/index.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <Slider />
      </div>
    </div>
  );
};

