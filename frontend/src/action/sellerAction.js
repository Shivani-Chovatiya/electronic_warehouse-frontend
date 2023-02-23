import {
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_REQUEST,
  SELLER_REGISTER_SUCCESS,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGIN_FAIL,
} from "../constants/sellerConstants";
import axios from "axios";
import { USER_LOGOUT } from "../constants/userConstants";

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  // dispatch({ type: ORDER_LIST_MY_RESET });
  // dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LOGOUT });
};

export const sellerregister =
  (
    sname,
    email,
    password,
    mobileno,
    gstno,
    panno,
    address,
    pincode,
    isseller
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: SELLER_REGISTER_REQUEST });
      //const config = { headers: { "Contnet-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:8001/sellers/",
        {
          sname,
          email,
          password,
          mobileno,
          gstno,
          panno,
          address,
          pincode,
          isseller,
        }
        //config
      );
      console.log(
        sname,
        email,
        password,
        mobileno,
        gstno,
        panno,
        address,
        pincode
      );
      dispatch({
        type: SELLER_REGISTER_SUCCESS,
        payload: data,
      });
      //   dispatch({
      //     type: SELLER_LOGIN_SUCCESS,
      //     payload: data,
      //   });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: SELLER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const sellerlogin2 = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGIN_REQUEST });
    //const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      `http://localhost:8001/sellers/login2/`,
      { email, password }
      //config
    );

    //const data1 = await data.json();
    console.log(data);
    // {
    //   data.map((values) => {
    // console.log(values.id);
    dispatch({
      type: SELLER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
    //   });
    // }

    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SELLER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
