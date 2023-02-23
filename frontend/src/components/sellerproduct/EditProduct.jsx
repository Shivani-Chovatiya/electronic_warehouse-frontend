import React, { useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../action/productAction";

const EditProduct = () => {
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

  const getproductByIdReducer = useSelector(
    (state) => state.getproductByIdReducer
  );
  const { loading, error, product } = getproductByIdReducer;

  const updateproductByIdReducer = useSelector(
    (state) => state.updateproductByIdReducer
  );
  const { updateloading, updatesuccess, updateerror } =
    updateproductByIdReducer;

  const param = useParams();
  console.log(param.id);
  console.log(product?.id);
  console.log(product?.id == param.id);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (product) {
  //     // product?.map((value) => {
  //     //console.log(value);
  //     if (product?.id === param.id) {
  //       setCatagory(product?.catagory);
  //       setName(product?.name);
  //       setPrice(product?.price);
  //       setImage(product?.image);
  //       setDescription(product?.description);
  //       setCis(product?.cis);
  //       setDiscount(product?.discount);
  //       setGst(product?.gst);
  //       setRating(product?.rating);
  //       setReviews(product?.reviews);
  //     } else {
  //       dispatch(getProductById(param.id));
  //     }
  //     // });
  //   } else {
  //     dispatch(getProductById(param.id));
  //   }
  // }, [product, dispatch, param.id]);
  // {
  //   product.map((value) => {
  useEffect(() => {
    // const setDetails = () => {
    if (product) {
      if (product.id == param.id) {
        setCatagory(product.catagory);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setDescription(product.description);
        setCis(product.cis);
        setDiscount(product.discount);
        setGst(product.gst);
        setRating(product.rating);
        // setReviews(product.reviews);
      } else {
        dispatch(getProductById(param.id));
      }
    } else {
      dispatch(getProductById(param.id));
    }
  }, [product, dispatch, param.id]);
  //   });
  // }

  const submitForm = (e) => {
    //console.log(e)
    e.preventDefault();
    // const updatedproduct = {
    //   id: param.id,
    //   name,
    //   price,
    //   image,
    //   description,
    //   cis,
    //   catagory,
    //   discount,
    //   gst,
    //   rating,
    //   reviews,
    // };
    // console.log(product)
    dispatch(
      updateProduct(
        param.id,
        name,
        price,
        image,
        description,
        cis,
        catagory,
        discount,
        gst,
        rating
        // reviews
      )
    );
    console.log("hello");
  };

  return (
    <div>
      {updateloading && <h3>Loading.....</h3>}
      {error && <h3 variant="danger">Add new Product error</h3>}

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
            <img src={product?.image} style={{ height: 50 }} />
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
