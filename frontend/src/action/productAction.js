import {
  GET_PRODUCTBYID_FAILS,
  GET_PRODUCTBYID_REQUEST,
  GET_PRODUCTBYID_SUCCESS,
  PRODUCT_ADD_FAILS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_CREATE_REVIEW2_REQUEST,
  PRODUCT_CREATE_REVIEW2_SUCCESS,
  PRODUCT_CREATE_REVIEW2_FAIL,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_GET_FAILS,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REVIEW_LIST_FAILS,
  PRODUCT_REVIEW_LIST_REQUEST,
  PRODUCT_REVIEW_LIST_SUCCESS,
  PRODUCT_SELLER_FAILS,
  PRODUCT_SELLER_REQUEST,
  PRODUCT_SELLER_SUCCESS,
  PRODUCT_UPDATE_FAILS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  UPDATE_PRODUCTBYID_FAILS,
  UPDATE_PRODUCTBYID_REQUEST,
  UPDATE_PRODUCTBYID_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";
import swal from "sweetalert";
import { useSelector } from "react-redux";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:8001/product/");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchProduct = (searchkey) => async (dispatch) => {
  let searched;

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const resp = await fetch("http://localhost:8001/product/");
    const res = await resp.json();
    searched = res.filter((product) =>
      product.name.toLowerCase().includes(searchkey)
    );
    console.log(searched);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: searched });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILS, payload: error });
  }
};

export const updateProducts =
  (
    sellerid,
    sname,
    email,
    password,
    mobileno,
    gstno,
    panno,
    address,
    pincode,
    isSeller,
    productdetails
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_UPDATE_REQUEST });

      const { data } = await axios.put(
        `http://localhost:8001/sellers/${sellerid}/`,
        {
          sname,
          email,
          password,
          mobileno,
          gstno,
          panno,
          address,
          pincode,
          isSeller,
          productdetails,
        }
      );
      // const { data } = {
      //   product
      // }; name,
      // email,
      // password,
      // mobileno,
      // gstno,
      // panno,
      // address,
      // pincode,
      // isseller,
      console.log(data);
      console.log(productdetails);
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
      // localStorage.setItem("productItems", JSON.stringify(productdetails));
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const addProducts =
  (
    catagory,
    cis,
    description,
    discount,
    gst,
    image,
    name,
    price,
    rating,
    // reviews,
    sellerid,
    sname,
    email,
    password,
    mobileno,
    gstno,
    panno,
    address,
    pincode,
    seller
    //     addproduct.productItems
    // product
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_ADD_REQUEST });

      const { data1 } = await axios.post(
        `http://localhost:8001/product/addproduct/${name}`,
        {
          catagory,
          cis,
          description,
          discount,
          gst,
          image,
          name,
          price,
          rating,
          // reviews,
          sellerid,
        }
      );
      //localStorage.removeItem("productItems");
      const { data } = await axios.get(
        `http://localhost:8001/product/select/${sellerid}`
      );

      dispatch(
        updateProducts(
          sellerid,
          sname,
          email,
          password,
          mobileno,
          gstno,
          panno,
          address,
          pincode,
          seller,
          data
          // addproduct.productItems
        )
      );

      // console.log(userInfo.name);
      // const { data } = {
      //   product,
      // };
      // console.log(
      //   name,
      //   email,
      //   password,
      //   mobileno,
      //   gstno,
      //   panno,
      //   address,
      //   pincode,
      //   isseller,
      //   productdetails
      // );
      dispatch({
        type: PRODUCT_ADD_SUCCESS,
        payload: data,
      });
      //console.log(data1);

      console.log(data);
      localStorage.setItem("productItems", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: PRODUCT_ADD_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const sellerProduct = (sellerid) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SELLER_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8001/product/list/${sellerid}/`
    );
    dispatch({
      type: PRODUCT_SELLER_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: PRODUCT_SELLER_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:8001/product/${id}`, {
      id,
    });

    swal("Product Deleted Successfully!!!", "success");
    window.location.href = "/seller/productlist";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Product");
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTBYID_REQUEST });
    const { data } = await axios.get(`http://localhost:8001/product/${id}`);
    dispatch({
      type: GET_PRODUCTBYID_SUCCESS,
      payload: data,
    });
    //console.log(data);
  } catch (error) {
    dispatch({
      type: GET_PRODUCTBYID_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct =
  (
    id,
    name,
    price,
    image,
    description,
    cis,
    catagory,
    discount,
    gst,
    rating
    // reviews
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCTBYID_REQUEST });
      const { data } = await axios.put(
        `http://localhost:8001/product/update/${id}`,
        {
          name,
          image,
          description,
          rating,
          price,
          cis,
          gst,
          discount,
          catagory,
        }
      );
      dispatch({
        type: UPDATE_PRODUCTBYID_SUCCESS,
        payload: data,
      });
      window.location.href = "/seller/productlist";
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCTBYID_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createProductReview =
  (
    id,
    // catagory,
    // cis,
    // description,
    // discount,
    // gst,
    // image,
    // name,
    // price,
    // rating,
    reveiws
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
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
        `http://localhost:8001/product/${id}/reveiws/`,
        {
          // catagory,
          // cis,
          // description,
          // discount,
          // gst,
          // image,
          // name,
          // price,
          // rating,
          reveiws,
          // config
        }
      );

      console.log(data);
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const addReview =
  (id, comment, rating, uname, userid) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW2_REQUEST });

      const { data1 } = await axios.post(
        `http://localhost:8001/product/addreveiws/`,
        {
          comment,
          rating,
          uname,
          userid,
          id,
        }
      );
      //localStorage.removeItem("productItems");
      const { data } = await axios.get(
        `http://localhost:8001/product/select/${id}/`
      );

      dispatch(
        createProductReview(
          id,

          data
          // addproduct.productItems
        )
      );

      // console.log(userInfo.name);
      // const { data } = {
      //   product,
      // };
      // console.log(
      //   name,
      //   email,
      //   password,
      //   mobileno,
      //   gstno,
      //   panno,
      //   address,
      //   pincode,
      //   isseller,
      //   productdetails
      // );
      dispatch({
        type: PRODUCT_CREATE_REVIEW2_SUCCESS,
        payload: data,
      });
      //console.log(data1);

      console.log(data);
      // localStorage.setItem("productItems", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW2_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// export const getallRating = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_REVIEW_LIST_REQUEST,
//     });

//     const { data } = await axios.get(
//       `http://localhost:8001/product/${id}/rating`
//       // config
//     );

//     dispatch({
//       type: PRODUCT_REVIEW_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_REVIEW_LIST_FAILS,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
