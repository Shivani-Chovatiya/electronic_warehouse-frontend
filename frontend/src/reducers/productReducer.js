import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAILS,
  PRODUCT_UPDATE_FAILS,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_GET_FAILS,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_SELLER_REQUEST,
  PRODUCT_SELLER_SUCCESS,
  PRODUCT_SELLER_FAILS,
  GET_PRODUCTBYID_REQUEST,
  GET_PRODUCTBYID_SUCCESS,
  GET_PRODUCTBYID_FAILS,
  UPDATE_PRODUCTBYID_REQUEST,
  UPDATE_PRODUCTBYID_SUCCESS,
  UPDATE_PRODUCTBYID_FAILS,
  PRODUCT_REVIEW_LIST_FAILS,
  PRODUCT_REVIEW_LIST_SUCCESS,
  PRODUCT_REVIEW_LIST_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW2_REQUEST,
  PRODUCT_CREATE_REVIEW2_SUCCESS,
  PRODUCT_CREATE_REVIEW2_FAIL,
  PRODUCT_LIST1_REQUEST,
  PRODUCT_LIST1_SUCCESS,
  PRODUCT_LIST1_FAILS,
  PRODUCT_TRY_REQUEST,
  PRODUCT_TRY_SUCCESS,
  PRODUCT_TRY_FAILS,
  PRODUCT_TRY1_REQUEST,
  PRODUCT_TRY1_SUCCESS,
  PRODUCT_TRY1_FAILS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCatReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST1_REQUEST:
      return { loading: true, category: [] };
    case PRODUCT_LIST1_SUCCESS:
      return { loading: false, category: action.payload };
    case PRODUCT_LIST1_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productTryReducer = (state = { tryp: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TRY_REQUEST:
      return { loading: true, tryp: [] };
    case PRODUCT_TRY_SUCCESS:
      return { loading: false, tryp: action.payload };
    case PRODUCT_TRY_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productTryReducer1 = (state = { tryp1: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TRY1_REQUEST:
      return { loading: true, tryp1: [] };
    case PRODUCT_TRY1_SUCCESS:
      return { loading: false, tryp1: action.payload };
    case PRODUCT_TRY1_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateproductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_UPDATE_FAILS:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const addproductReducer = (state = { productItems: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      // const item = action.payload;
      // const existItem = state.productItems.find(
      //   (x) => x.product === item.product
      // );
      // if (existItem) {
      //   return {
      //     ...state,
      //     productItems: state.productItems.map((x) =>
      //       x.product === existItem.product ? item : x
      //     ),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     productItems: [...state.productItems, item],
      //   };
      // }
      return { loading: true };
    case PRODUCT_ADD_SUCCESS:
      return { loading: false, productItems: action.payload, success: true };
    case PRODUCT_ADD_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getproductReducer = (state = { productItems: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      // const item = action.payload;
      // const existItem = state.productItems.find(
      //   (x) => x.product === item.product
      // );
      // if (existItem) {
      //   return {
      //     ...state,
      //     productItems: state.productItems.map((x) =>
      //       x.product === existItem.product ? item : x
      //     ),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     productItems: [...state.productItems, item],
      //   };
      // }
      return { loading: true };
    case PRODUCT_GET_SUCCESS:
      return { loading: false, productItems: action.payload, success: true };
    case PRODUCT_GET_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productSellerReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SELLER_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SELLER_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_SELLER_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getproductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTBYID_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTBYID_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCTBYID_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateproductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTBYID_REQUEST:
      return { ...state, loading: true };
    case UPDATE_PRODUCTBYID_SUCCESS:
      return { updateloading: false, updatesuccess: true };
    case UPDATE_PRODUCTBYID_FAILS:
      return { updateloading: false, updateerror: action.payload };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllProductReviewsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_REVIEW_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_REVIEW_LIST_FAILS:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addreveiwReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW2_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW2_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW2_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
