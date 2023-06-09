import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllProduct from "./AllProduct";
import { Row, Col } from "react-bootstrap";
import Filter from "../filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../action/productAction";

const Home = () => {
  // const [products, setProduct] = useState([]);
  const [sellername, setSname] = useState([]);
  // const param = useParams();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  console.log(products);
  const dispatch = useDispatch();

  // const id = param.id;
  useEffect(() => {
    // const getdata = async () => {
    //   const resp = await fetch(`http://localhost:8001/product/`);
    //   const getproduct = await resp.json();

    //   setProduct(getproduct);
    //   console.log(getproduct);
    //   // const resp1 = await fetch(`http://localhost:8001/product/sname/`);
    //   // const getproduct1 = await resp1.json();

    //   // setSname(getproduct1);
    //   // console.log(getproduct1);
    // };
    // getdata();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <AllProduct product={product} />
          </Col>
        ))}
      </Row>

      {/* <div>
        <Row>
          {sellername.map((seller) => (
            <Col key={seller.sellerid} md={3}>
              <AllProduct seller={seller} />
            </Col>
          ))}
        </Row>
      </div> */}
      {/* <Row>
        
        <Col key={products?.id} md={3}>
          <AllProduct product={products} seller={sellername} />
        </Col>
      </Row> */}
    </div>
  );
};

export default Home;
