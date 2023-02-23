import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  getProducts,
  updateProducts,
} from "../../action/productAction";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [cis, setCis] = useState();
  const [catagory, setCatagory] = useState("");
  const [discount, setDiscount] = useState("");
  const [gst, setGst] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [sellerid, setSellerId] = useState();

  // const [product, setProduct] = useState([]);

  const addproduct = useSelector((state) => state.addproduct);
  const { loading, error, success } = addproduct;

  const sellerlogin = useSelector((state) => state.sellerlogin);
  const { userInfo } = sellerlogin;

  //console.log(userInfo.seller);

  const dispatch = useDispatch();

  const location = useLocation();

  const refresh = () => {
    window.location.reload(true);
  };

  const submitForm = (e) => {
    //console.log(e)
    e.preventDefault();

    // product = {
    //   catagory,
    //   cis,
    //   description,
    //   discount,
    //   gst,
    //   image,
    //   name,
    //   price,
    //   rating,
    //   reviews,
    // };
    // console.log(product);
    // dispatch(addProducts(product));

    dispatch(
      addProducts(
        catagory,
        cis,
        description,
        discount,
        gst,
        image,
        name,
        price,
        rating,
        // reviews,
        userInfo.sellerid,
        userInfo.sname,
        userInfo.email,
        userInfo.password,
        userInfo.mobileno,
        userInfo.gstno,
        userInfo.panno,
        userInfo.address,
        userInfo.pincode,
        userInfo.seller
      )
    );

    //dispatch(getProducts(name));

    // dispatch(
    //   updateProducts(
    //     userInfo.sellerid,
    //     userInfo.name,
    //     userInfo.email,
    //     userInfo.password,
    //     userInfo.mobileno,
    //     userInfo.gstno,
    //     userInfo.panno,
    //     userInfo.address,
    //     userInfo.pincode,
    //     userInfo.seller,
    //     addproduct.productItems
    //     //dispatch(getProducts(name))
    //   )
    // );
    // console.log(data());
    //console.log(dispatch(getProducts(name)));
  };

  // const add = () => {
  //   dispatch(
  //     addProducts(
  //       catagory,
  //       cis,
  //       description,
  //       discount,
  //       gst,
  //       image,
  //       name,
  //       price,
  //       rating,
  //       reviews
  //     )
  //   );
  // };

  // console.log(product);
  // const update = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:8001/product/select/${name}`
  //   );
  //   console.log(data);
  //   dispatch(
  //     updateProducts(
  //       userInfo.sellerid,
  //       userInfo.name,
  //       userInfo.email,
  //       userInfo.password,
  //       userInfo.mobileno,
  //       userInfo.gstno,
  //       userInfo.panno,
  //       userInfo.address,
  //       userInfo.pincode,
  //       userInfo.seller,
  //       data
  //       //addproduct.productItems
  //     )
  //   );
  // };

  return (
    <div>
      {loading && <h4>Loading......</h4>}
      {error && <h3 variant="danger">Add new Product error</h3>}

      {success && <h3 variant="success">Product Added Successfully</h3>}

      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="catagory">
            <Form.Label>Catagory</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter catagory"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              value={cis}
              onChange={(e) => setCis(e.target.value)}
              placeholder="Enter Stock"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gst">
            <Form.Label>Gst</Form.Label>
            <Form.Control
              type="text"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              placeholder="Enter gst"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>

            <Form.Control
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter Rating"
              required
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="reviews">
            <Form.Label>Review</Form.Label>
            <Form.Control
              type="text"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
              placeholder="Enter Reviews"
              required
            />
          </Form.Group> */}
        </Row>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
