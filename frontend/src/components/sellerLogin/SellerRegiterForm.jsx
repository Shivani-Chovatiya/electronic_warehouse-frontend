import React, { useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { sellerregister } from "../../action/sellerAction";
import FormContainer from "../checkout/FormContainer";

const SellerRegiterForm = () => {
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [gstno, setGstNo] = useState("");
  const [panno, setPanNo] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPinCode] = useState("");
  const [userid, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [isseller, setIsSeller] = useState("true");

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   c_password: "",
  //   mobile_no: "",
  //   gst: "",
  //   pan: "",
  //   b_add: "",
  //   pin: "",
  //   //gridRadios10: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   //console.log(formValues);
  // };

  const addproductReducer = useSelector((state) => state.addproductReducer);

  const sellerRegister = useSelector((state) => state.sellerRegister);
  const { loading, error, userInfo } = sellerRegister;

  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    //dispatch
    //dispatch(login(email, password));

    if (password !== confirmPassword) {
      setMessage("Password do not match!!!");
    } else {
      dispatch(
        sellerregister(
          name,
          email,
          password,
          mobileno,
          gstno,
          panno,
          address,
          pincode,
          isseller
        )
      );
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

  //   if (!values.name) {
  //     errors.name = "UserName is required";
  //   }
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

  //   if (!values.c_password) {
  //     errors.password = "Confirm Password is required";
  //   } else if (values.c_password !== values.password) {
  //     errors.c_password = "Password doesn't match";
  //   }

  //   if (!values.mobile_no) {
  //     errors.mobile_no = "Mobile No. is required";
  //   } else if (values.mobile_no.length < 10) {
  //     errors.mobile_no = "Mobile No. must be 10 characters";
  //   } else if (values.mobile_no.length > 10) {
  //     errors.mobile_no = "Mobile No. must be 10 characters";
  //   }
  //   if (!values.gst) {
  //     errors.gst = "GST number is required";
  //   }
  //   if (!values.pan) {
  //     errors.pan = "Pan number is required";
  //   } else if (values.pan.length < 12) {
  //     errors.pan = "Pan number must be 12 characters";
  //   } else if (values.pin.length > 12) {
  //     errors.pan = "Pan number must be 12 characters";
  //   }

  //   if (!values.b_add) {
  //     errors.b_add = "Business add. is required";
  //   }
  //   if (!values.pin) {
  //     errors.pin = "Pincode is required";
  //   } else if (values.pin.length < 6) {
  //     errors.pin = "pincode must be 6 characters";
  //   } else if (values.pin.length > 6) {
  //     errors.pin = "pincode must be 6 characters";
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
      <FormContainer>
        <h2>Register</h2>
        {message && <h4 variant="danger">{message}</h4>}
        <Form onSubmit={submitHandler}>
          {/* <Form.Group className="mb-3" controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Id"
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
              required
            ></Form.Control>
          </Form.Group> */}
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
              placeholder="enter mobile no. "
              pattern="[1-9]{1}[0-9]{9}"
              value={mobileno}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>GST No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter GST no."
              value={gstno}
              onChange={(e) => setGstNo(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="number2">
            <Form.Label>Pan Card no.</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Pan Card no."
              value={panno}
              onChange={(e) => setPanNo(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="business">
            <Form.Label>Business Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter business add..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridZip">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter pincode.."
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group controlId="email" required>
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="enter email"></Form.Control>
    </Form.Group> */}

          <Button className="mb-3" type="submit" varient="primary">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account !
            <Link to={redirect ? `login2?redirect=${redirect}` : "/login2"}>
              {/* <Nav.Link href="/login2" className="mb-3">
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

export default SellerRegiterForm;
