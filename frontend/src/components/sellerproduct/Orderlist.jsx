import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrders, getAllOrders } from "../../action/orderAction";

const Orderlist = () => {
  const allordersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allordersState;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders(userInfo.sellerid));
  }, [dispatch]);
  return (
    <div>
      <h1>Orderlist</h1>
      {loading && <h3>Loading....</h3>}
      {error && <h3 variant="danger">Admin Order req fail</h3>}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order.oid}>
                <td>{order.oid}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>₹{order.totalprice} </td>
                <td>{order.createdAt?.substring(0, 10)}</td>
                <td>
                  {order.deliverd ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrders(order.oid));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orderlist;
