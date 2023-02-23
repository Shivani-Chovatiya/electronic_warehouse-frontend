import {
  addproductReducer,
  addreveiwReducer,
  getAllProductReviewsReducer,
  getproductByIdReducer,
  getproductReducer,
  productListReducer,
  productReviewCreateReducer,
  productSellerReducer,
  updateproductByIdReducer,
  updateproductReducer,
} from "./reducers/productReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer, shippingAddressReducer } from "./reducers/cartReducer";
import {
  emailReducer,
  getAllUsersReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import {
  allUserOrdersReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducers/orderReducer";
import {
  sellerRegisterReducer,
  sellerLoginReducer,
} from "./reducers/sellerReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const sellerInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

var productInfoFromStorage = localStorage.getItem("productItems")
  ? JSON.parse(localStorage.getItem("productItems"))
  : [];

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  ordercreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  emailexists: emailReducer,
  sellerRegister: sellerRegisterReducer,
  addproduct: addproductReducer,
  sellerlogin: sellerLoginReducer,
  updateproductReducer: updateproductReducer,
  getproduct: getproductReducer,
  sellerproduct: productSellerReducer,
  getproductByIdReducer: getproductByIdReducer,
  updateproductByIdReducer: updateproductByIdReducer,
  getAllUsersReducer: getAllUsersReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  orderListMy: orderListMyReducer,
  productReviewCreate: productReviewCreateReducer,
  addreveiwReducer: addreveiwReducer,
  // getAllProductReviewsReducer: getAllProductReviewsReducer,
  //shipping: shippingAddressReducer,
});

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage, userInfo: sellerInfoFromStorage },
  //shipping: { shippingAddress: shippingAddressFromStorage },
  addproduct: { productItems: productInfoFromStorage },
  sellerlogin: { userInfo: sellerInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
