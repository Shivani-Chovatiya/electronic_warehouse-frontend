import axios from "axios";
import swal from "sweetalert";
import {
  EMAIL_FAIL,
  EMAIL_REQUEST,
  EMAIL_SUCCESS,
  USER_ALL_DETAILS_FAIL,
  USER_ALL_DETAILS_REQUEST,
  USER_ALL_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  // dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LOGOUT });
};

export const emailExist = (email) => async (dispatch) => {
  try {
    dispatch({ type: EMAIL_REQUEST });
    //const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.get(
      `http://localhost:8001/registration/${email}/`,
      { email }
      //config
    );

    //const data1 = await data.json();
    console.log(data);

    dispatch({
      type: EMAIL_SUCCESS,
      payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    //const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      `http://localhost:8001/registration/login/`,
      { email, password }
      //config
    );
    // if (!data) {
    //   <h3>Please Enter valid password......</h3>;
    // }

    //const data1 = await data.json();
    // console.log(data1);
    {
      data.map((values) => {
        // console.log(values.id);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: values,
        });
        localStorage.setItem("userInfo", JSON.stringify(values));
      });
    }

    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (id, name, email, password, mobileno, gender) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      //const config = { headers: { "Contnet-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:8001/registration/",
        { id, name, email, password, mobileno, gender }
        //config
      );
      //console.log(data);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });
    // const {
    //   userLogin: { userInfo },
    // } = getState();
    // const config = {
    //   headers: {
    //     "Contnet-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    // const { data } = await axios.get(
    //   `http://localhost:8001/registration/${id}`
    //   // config
    // );
    // const data1 = await data.json();
    // console.log(data);
    const resp = await fetch(`http://localhost:8001/registration/${id}`);
    const data = await resp.json();
    console.log(data);
    {
      data.map((value) => {
        dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: value,
        });
      });
    }
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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
      `http://localhost:8001/registration/profile`,
      // { id, name, email, password, mobileno, gender }
      user
      //config
    );
    // console.log(data);
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getallUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ALL_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    // const config = {
    //   headers: {
    //     "Contnet-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };
    const { data } = await axios.get(
      `http://localhost:8001/registration/`
      // config
    );

    dispatch({
      type: USER_ALL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ALL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:8001/registration/${userid}/`
    );

    swal("User Deleted Successfully!!!", "success");
    window.location.reload(); //href = "/admin/userlist";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting User");
  }
};
