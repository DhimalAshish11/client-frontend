import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;

const categoryAPI = rootAPI + "/category";
const productAPI = rootAPI + "/product";
console.log(categoryAPI);
const axiosProcesor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getCategory = () => {
  const obj = {
    method: "get",
    url: categoryAPI,
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
