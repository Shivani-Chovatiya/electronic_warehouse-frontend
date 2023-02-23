import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Filter from "./Filter";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";

const Allproducts = () => {
  const [products, setProduct] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const filterResult = (cartItem) => {
    const getdata1 = async () => {
      const resp1 = await fetch(`http://localhost:8001/product/${cartItem}/`);
      const getproduct1 = await resp1.json();
      setCatagory(getproduct1);
      console.log(getproduct1);
    };
    getdata1();
  };

  // useEffect(() => {
  const allproduct = () => {
    catagory.length = 0;
    const getdata = async () => {
      const resp = await fetch(`http://localhost:8001/product/`);
      const getproduct = await resp.json();
      setProduct(getproduct);
      console.log(getproduct);
    };
    getdata();
  }; //, []);
  return (
    <div>
      {/* <Button onClick={() => allproduct()}>All</Button> */}
      <Button onClick={() => filterResult("mobile")}>Mobile</Button>
      <Button onClick={() => filterResult("laptop")}>Laptop</Button>

      <div>
        <Row>
          {catagory.map((product) => (
            <Col key={product.id} md={3}>
              <Filter1 product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Allproducts;
