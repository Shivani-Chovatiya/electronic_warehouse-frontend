import React, { useEffect } from "react";
import { Col, Row, Table, Card, ListGroup } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteProduct, sellerProduct } from "../../action/productAction";
import { getSellerDetails } from "../../action/sellerAction";

const SellerProfile = () => {
  const dispatch = useDispatch();
  const sellerproduct = useSelector((state) => state.sellerproduct);
  const { loading, error, products } = sellerproduct;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const sellerDetailsReducer = useSelector(
    (state) => state.sellerDetailsReducer
  );
  const { seller } = sellerDetailsReducer;

  console.log(seller);

  const param = useParams();
  console.log(param.id);
  console.log(products);

  useEffect(() => {
    dispatch(getSellerDetails(param.id));
    dispatch(sellerProduct(param.id));
  }, [dispatch, param.id]);
  return (
    <Row>
      <Col md={3}>
        <h3>Seller Information</h3>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Seller Name</th>

                <th>Gst No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{seller?.sname}</td>

                <td>{seller?.gstno}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Col>
      {/* <Col md={3}>
        <h3>Seller Information</h3>
        <Row>
          <Col>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Seller Name: </Col>
                    <Col>
                      <b>{seller?.sname}</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Email: </Col>
                    <Col>
                      <b>{seller?.email}</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Mobile No. :</Col>
                    <Col>
                      <b>{seller?.mobileno}</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Gst No. :</Col>
                    <Col>
                      <b>{seller?.gstno}</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
              
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Col> */}
      <Col md={9}>
        <h3>All Products</h3>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Electronic Item Name</th>
                <th>Prices</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr>
                  <td>
                    <img
                      src={product.image}
                      alt="logo"
                      width="50px"
                      height="50px"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  {/* <td>
                    <Link to={`/seller/editproducts/${product.id}`}>
                      <AiFillEdit style={{ cursor: "pointer" }} />
                    </Link>
                    &nbsp;{" "}
                    <AiFillDelete
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteProduct(product.id));
                      }}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default SellerProfile;
