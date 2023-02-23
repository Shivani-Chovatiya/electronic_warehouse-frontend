import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { getOrderDetails, payOrder } from "../../action/orderAction";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";

const OrderDetails = () => {
  const ordercreate = useSelector((state) => state.ordercreate);
  const { order: order2, success } = ordercreate;
  const [sdkReady, setSdkReady] = useState(false);

  //let oid = useParams();
  //let orderId = order2.oid;
  //console.log(order2.oid);
  //console.log(order2);
  const dispatch = useDispatch();

  const param = useParams();

  console.log(param.id);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log(order);

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successpay } = orderPay;

  // console.log(result2);
  const successPaymentHandler = (result2) => {
    console.log(result2.id, result2.status, result2.payer);
    // const res = () => {
    //    result.id, result.status, result.payer.email_address;
    // };
    // console.log(res);

    dispatch(
      // payOrder(order2.oid, result.id, result.status, result.payer.email_address)
      payOrder(
        param.id,
        // result2
        result2.id,
        result2.status,
        result2.payer.email_address
      )
    );
  };

  useEffect(() => {
    const addPaypalScript = async () => {
      // const { data: clientId } = await axios.get("http://localhost:8080/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AUfdE8qX-a4PV3wlZfGOfiDwLgd5T4PbnYpJzzosBR6t2HfrWZhEphgKHgdeBBvrHblA7CJY11Bt72ig`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(param.id));
    } else if (!order.paid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order2, order, successpay]);

  // useEffect(() => {
  //   // AUfdE8qX-a4PV3wlZfGOfiDwLgd5T4PbnYpJzzosBR6t2HfrWZhEphgKHgdeBBvrHblA7CJY11Bt72ig
  //   if (!order) {
  //     //dispatch({ type: ORDER_PAY_RESET });
  //     dispatch(getOrderDetails(order2.oid));
  //     // console.log("Helo");
  //   }
  //   // else if (!order.isPaid) {
  //   //   if (!window.paypal) {
  //   //     addPaypalScript();
  //   //   } else {
  //   //     setSdkReady(true);
  //   //   }
  //   // }
  // }, [dispatch, order2]);

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems?.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  // loading ? (
  //   <h3>Loading.....</h3>
  // ) :
  return error ? (
    <h3 variant="danger">{error}</h3>
  ) : (
    <>
      <h2>Order {order?.oid}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>Name : </strong>
              {order?.name}
            </p>
            <p>
              <strong>Email : </strong>
              {order?.email}
            </p>
            <p>
              <strong>Address :</strong>
              {order?.shippingaddress.address}&nbsp;
              {order?.shippingaddress.city}&nbsp;
              {order?.shippingaddress.postalcode}&nbsp;
              {order?.shippingaddress.country}&nbsp;
            </p>
            {order?.deliverd ? (
              <h3 variant="success">Deliverd {order.deliverd}</h3>
            ) : (
              <h3 variant="danger">Not Deliverd</h3>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{order?.paymentmethod}</strong>
            </p>
            {order?.paid ? (
              <h3 variant="success">Paid On {order.paidAt}</h3>
            ) : (
              <h3 variant="danger">Not Paid</h3>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order?.orderitems.length === 0 ? (
              <h2>Your Cart is Empty</h2>
            ) : (
              <ListGroup variant="flush">
                {order?.orderitems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ₹{item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order?.itemsprice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{order?.shippingprice}</Col>
                </Row>
                <Row>
                  <Col>GST</Col>
                  <Col>₹{order?.taxprice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order?.totalprice}</Col>
                </Row>
                {order?.totalprice < 20000 ? (
                  <h3 variant="danger">
                    Sorry...we not give any kind of discount
                  </h3>
                ) : (
                  <Row>
                    <Col>Final Price</Col>
                    <Col>₹{(order?.totalprice * 95) / 100}</Col>
                    <h3 variant="danger">we give 5% discount</h3>
                  </Row>
                )}
                {/* <><Discount /></> */}
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <h3 variant="danger">{error}</h3>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {!order?.paid && (
            <ListGroup.Item>
              {loadingPay}
              {!sdkReady ? (
                <h3> Loading....</h3>
              ) : (
                <PayPalButton
                  amount={order?.totalprice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};

export default OrderDetails;
