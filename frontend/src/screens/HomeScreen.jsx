import React from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        {" "}
        <Allproducts />
      </Container>
      <Social />
    </div>
  );
};

export default HomeScreen;
