import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../action/cartAction";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const CartDetail = ({ match }) => {
  const location = useLocation();
  const { id } = useParams();
  const productId = id;
  //console.log(productId);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  // console.log(qty);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  //console.log(cartItems);

  const removeFromCartHandler = (id) => {
    //console.log(id);
    dispatch(removeFromCart(id));
  };

  const history = useHistory();

  const checkout = () => {
    history.push("/login?redirect=shipping");
    // history.push("/shipping");
  };

  //const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   const getdata = async () => {
  //     const resp = await fetch(`http://localhost:8002/product/${id}`);
  //     const getproduct = await resp.json();
  //     setProduct(getproduct);
  //     // console.log(getproduct);
  //   };
  //   getdata();
  // }, [id]);

  return (
    // <div className="cart-row">
    //   <h2 className="cart-title">My Cart</h2>
    //   <div className="cart-items">
    //     <div className="cart-col">
    //       <div className="cart-cards">
    //         <div className="filter-card">
    //           <div className="card-header">
    //             <img src="./assets/images/product/2.jpg" alt=" " />
    //             <Nav.Link href="/">
    //               <img
    //                 className="card-sellers"
    //                 src="./assets/images/seller/2.jpg"
    //                 alt=""
    //               />
    //             </Nav.Link>
    //           </div>

    //           <div className="card-body">
    //             <Nav.Link href="/">
    //               Realme Narzo 20 Pro
    //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
    //             </Nav.Link>
    //             <span className="category">Mobile</span>
    //             <span className="price">₹25,000</span>
    //           </div>
    //           <div className="card-footer cart">
    //             <button>Delete</button>
    //           </div>
    //         </div>

    //         <div className="filter-card">
    //           <div className="card-header">
    //             <img src="./assets/images/product/2.jpg" alt=" " />
    //             <Nav.Link href="/">
    //               <img
    //                 className="card-sellers"
    //                 src="./assets/images/seller/2.jpg"
    //                 alt=""
    //               />
    //             </Nav.Link>
    //           </div>

    //           <div className="card-body">
    //             <Nav.Link href="/">
    //               Realme Narzo 20 Pro
    //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
    //             </Nav.Link>
    //             <span className="category">Mobile</span>
    //             <span className="price">₹25,000</span>
    //           </div>
    //           <div className="card-footer cart">
    //             <button>Delete</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="cart-col">
    //       <div className="cart-bil">
    //         <h4 className="bill-title">Bill</h4>
    //         <div className="bill-groups">
    //           <div className="bill-group"></div>
    //           <div className="bill-group"></div>
    //         </div>
    //         <div className="bill-total">
    //           <div className="bill-group">
    //             <span>SubTotal: </span>
    //             <span>₹25000</span>
    //           </div>
    //           <div className="bill-group">
    //             <span>GST 5%: </span>
    //             <span>500</span>
    //           </div>
    //           <div className="bill-group">
    //             <span>Total: </span>
    //             <span>₹25500</span>
    //           </div>
    //         </div>
    //         <div className="bill-btn">
    //           <Nav.Link href="/shipping">
    //             <button>CheckOut</button>
    //           </Nav.Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <Row>
        <Col md={8}>
          <h2>Shopping Cart</h2>
          {cartItems?.length === 0 ? (
            <h4>
              Your Cart is Empty !<Link to="/shop">Go Back</Link>
            </h4>
          ) : (
            <ListGroup variant="flush">
              {cartItems?.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>₹{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.cis).keys()]?.map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  subtotal (
                  {cartItems?.reduce((acc, item) => acc + item.qty, 0)}) items
                </h2>
                ₹
                {cartItems
                  ?.reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>

              <Button
                type="button"
                className="btn-block"
                disabled={cartItems?.length === 0}
                onClick={checkout}
              >
                Proceed to checkOut
              </Button>
              {/* <Button
             type="button"
             className="btn-block"
             disabled={product.length === 0}
             onClick={checkout} >
             Proceed to checkOut
           </Button> */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartDetail;
