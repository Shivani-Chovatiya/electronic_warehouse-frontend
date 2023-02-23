import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <span>
                Copyright &copy; 2022,All Rights Reserved,E-Commerce App.
              </span>
            </Col>
            <Col>
              <Nav.Link href="https://www.ficuslot.com/">
                Powered By,
                <b> Ficuslot Pvt. Ltd</b>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="/login2">
                <i className="fa-solid fa-hand-pointer"></i>Become a Seller
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
