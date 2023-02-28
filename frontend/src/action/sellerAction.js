import {
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_REQUEST,
  SELLER_REGISTER_SUCCESS,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGIN_FAIL,
  SELLER_DETAILS_REQUEST,
  SELLER_DETAILS_SUCCESS,
  SELLER_DETAILS_FAIL,
  SELLER_UPDATE_PROFILE_REQUEST,
  SELLER_UPDATE_PROFILE_SUCCESS,
  SELLER_UPDATE_PROFILE_FAIL,
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

export const getSellerDetails = (sellerid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELLER_DETAILS_REQUEST,
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
      `http://localhost:8001/sellers/${sellerid}`
      //config
    );
    console.log(data);
    dispatch({ type: SELLER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SELLER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSellerProfile =
  (sellerid, seller) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SELLER_UPDATE_PROFILE_REQUEST,
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
        `http://localhost:8001/sellers/${sellerid}`,
        // { id, name, email, password, mobileno, gender }
        seller
        //config
      );
      // console.log(data);
      dispatch({ type: SELLER_UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SELLER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
