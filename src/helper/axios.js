import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;

const categoryAPI = rootAPI + "/category";
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
