import {
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_REQUEST,
  SELLER_REGISTER_SUCCESS,
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_DETAILS_REQUEST,
  SELLER_DETAILS_SUCCESS,
  SELLER_DETAILS_FAIL,
  SELLER_UPDATE_PROFILE_REQUEST,
  SELLER_UPDATE_PROFILE_SUCCESS,
  SELLER_UPDATE_PROFILE_FAIL,
} from "../constants/sellerConstants";
import { USER_LOGOUT } from "../constants/userConstants";

export const sellerRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_REGISTER_REQUEST:
      return { loading: true };
    case SELLER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SELLER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const sellerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_LOGIN_REQUEST:
      return { loading: true };
    case SELLER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SELLER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const sellerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELLER_DETAILS_SUCCESS:
      return {
        loading: false,
        seller: action.payload,
      };
    case SELLER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const sellerUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case SELLER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case SELLER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
