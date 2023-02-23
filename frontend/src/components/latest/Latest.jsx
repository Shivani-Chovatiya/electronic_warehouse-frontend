import React, { useEffect, useState } from "react";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Catagories from "../catagory/Catagories";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../action/productAction";

const Latest = () => {
  // const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  // useEffect(() => {
  //   dispatch(listProducts());
  //   console.log(products);
  // }, [dispatch]);

  // const [data, setData] = useState(Catagories);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const resp = await fetch("http://localhost:8000/product/");
      const getproduct = await resp.json();
      setProduct(getproduct);
      // console.log(getproduct);
    };
    getdata();
  });
  return (
    <Card className="my-3 p-3 rounded">
      <div>
        <div className="latest-col">
          <h2>New Product</h2>
          <div className="latest-product">
            {/* {
            data.map((values)=>{

              return(
                <>
                  <div className="latest-group" key={values.id}>
            <div className="latest-header">
              <img src={values.image} alt=" " />
              <Link to="/">
            <img
              className="card-sellers"
              src="./assets/images/seller/1.jpg"
              alt=""
            />
          </Link>
            </div>
            <div className="latest-body">
              <Nav.Link href="/product:id">
                {values.title}
                <i className="fa-solid fa-eye"></i>
              </Nav.Link>
              <span className="category">{values.catagory}</span>
              <span className="price">₹{values.price}</span>
            </div>
          </div>
                </>
              )
            })
          } */}

            {product.map((products) => {
              return (
                <>
                  <div key={products.id}>
                    <div>
                      <Card.Img src={products.image} alt=" " />
                      {/* <Link to="/">
                      <img
                        className="card-sellers"
                        src="./assets/images/seller/1.jpg"
                        alt=""
                      />
                    </Link> */}
                    </div>
                    <Card.Body>
                      <Card.Title as="div">
                        <Nav.Link href={`product/${products.id}`}>
                          {products.name}
                          <i className="fa-solid fa-eye"></i>
                        </Nav.Link>
                      </Card.Title>
                      <Card.Text as="div">{products.catagory}</Card.Text>
                      <Card.Text as="div">₹{products.price}</Card.Text>
                    </Card.Body>
                  </div>
                </>
              );
            })}
            {/* <div className="latest-group" key={products.id}>
            <div className="latest-header">
              <img src={products.image} alt="" />
              <Link to="/">
                <img
                  className="card-sellers"
                  src="./assets/images/seller/1.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="latest-body">
              <Nav.Link href="/product:id">
                {products.name}
                <i className="fa-solid fa-eye"></i>
              </Nav.Link>
              <span className="category">{values.catagory}</span>
              <span className="price">₹{products.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Latest;
