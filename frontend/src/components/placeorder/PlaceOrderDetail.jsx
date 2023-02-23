import React, { useEffect } from "react";
import CheckOut from "../checkout/CheckOut";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, orderItems } from "../../action/orderAction";

const PlaceOrderDetail = ({ history }) => {
  const cart = useSelector((state) => state.cart);
 
  const dispatch = useDispatch();
  const ordercreate = useSelector((state) => state.ordercreate);
  const { order, success, error } = ordercreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  // console.log(order);

  // const list = {
  //   orderItems: cart.cartItems,
  // };
  // console.log(list);
  //console.log(cart.cartItems.name);

  const placeOrderHandler = () => {
    // cart.cartItems.map((value) => {
    dispatch(
      createOrder(
        userInfo.name,
        userInfo.email,
        userInfo.id,
        cart.cartItems,
        cart.shippingAddress,
        cart.paymentMethod,
        cart.itemsPrice,
        cart.shippingPrice,
        cart.taxPrice,
        cart.totalPrice
      )
    );
    // });
  };
  // console.log(userInfo.id);
  // console.log(userInfo.email);
  // console.log(userInfo.name);
  // console.log(cart.shippingAddress);
  useEffect(() => {
    if (success) {
      history.push(`/order/${order.oid}`);
    }
    //eslint-disable-next-line
  }, [history, success]);

  return (
    <>
      <CheckOut step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Shipping</h3>
              <p>
                <strong>Address :</strong>
                {cart.shippingAddress.address}&nbsp;
                {cart.shippingAddress.city}&nbsp;
                {cart.shippingAddress.postalcode}&nbsp;
                {cart.shippingAddress.country}&nbsp;
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Payment Method</h3>
              <p>
                <strong>{cart.paymentMethod}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Order Items</h3>
              {cart.cartItems.length === 0 ? (
                <h3>Your Cart is Empty</h3>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
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
          </ListGroup>
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
                  <Col>₹{cart.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{cart.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>GST</Col>
                  <Col>₹{cart.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {error && <h3 variant="danger">{error}</h3>}
              </ListGroup.Item> */}
              <Button
                type="button"
                className="btn-block"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(PlaceOrderDetail);

// dispatch(
//   createOrder({
//     id: userInfo.id,
//     email: userInfo.email,
//     orderItems: {
//       productid: cart.cartItems.product,
//       cis: cart.cartItems.cis,
//       image: cart.cartItems.image,
//       name: cart.cartItems.name,
//       price: cart.cartItems.price,
//       qty: cart.cartItems.qty,
//     },
//     // orderItems: {
//     //   productid: cartItems.product,
//     //   cis: cartItems.cis,
//     //   image: cartItems.image,
//     //   name: cartItems.name,
//     //   price: cartItems.price,
//     //   qty: cartItems.qty,
//     // },
//     shippingAddress: cart.shippingAddress,
//     // paymentMethod: cart.paymentMethod,
//     // itemsPrice: cart.itemsPrice,
//     // shippingPrice: cart.shippingPrice,
//     // taxPrice: cart.taxPrice,
//     // totalPrice: cart.totalPrice,
//   })
// );
