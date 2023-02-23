import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Nav } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import FormContainer from "../checkout/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userAction";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  //console.log(redirect);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  //console.log(userInfo);

  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(email, password);
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <div>
      <FormContainer>
        <h2>SIGN IN</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              // name="email"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          {/* <p>{formErrors.email}</p> */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              //name="password"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              // onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          {/* <p>{formErrors.password}</p> */}
          <Button className="mb-3" type="submit" varient="primary">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            New Customer ?
            <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
              {/* <Nav.Link type="button" className="mb-3" href="/register">
              Register
            </Nav.Link> */}
              Register
            </Link>
          </Col>
        </Row>
        {/* <Row>
        <Col>
          <Link to={"/forgotpassword"}>Forgot Password ?</Link>
        </Col>
      </Row> */}
      </FormContainer>
    </div>
  );
};

export default Signin;
