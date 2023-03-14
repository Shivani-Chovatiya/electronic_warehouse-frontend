import axios from "axios";
import {
  DELIVER_ORDER_ALL_FAIL,
  DELIVER_ORDER_ALL_REQUEST,
  DELIVER_ORDER_ALL_SUCCESS,
  ORDER_ALL_FAIL,
  ORDER_ALL_REQUEST,
  ORDER_ALL_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../constants/orderConstants";

export const createOrder =
  (
    name,
    email,
    userid,
    orderitems,
    shippingaddress,
    paymentmethod,
    itemsprice,
    shippingprice,
    taxprice,
    totalprice
    // orderitemsid
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
      //   const {
      //     userLogin: { userInfo },
      //   } = getState();
      //   const config = {
      //     headers: {
      //       "Contnet-Type": "application/json",
      //       Authorization: `Bearer ${userInfo.token}`,
      //     },
      //   };
      const { data } = await axios.post(
        `http://localhost:8001/order/`,
        {
          name,
          email,
          userid,
          orderitems,
          shippingaddress,
          paymentmethod,
          itemsprice,
          shippingprice,
          taxprice,
          totalprice,
        }
        // order
        // config
      );
      console.log(data);
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });

      {
        data.orderitems.map(async (oitem) => {
          const { data1 } = await axios.get(
            `http://localhost:8001/order/orderitems/${oitem.orderitemsid},${email}`

            // order
            // config
          );
        });
      }
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getOrderDetails = (oid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.get(
      `http://localhost:8001/order/${oid}/`
      //config
    );
    console.log(data);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder =
  (oid, id, status, email_address) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });
      // const {
      //   userLogin: { userInfo },
      // } = getState();
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };
      const { data } = await axios.put(
        `http://localhost:8001/order/${oid}/`,
        { id, status, email_address }
        // result
        // paymentResult
        // config
      );
      console.log(data);
      // console.log(id, status, email_address);
      dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// export const orderItems = (list) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_CREATE_REQUEST,
//     });
//     //   const {
//     //     userLogin: { userInfo },
//     //   } = getState();
//     //   const config = {
//     //     headers: {
//     //       "Contnet-Type": "application/json",
//     //       Authorization: `Bearer ${userInfo.token}`,
//     //     },
//     //   };
//     const { data } = await axios.post(
//       "http://localhost:8001/order/",
//       { list }
//       // order
//       // config
//     );

//     console.log(data);
//     dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ORDER_CREATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const getAllOrders = (sellerid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_ALL_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    // const { data } = await axios.get("http://localhost:8001/order/");
    const { data } = await axios.get(
      `http://localhost:8001/order/getorder/${sellerid}/`
    );
    dispatch({ type: ORDER_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deliverOrders = (orderid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVER_ORDER_ALL_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.put(
      `http://localhost:8001/order/deliver/${orderid}/`,

      { orderid }
    );
    alert("Deliverd Success");

    //dispatch({ type: DELIVER_ORDER_ALL_SUCCESS, payload: data });
    const orders = await axios.get(
      "http://localhost:8001/order/"
      // config
    );
    dispatch({ type: DELIVER_ORDER_ALL_SUCCESS, payload: orders.data });
    window.location.href = "/seller/orderlist";
  } catch (error) {
    dispatch({
      type: DELIVER_ORDER_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMyOrders = (userid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.get(
      `http://localhost:8001/order/myorders/${userid}`
      // config
    );
    console.log(data);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
