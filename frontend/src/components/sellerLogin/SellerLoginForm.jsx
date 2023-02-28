import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Nav } from "react-bootstrap";
import { useLocation, Link, useHistory } from "react-router-dom";
import FormContainer from "../checkout/FormContainer";
import { sellerlogin, sellerlogin2 } from "../../action/sellerAction";
import { useDispatch, useSelector } from "react-redux";

const SellerLoginForm = () => {
  // return (
  //   <>
  //     <Form>
  //       <Form.Group className="mb-3" controlId="email">
  //         <Form.Label>Email Address</Form.Label>
  //         <Form.Control type="email" placeholder="enter email"></Form.Control>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           placeholder="enter password"
  //         ></Form.Control>
  //       </Form.Group>
  //       <Button className="mb-3" type="submit" varient="primary">
  //         SING IN
  //       </Button>
  //     </Form>
  //     <Row>
  //       <Col>
  //         New Customer ?
  //         {/* <Link to={redirect ? `register?redirect=${redirect}` : "/register"}> */}
  //         <Nav.Link className="mb-3" href="/register2">
  //           Register
  //         </Nav.Link>
  //       </Col>
  //     </Row>
  //     {/* <Row>
  //       <Col>
  //         <Link to={"/forgotpassword"}>Forgot Password ?</Link>
  //       </Col>
  //     </Row> */}
  //   </>
  // );

  // const initialValues = {
  //   email: "",
  //   password: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   //console.log(formValues);
  // };
  const sellerlogin = useSelector((state) => state.sellerlogin);
  const { loading, error, userInfo } = sellerlogin;
  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);

    if (dispatch(sellerlogin2(email, password)) != null) {
      setMessage("Enter valid Password...");
    } else {
      //dispatch
      dispatch(sellerlogin2(email, password));
    }
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 5) {
  //     errors.password = "Password must be >5 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password must be <10 characters";
  //   }

  //   return errors;
  // };

  return (
    <div>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      {/* <div className="form-row">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-btn">
            <button>Login</button>
          </div>
          <div className="form-footer">
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div> */}
      <FormContainer>
        <h2>SIGN IN</h2>
        {message && <h4 variant="danger">{message}</h4>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          {/* <p>{formErrors.email}</p> */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          {/* <p>{formValues.password}</p> */}
          <Button className="mb-3" type="submit" varient="primary">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            New Customer ?
            <Link
              to={redirect ? `register2?redirect=${redirect}` : "/register2"}
            >
              {/* <Nav.Link className="mb-3" href="/register2">
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

export default SellerLoginForm;
