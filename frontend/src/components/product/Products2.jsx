import React, { useEffect, useState } from "react";
import {
  Col,
  Image,
  Row,
  ListGroupItem,
  ListGroup,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  addReview,
  createProductReview,
  tryProducts,
  tryProducts1,
} from "../../action/productAction";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import Rating from "./Rating";

const Products2 = ({ match }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [colour, setColour] = useState("Red");
  const [storage, setStorage] = useState("4/64GB");
  const [qty, setQty] = useState(1);
  const [productdetails, setProductdetails] = useState([]);
  const { id } = useParams();
  // console.log(productdetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  const productTryReducer = useSelector((state) => state.productTryReducer);
  const { tryp } = productTryReducer;

  const productTryReducer1 = useSelector((state) => state.productTryReducer1);
  const { tryp1 } = productTryReducer1;

  const dispatch = useDispatch();
  const listProductdetails = () => {
    const getdata = async () => {
      const resp = await fetch(`http://localhost:8001/product/${id}`);
      const getproduct = await resp.json();
      setProductdetails(getproduct);
      // console.log(getproduct);
    };
    getdata();
  };
  let history = useHistory();
  const addToCartHandler = () => {
    history.push(`/cart/${colour}/${id}?qty=${qty}`);
  };
  // ,colour=${colour},storage=${storage}
  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    listProductdetails();
  }, [dispatch, successProductReview]);

  useEffect(() => {
    dispatch(tryProducts1(id));
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const reveiws = [];
    // {
    //   productdetails.map((product) => {
    // console.log(product.catagory);
    // dispatch(
    //   createProductReview(id, [
    //     { comment, rating, uname: userInfo.name, userid: userInfo.id },
    //   ])
    // );
    //   });
    // }
    dispatch(addReview(id, comment, rating, userInfo.name, userInfo.id));

    console.log(rating, comment);
  };

  return (
    <div>
      <Link to="/shop" className="btn btn-light">
        <i class="fas fa-arrow-left"></i>
        &nbsp; GO BACK
      </Link>
      {/* {productdetails.map((product) => { */}

      <div key={productdetails.id}>
        <Row>
          <Col md={6}>
            <Image src={productdetails.image} alt={productdetails.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup varient="flush">
              <ListGroupItem>
                <h3>{productdetails.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={productdetails.rating}
                  // text={`${productdetails.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : ₹{productdetails.price}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {productdetails.cis > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Colour: </Col>
                <Col value={colour} onChange={(e) => setColour(e.target.value)}>
                  <Form>
                    <Form.Group controlId="formGridState"></Form.Group>
                    <Form.Select>
                      <option value="Red">Red</option>
                      <option value="Navy Blue">Navy Blue</option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
            {/* <ListGroupItem>
              <Row>
                <Col>RAM/Storage: </Col>
                <Col
                  value={storage}
                  onChange={(e) => setStorage(e.target.value)}
                >
                  {" "}
                  <Form>
                    <Form.Group controlId="formGridState"></Form.Group>
                    <Form.Select>
                      <option value="4/64GB">4/64GB</option>
                      <option value="8/64GB">8/64GB</option>
                      <option value="4/128GB">4/128GB</option>
                      <option value="8/128GB">8/128GB</option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem> */}
            <ListGroupItem>
              {" "}
              {tryp1.map((try1) => (
                <Button style={{ "background-color": "transparent" }}>
                  <img
                    src={try1.image}
                    style={{
                      height: "45px",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(tryProducts(try1.tid))}
                  ></img>{" "}
                </Button>
              ))}
            </ListGroupItem>
            &nbsp;
            {productdetails.cis > 0 && (
              <ListGroupItem>
                <Row>
                  <Col>Qty</Col>
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(productdetails.cis).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )}
            &nbsp;
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                onClick={addToCartHandler}
              >
                Add to cart
              </Button>
            </ListGroupItem>
            {"  "} &nbsp;
            <ListGroupItem>
              {tryp.map((try1) => (
                <img src={try1.image} style={{ height: "450px" }}></img>
              ))}
            </ListGroupItem>
          </Col>
        </Row>
        &nbsp;
        <Row>
          <Col>
            <h1>Description</h1>
            <ListGroupItem>
              {productdetails.description}

              <p></p>

              <h4>Offers</h4>
              <p>
                You will get 5% discount everytime when you order that item
                <br /> Up to 7.5% Cashback with HDFC Bank Credit Cards.{" "}
              </p>
            </ListGroupItem>
          </Col>
        </Row>
        &nbsp;
        <Row>
          <Col md={6}>
            <h2>Reviews</h2>
            {productdetails.reveiws?.length === 0 && <h3>No Reviews</h3>}
            <ListGroup variant="flush">
              {productdetails.reveiws?.map((review) => (
                <ListGroup.Item key={review.id}>
                  <strong>{review.uname}</strong>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                {errorProductReview && (
                  <h3 variant="danger">{errorProductReview}</h3>
                )}
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="1">1- Bad</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <h3>
                    Please <Link to="/login">sign in</Link>to write a review
                  </h3>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>

      {/* })} */}
    </div>
  );
};

export default Products2;
