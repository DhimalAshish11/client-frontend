import { getNewProduct, getNewProductByCategory } from "../../helper/axios";
import { setproducts } from "./productSlice";

export const getNewProductAction = () => async (dispatch) => {
  const { status, results } = await getNewProduct();

  status === "success" && dispatch(setproducts(results));
};

export const getProductByCategoryAction = () => async (dispatch) => {
  const { status, products } = await getNewProductByCategory();

  status === "success" && dispatch(setproducts(products));
};
