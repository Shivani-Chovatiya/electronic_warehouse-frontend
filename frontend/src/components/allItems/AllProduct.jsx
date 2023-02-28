import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
// import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import { Button, Image, Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../product/Rating";

const AllProduct = ({ product }) => {
  //console.log(product);
  // console.log(seller);
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
          {/* <div>
            {product1?.map((seller) => {
              <Card.Text as="div">{seller.sname}</Card.Text>;
            })}
          </div> */}

          <Card.Text as="div">
            Seller Name:
            <Link to={`/profile2/${product.sellerid}`}>{product.sname}</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllProduct;
