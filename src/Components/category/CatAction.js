import { getCategory } from "../../helper/axios";
import { setCats } from "../pages/Category/categories/CategorySlice";

export const getCategoryAction = () => async (dispatch) => {
  const { status, message, result } = await getCategory();
  console.log(status, message, result);
  /*   toast[status](message); */

  if (status === "success") {
    dispatch(setCats(result));
  }
};
