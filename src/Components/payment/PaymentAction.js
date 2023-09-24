import { getNewPayment } from "../../helper/axios";
import { setPayments } from "./PaymentSlice";

export const getPaymentAction = () => async (dispatch) => {
  const { status, result } = await getNewPayment();
  /*   toast[status](message); */

  if (status === "success") {
    dispatch(setPayments(result));
  }
};
