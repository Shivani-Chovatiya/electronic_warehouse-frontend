import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AllProduct from "./AllProduct";

const Home2 = () => {
  const [sellername, setSname] = useState([]);
  // const param = useParams();

  // const id = param.id;
  useEffect(() => {
    const getdata = async () => {
      //   const resp = await fetch(`http://localhost:8001/product/`);
      //   const getproduct = await resp.json();
      //   setProduct(getproduct);
      //   console.log(getproduct);
      const resp1 = await fetch(`http://localhost:8001/product/sname/`);
      const getproduct1 = await resp1.json();
      setSname(getproduct1);
      console.log(getproduct1);
    };
    getdata();
  }, []);
  return (
    <div>
      <div>
        <Row>
          {/* {products.map((product) => (
        <Col key={product.id} md={3}>
          <AllProduct product={product} />
        </Col>
      ))} */}
          {/* // &&
      //   sellername.map((seller) => (
      //     <Col key={seller.sellerid} md={3}>
      //       <AllProduct seller={seller} />
      //     </Col>
      //   ))} */}
          {sellername.map((seller) => (
            <Col key={seller.sellerid} md={3}>
              <AllProduct seller={seller} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home2;
