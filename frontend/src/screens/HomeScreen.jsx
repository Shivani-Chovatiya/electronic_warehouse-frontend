import React from "react";
import Allproducts from "../components/filter/Allproducts";
import Latest from "../components/latest/Latest";
import Slider from "../components/slider/Slider";
import Social from "../components/social/Social";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div>
      <Slider />
      {/* <Latest /> */}
      <Allproducts />
      <Social />
    </div>
  );
};

export default HomeScreen;
