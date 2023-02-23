import React, { useEffect } from "react";
import { Button, ButtonGroup, Col, Container, Nav, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import AddProduct from "../sellerproduct/AddProduct";
import AllProduct from "../sellerproduct/AllProduct";
import EditProduct from "../sellerproduct/EditProduct";
import Orderlist from "../sellerproduct/Orderlist";
import Userlist from "../sellerproduct/Userlist";

const Sellers = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("userInfo") === null || !userInfo.seller) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Seller Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/seller/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/seller/productlist")}>
                All Product
              </Button>
              <Button onClick={() => history.push("/seller/addproduct")}>
                Add New Product
              </Button>
              <Button onClick={() => history.push("/seller/orderlist")}>
                All Orders
              </Button>
              {/* <Button onClick={() => history.push('/seller/hireman')} >All Request</Button> */}
            </ButtonGroup>
          </Col>

          <Col md={10}>
            <Switch>
              <Route exact path="/seller/addproduct" component={AddProduct} />
              <Route exact path="/seller/productlist" component={AllProduct} />
              <Route
                exact
                path="/seller/editproducts/:id"
                component={EditProduct}
              />
              <Route exact path="/seller/userlist" component={Userlist} />
              <Route exact path="/seller/orderlist" component={Orderlist} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
    // <div className="seller-row">
    //   <div className="seller-col">
    //     <div className="seller-info">
    //       <div className="seller-header">
    //         <img src="./assets/images/seller/1.jpg" alt="" />
    //       </div>
    //       <div className="seller-body">
    //         <span>Dhruvil</span>
    //         <span>Behind Essar pump,jasdan,360050.</span>
    //         <span>dhruvil@gmail.com</span>
    //         <span>8956237895</span>

    //         <div className="seller-footer">
    //           <span className="follow">Follow</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="seller-col">
    //     <h2 className="seller-title">All Products of the Seller Dhruvil</h2>
    //     <div className="seller-products">
    //       <div className="filter-cards">
    //         <div className="filter-card">
    //           <div className="card-header">
    //             <img src="./assets/images/product/1.jpg" alt=" " />
    //             {/* <Nav.Link href="/">
    //               <img
    //                 className="card-sellers"
    //                 src="./assets/images/seller/1.jpg"
    //                 alt=""
    //               />
    //             </Nav.Link> */}
    //           </div>

    //           <div className="card-body">
    //             <Nav.Link href="/">
    //               Redmi Note 10T 5G
    //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
    //             </Nav.Link>
    //             <span className="category">Mobile</span>
    //             <span className="price">₹15,000</span>
    //           </div>
    //           <div className="card-footer">
    //             <button>Add to Cart</button>
    //           </div>
    //         </div>
    //         <div className="filter-card">
    //           <div className="card-header">
    //             <img src="./assets/images/product/6.jpg" alt=" " />
    //             {/* <Nav.Link href="/">
    //               <img
    //                 className="card-sellers"
    //                 src="./assets/images/seller/2.jpg"
    //                 alt=""
    //               />
    //             </Nav.Link> */}
    //           </div>

    //           <div className="card-body">
    //             <Nav.Link href="/">
    //               11th Gen Intel i5
    //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
    //             </Nav.Link>
    //             <span className="category">Laptop</span>
    //             <span className="price">₹55,000</span>
    //           </div>
    //           <div className="card-footer">
    //             <button>Add to Cart</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="filter-page">
    //         <ul>
    //           <li>
    //             <Nav.Link href="#">Prev</Nav.Link>
    //           </li>
    //           <li className="page-active">
    //             <Nav.Link href="#">1</Nav.Link>
    //           </li>
    //           <li>
    //             <Nav.Link href="#">Next</Nav.Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sellers;
