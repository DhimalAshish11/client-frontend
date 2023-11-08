import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;

const categoryAPI = rootAPI + "/category";
const productAPI = rootAPI + "/product";
const paymentAPI = rootAPI + "/payment";
const userAPI = rootAPI + "/user";
const orderAPI = rootAPI + "/order";
const stripeAPI = rootAPI + "/create-payment-intent";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

const axiosProcesor = async ({ method, url, obj, isPrivate, refreshToken }) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();
  console.log(token);
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  console.log(headers);
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });

    console.log(data);
    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      //1. get new accessJWt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      //2. continue the request

      return axiosProcesor({ method, url, obj, isPrivate, refreshToken });
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

////user

export const getUserInfo = () => {
  const obj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const getUser = () => {
  const obj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const postNewUser = (data) => {
  console.log(data);
  const obj = {
    method: "post",
    url: userAPI,
    obj: data,
  };

  console.log(obj);
  return axiosProcesor(obj);
};

export const postNewUserVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/user-verification",
    obj: data,
  };
  console.log(data);
  return axiosProcesor(obj);
};

export const signInUser = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/sign-in",
    obj: data,
  };
  console.log(data);
  return axiosProcesor(obj);
};

export const logoutAdmin = (_id) => {
  const obj = {
    method: "post",
    url: userAPI + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcesor(obj);
};

export const updatePassword = (data) => {
  const obj = {
    method: "put",
    url: userAPI + "/change-password",
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const requestPassOTP = (email) => {
  const obj = {
    method: "post",
    url: userAPI + "/request-otp",
    obj: { email },
  };
  return axiosProcesor(obj);
};

export const resetPass = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/reset-password",
    obj: data,
  };
  return axiosProcesor(obj);
};

export const getCategory = () => {
  const obj = {
    method: "get",
    url: categoryAPI,
  };
  return axiosProcesor(obj);
};

export const getNewAccessJWT = () => {
  const obj = {
    method: "get",
    url: userAPI + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcesor(obj);
};

export const updateUser = (data) => {
  const obj = {
    method: "put",
    url: userAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const getNewProduct = (_id) => {
  const obj = {
    method: "get",
    url: _id ? productAPI + "/" + _id : productAPI,
  };
  return axiosProcesor(obj);
};

export const getNewProductByCategory = (_id) => {
  const obj = {
    method: "get",
    url: productAPI + "/category/" + _id,
  };
  return axiosProcesor(obj);
};

export const getNewPayment = () => {
  const obj = {
    method: "get",
    url: paymentAPI,
  };
  return axiosProcesor(obj);
};

///stripe payment

export const postStripePayment = (data) => {
  const obj = {
    method: "post",
    url: stripeAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

///order

export const postOrder = (data) => {
  const obj = {
    method: "post",
    url: orderAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

//get order list

/* export const getOrderData = (orderNumber) => {
  console.log(orderNumber);
  const obj = {
    method: "get",
    url: orderNumber ? orderAPI + "/" + orderNumber : orderAPI,
  };
  return axiosProcesor(obj);
}; */
