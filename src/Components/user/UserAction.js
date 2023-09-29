import { getUserInfo, postNewUser, signInUser } from "../../helper/axios";
import { setUser } from "./UserSlice";
import { toast } from "react-toastify";

export const createNewUserAction = async (obj) => {
  const pendingResp = postNewUser(obj);

  toast.promise(pendingResp, {
    pending: "Please Wait...",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const SignInAdminAction = (obj) => async (dispatch) => {
  const pendingResp = signInUser(obj);

  toast.promise(pendingResp, {
    pending: "Please Wait...",
  });
  const { status, message, token } = await pendingResp;

  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
  }
  ////get the user data an dmount b the state
  dispatch(getUserProfileAction());
};

export const getUserProfileAction = () => async (dispatch) => {
  const { status, user } = await getUserInfo();

  if (status === "success") {
    dispatch(setUser(user));
  }
};
