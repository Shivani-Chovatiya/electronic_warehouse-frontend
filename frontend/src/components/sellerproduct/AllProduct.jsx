import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  listProducts,
  sellerProduct,
} from "../../action/productAction";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const dispatch = useDispatch();
  const sellerproduct = useSelector((state) => state.sellerproduct);
  const { loading, error, products } = sellerproduct;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo.sellerid);
  console.log(products);

  useEffect(() => {
    dispatch(sellerProduct(userInfo.sellerid));
  }, [dispatch, userInfo.sellerid]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Electronic Item Name</th>
            <th>Prices</th>
            <th>Action</th>
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
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllProduct;
