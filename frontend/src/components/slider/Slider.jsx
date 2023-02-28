import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Container } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  // const [currentState, setCurrentState] = useState(0);
  // const bgImageStyle = {
  //   backgroundImage: `URL(${imageSlide[currentState].URL})`,
  //   backgroundPosition: "center",
  //   backGroundSize: "cover",
  //   height: "100%",
  // };

  return (
    <div className="container-fluid">
      <div
        id="myCarousel"
        className="carousel slide carousel-bg"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item">
            <img src="../slider/3.jpg" className="pull-right" alt="" />

            <div className="carousel-caption">
              <h4>E-Commerce App</h4>
              <p>
                Companies and individuals that buy and sell goods and services
                over the internet.
              </p>
              {/* <button type="submit" className="btn btn-dark">
                Buy With us
              </button> */}
              {/* <Nav.Link href="/shop">Buy With Us</Nav.Link> */}
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
