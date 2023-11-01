import {
  getNewAccessJWT,
  getUserInfo,
  postNewUser,
  signInUser,
  updatePassword,
} from "../../helper/axios";
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

export const SignInUserAction = (obj) => async (dispatch) => {
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
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getUserProfileAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");

  if (refreshJWT) {
    // request new accessJWT from server and all getAdminProfile

    const { accessJWT } = await getNewAccessJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getUserProfileAction());
    }
  }
};

export const getUserProfileAction = () => async (dispatch) => {
  const { status, user } = await getUserInfo();

  console.log(user);
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const updateUserPasswordAction = (data) => async (dispatch) => {
  const respPending = updatePassword(data);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getUserProfileAction());
  }
};
