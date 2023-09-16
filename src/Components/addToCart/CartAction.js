import { addcarts } from "./CartSlice";
import { toast } from "react-toastify";

export const postCartAction = (product) => async (dispatch) => {
  toast.success("Product added");

  dispatch(addcarts(product));
};
