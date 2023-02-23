import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  SHIPPING_ADDRESS_FAIL,
  SHIPPING_ADDRESS_REQUEST,
  SHIPPING_ADDRESS_SUCCESS,
} from "../constants/cartConstants";
import { useState } from "react";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await fetch(`http://localhost:8001/product/${id}`);

  const data = await res.json();
  // console.log(data);
  // {
  //   data.map((values) => {
  //     dispatch({
  //       type: CART_ADD_ITEM,
  //       payload: {
  //         product: values.id,
  //         name: values.name,
  //         image: values.image,
  //         price: values.price,
  //         cis: values.cis,
  //         qty,
  //       },
  //     });
  //   });
  // }
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      cis: data.cis,

      qty,
    },
  });
  //console.log(data);
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  //console.log(getState().cart.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

// export const saveShippingAddress =
//   (id, mobileno, address, city, postalcode, country) => async (dispatch) => {
//     try {
//       dispatch({ type: SHIPPING_ADDRESS_REQUEST });
//       //const config = { headers: { "Contnet-Type": "application/json" } };
//       const { data } = await axios.post(
//         "http://localhost:8002/shipping/",
//         { id, mobileno, address, city, postalcode, country }
//         //config
//       );
//       console.log(data);
//       dispatch({
//         type: SHIPPING_ADDRESS_SUCCESS,
//         payload: data,
//       });

//       localStorage.setItem("shippingAddress", JSON.stringify(data));
//     } catch (error) {
//       dispatch({
//         type: SHIPPING_ADDRESS_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };
