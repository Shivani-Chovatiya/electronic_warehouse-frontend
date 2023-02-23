import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../product/Rating";

const Filter1 = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              // text={`${product.numReviews} reviews`}
            />
            {/* <div className='my-3'>
          {product.rating} from {product.numReviews}
          </div> */}
          </Card.Text>
          <Card.Text as="div">₹{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Filter1;
