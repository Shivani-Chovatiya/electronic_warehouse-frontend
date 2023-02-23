import React, { useEffect } from "react";
import { deleteUser, getallUser } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallUser());
  }, [dispatch]);
  return (
    <div>
      <h1>Userlist</h1>
      {loading && <h3>Loading....</h3>}
      {error && <h3 variant="danger">Error While Fetching Users</h3>}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User Id</th>
            <th> Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user.id));
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

export default Userlist;
