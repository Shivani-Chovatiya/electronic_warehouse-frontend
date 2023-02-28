import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { searchProduct } from "../action/productAction";
import { logout } from "../action/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //console.log(userInfo);
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");

  const history = useHistory();

  function onLinkClick(e) {
    e.preventDefault();
    if (!userInfo.name) {
      history.push("/profile2");
    } else {
      history.push("/profile");
    }
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    //console.log("Logout");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" variant="dark" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">E-Commerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ml-2 ml-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="/login">
                <i className="fa-solid fa-user"></i>
                Login
              </Nav.Link> */}
              {userInfo ? (
                // <NavDropdown title={userInfo.name}>
                //   <LinkContainer to="/profile">
                //     <NavDropdown.Item>Profile</NavDropdown.Item>
                //   </LinkContainer>
                //   <NavDropdown.Item onClick={logoutHandler}>
                //     Logout
                //   </NavDropdown.Item>
                // </NavDropdown>
                <NavDropdown
                  title={userInfo.name || userInfo.sname}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={onLinkClick}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i>
                  &nbsp; Login
                </Nav.Link>
              )}

              <Nav.Link href="/allitem">
                &nbsp; <i class="fa-solid fa-cart-shopping"></i>All Product
              </Nav.Link>

              <Nav.Link href="/shop">
                <i className="fa-solid fa-cart-shopping"></i>Catagory
              </Nav.Link>

              <Nav.Link href="/cart">
                &nbsp;
                <i className="fa-sharp fa-solid fa-bag-shopping"></i>Cart
              </Nav.Link>

              <Nav.Link href="/contact">
                &nbsp;
                <i className="fa-sharp fa-solid fa-bag-shopping"></i>Contact Us
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchkey}
                onChange={(e) => setsearchkey(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => {
                  dispatch(searchProduct(searchkey));
                }}
              >
                Search
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
