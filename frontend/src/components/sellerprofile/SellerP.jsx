import React, { useEffect, useState } from "react";
import { Button, Form, Row, Table, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { sellerProduct } from "../../action/productAction";
import {
  getSellerDetails,
  updateSellerProfile,
} from "../../action/sellerAction";
import FormContainer from "../checkout/FormContainer";

const SellerP = () => {
  const [sname, setName] = useState("");
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

  const sellerproduct = useSelector((state) => state.sellerproduct);
  const { loading, error, products } = sellerproduct;

  const sellerDetailsReducer = useSelector(
    (state) => state.sellerDetailsReducer
  );
  const { seller } = sellerDetailsReducer;
  console.log(seller);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const sellerUpdateProfileReducer = useSelector(
    (state) => state.sellerUpdateProfileReducer
  );
  const { success } = sellerUpdateProfileReducer;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    // const setDetails = () => {
    //dispatch(getUserDetails(userInfo.id));
    // user.map((users) => {
    if (!userInfo) {
      history.push("/login2");
    } else {
      if (!seller?.sname) {
        dispatch(getSellerDetails(userInfo.sellerid));
        dispatch(sellerProduct(userInfo.sellerid));
      } else {
        setName(seller.sname);
        setEmail(seller.email);
        setMobileNo(seller.mobileno);
        setGstNo(seller.gstno);
        setPanNo(seller.panno);
        setAddress(seller.address);
        setPinCode(seller.pincode);

        // setName(user?.name);
        // setEmail(user?.email);
        // setMobileNo(user?.mobileno);
        // setGender(user?.gender);
      }

      // {
      //   user.map((value) => {
      //     console.log(value.id);
      //     if (!value.name) {
      //       dispatch(getUserDetails(value.id));
      //       // dispatch(listMyOrders());
      //     } else {
      //       setName(value.name);
      //       setEmail(value.email);
      //       setMobileNo(value.mobileno);
      //       setGender(value.gender);
      //     }
      //   });
      // }
    }
    // });
  }, [history, userInfo, seller, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    //dispatch
    dispatch(
      updateSellerProfile(seller.sellerid, {
        sname,
        email,
        password,
        mobileno,
        gstno,
        panno,
        address,
        pincode,
      })
    );
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <h2>Update Information</h2>

          {success && <h3 variant="success">Profile Updated</h3>}

          {/* {message && <h3 variant="danger">{message}</h3>} */}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                value={sname}
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
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h1>My Products</h1>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <td>IMAGE</td>
                <td>Electronic Item Name</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr>
                  <td>
                    <img
                      src={product.image}
                      alt="logo"
                      width="50px"
                      height="50px"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default SellerP;
