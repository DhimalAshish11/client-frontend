import { addcarts, removecart } from "./CartSlice";
import { toast } from "react-toastify";

export const postCartAction = (product) => async (dispatch) => {
  toast.success("Product added");

  dispatch(addcarts(product));
};

export const removeCartAction = (product) => async (dispatch) => {
  toast.success("Product added");

  dispatch(removecart(product));
};
