import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../allItems/Home";
import Rating from "../product/Rating";

const Filter1 = ({ product }) => {
  console.log(product);
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
          </Card.Text>
          <Card.Text as="div">₹{product.price}</Card.Text>
        </Card.Body>
      </Card>

      {/* // <Card className="my-3 p-3 rounded">
      //   <Link to={`/product/${product.id}`}>
      //     <Card.Img src={product.image} variant="top" />
      //   </Link>
      //   <Card.Body>
      //     <Link to={`/product/${product.id}`}>
      //       <Card.Title as="div">
      //         <strong>{product.name}</strong>
      //       </Card.Title>
      //     </Link>
      //     <Card.Text as="div">
      //       <Rating
      //         value={product.rating}
             
      //       />
           
      //     </Card.Text>
      //     <Card.Text as="div">₹{product.price}</Card.Text>
      //   </Card.Body>
      // </Card> */}
    </>
  );
};

export default Filter1;
