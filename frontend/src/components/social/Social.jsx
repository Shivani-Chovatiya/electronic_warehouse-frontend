import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social-row">
      <h2>Follow Us On Social Media</h2>
      <div className="socials-group">
        <Nav.Link href="/">
          <img src="./assets/images/logo/fb.jpg" alt="" />
        </Nav.Link>
        <Nav.Link href="/">
          <img src="./assets/images/logo/in.jpg" alt="" />
        </Nav.Link>
      </div>
    </div>
  );
};

export default Social;
