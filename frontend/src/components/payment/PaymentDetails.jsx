import React, { useState } from "react";
import { Form, Button, Col, Nav } from "react-bootstrap";
import CheckOut from "../checkout/CheckOut";
import { useHistory, withRouter } from "react-router-dom";
import { savePaymentMethod } from "../../action/cartAction";
import { useDispatch, useSelector } from "react-redux";

const PaymentDetails = ({}) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const history = new useHistory();
  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [payment, setPayment] = useState("Debit");
  return (
    <>
      <CheckOut step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal"
              id="paypal"
              name="gridRadios10"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              id="Debit"
              name="gridRadios10"
              value="Debit"
              onChange={(e) => setPayment(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        {/* <button type="submit">
          continue
          <Nav.Link href="/placeorder">Continue &nbsp;</Nav.Link>
        </button> */}
        <Button type="submit" variant="primary">
          continue
        </Button>
      </Form>
    </>
  );
};

export default withRouter(PaymentDetails);
