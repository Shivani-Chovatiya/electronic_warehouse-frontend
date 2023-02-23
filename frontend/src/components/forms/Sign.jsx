import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form, Button, Row, Col, Nav } from "react-bootstrap";
import FormContainer from "../checkout/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { emailExist, register } from "../../action/userAction";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [userid, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  // console.log(redirect);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  //console.log(userInfo);

  const emailexists = useSelector((state) => state.emailexists);
  const { data } = emailexists;
  console.log(data);

  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    // e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    //dispatch
    //dispatch(login(email, password));

    e.preventDefault();
    // dispatch(emailExist(email));
    //dispatch
    // //console.log(emailExist(email));
    // if (data == false) {
    //   setMessage("Email is Exists!!!!!!!");
    // } else
    if (password !== confirmPassword) {
      setMessage("Password do not match!!!");
    } else {
      // console.log(userid);
      dispatch(register(userid, name, email, password, mobile_no, gender));
      // history.push("/shop");
    }
  };

  return (
    <div>
      <FormContainer>
        <h2>Register</h2>
        {message && <h4 variant="danger">{message}</h4>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Id"
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="mobile_no">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control
              type="text"
              value={mobile_no}
              placeholder="enter mobile no. "
              onChange={(e) => setMobileNo(e.target.value)}
              pattern="[1-9]{1}[0-9]{9}"
              required
            ></Form.Control>
          </Form.Group>

          {/* <div>
            <Form.Group
              className="mb-3"
              id="formGridRadio"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <Form.Label>Gender</Form.Label>

              <Form.Check
                type="radio"
                label="Male"
                name="gridRadios10"
                value="Male"
                checked
              />

              <Form.Check
                type="radio"
                label="Female"
                name="gridRadios10"
                value="Female"
              />
            </Form.Group>
          </div> */}
          <div>
            <Form.Group
              className="mb-3"
              id="formGridRadio"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <Form.Label>Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                name="gridRadios10"
                value="Male"
                // checked
              />

              <Form.Check
                type="radio"
                label="Female"
                name="gridRadios10"
                value="Female"
              />
            </Form.Group>
          </div>

          <Button type="submit" varient="primary" className="mb-3">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account !
            <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
              {/* <Nav.Link href="/login" className="mb-3">
              <b>Login</b>
            </Nav.Link> */}
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default Sign;
