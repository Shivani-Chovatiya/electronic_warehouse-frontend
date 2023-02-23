import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../product/Rating";

const Filter2 = ({ cat }) => {
  console.log(cat.price);
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${cat.id}`}>
          <Card.Img src={cat.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${cat.id}`}>
            <Card.Title as="div">
              <strong>{cat.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={cat.rating}
              // text={`${product.numReviews} reviews`}
            />
            {/* <div className='my-3'>
        {product.rating} from {product.numReviews}
        </div> */}
          </Card.Text>
          <Card.Text as="div">₹{cat.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Filter2;
