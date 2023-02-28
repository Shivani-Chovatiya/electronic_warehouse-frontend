import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../../action/userAction";
import { listMyOrders } from "../../action/orderAction";
import { useHistory, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [userid, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  //console.log(user.name);

  // {
  //   user.map((users) => {
  //     console.log(users);

  //     console.log(users.name);
  //   });
  // }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;
  console.log(orders);
  // const [userdetails, setUserdetails] = useState([]);

  // useEffect(() => {
  //   const getdata = async () => {
  //     const resp = await fetch(
  //       `http://localhost:8000/registration/${userInfo.id}/`
  //     );
  //     const getproduct = await resp.json();
  //     setUserdetails(getproduct);
  //     console.log(getproduct);
  //   };
  //   getdata();
  // });

  const history = useHistory();
  useEffect(() => {
    // const setDetails = () => {
    //dispatch(getUserDetails(userInfo.id));
    // user.map((users) => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails(userInfo.id));
        dispatch(listMyOrders(userInfo.id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setMobileNo(user.mobileno);
        setGender(user.gender);

        // setName(user?.name);
        // setEmail(user?.email);
        // setMobileNo(user?.mobileno);
        // setGender(user?.gender);
      }

      // {
      //   user.map((value) => {
      //     console.log(value.id);
      //     if (!value.name) {
      //       dispatch(getUserDetails(value.id));
      //       // dispatch(listMyOrders());
      //     } else {
      //       setName(value.name);
      //       setEmail(value.email);
      //       setMobileNo(value.mobileno);
      //       setGender(value.gender);
      //     }
      //   });
      // }
    }
    // });
  }, [history, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    //dispatch
    dispatch(
      updateUserProfile({
        id: user.id,
        name,
        email,
        password,
        mobileno,
        gender,
      })
    );
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <h1>Update Information</h1>
          {error && <h3 varient="danger">{error}</h3>}
          {success && <h3 variant="success">Profile Updated</h3>}
          {loading}
          {message && <h3 variant="danger">{message}</h3>}
          <Form onSubmit={submitHandler}>
            {/* <Form.Group className="mb-3" controlId="id">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Id"
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
                required
              ></Form.Control>
            </Form.Group> */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mobile_no">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="text"
                value={mobileno}
                placeholder="enter mobile no. "
                onChange={(e) => setMobileNo(e.target.value)}
                pattern="[1-9]{1}[0-9]{9}"
              ></Form.Control>
            </Form.Group>
            <div>
              <Form.Group
                className="mb-3"
                id="formGridRadio"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gridRadios10"
                  value="Male"
                  // checked
                />

                <Form.Check
                  type="radio"
                  label="Female"
                  name="gridRadios10"
                  value="Female"
                />
              </Form.Group>
            </div>

            <Button type="submit" varient="primary">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h1>My Orders</h1>
          {loadingOrders ? (
            <h3>Loading....</h3>
          ) : errorOrders ? (
            <h3 variant="danger">{errorOrders}</h3>
          ) : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>DATE</td>
                  <td>TOTAL</td>
                  <td>PAID</td>
                  <td>DELIVERD</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => (
                    <tr key={order.oid}>
                      <td>{order.oid}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalprice}</td>
                      <td>
                        {order.paid ? (
                          order.paidAt //.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        {order.deliverd ? (
                          //order.deliverAt//.substring(0, 10)
                          <h5 className="text-success">Deliverd</h5>
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        <LinkContainer to={`/order/${order.oid}`}>
                          <Button variant="light">Details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          )}

          {/* <h1>FORM REQUEST STATUS</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>

              <th>Username</th>
              <th>DATE</th>
              <th>APPROVED</th>
            </tr>
          </thead>
          <tbody>
            {men && men.map(man => (
              <tr key={man._id} >

                <td>{man.firstname}</td>
                <td>{man.createdAt?.substring(0, 10)}</td>
                <td> {man.isApprove ? (

                  <h5 className='text-success'>Approved</h5>
                ) : (
                  <i
                    className="fas fa-times"
                    style={{ color: "red" }}
                  ></i>
                )}</td>

              </tr>

            ))}


          </tbody>
        </Table> */}
        </Col>
      </Row>
    </>
  );
};

export default UserProfile;
