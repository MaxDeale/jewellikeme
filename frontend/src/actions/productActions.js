import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        //dispatching custom error message if it exists otherwise just a regular error message
        error.response && error.response.data.message
          ? error.respose.data.message
          : error.message,
    });
  }
};
