import axios from "axios";
import qs from "qs";
import { API_BASE_URL } from "../consts/ApiServer";

const ApiService = axios.create({
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

ApiService.interceptors.request.use(
  async (config) => {
    config.url = API_BASE_URL + config.url;
    const contentType = config.headers["Content-Type"];

    config.headers = {
      Accept: "application/json",
      "Content-Type": contentType
        ? contentType
        : "application/x-www-form-urlencoded",
    };
    const reqMethod = config?.method?.toUpperCase();
    if (reqMethod == "POST" || reqMethod == "PUT") {
      config.data = qs.stringify({
        ...config?.data,
      });
    } else if (reqMethod == "GET" || reqMethod == "DELETE") {
      //Modify Axios's config params
      config.params = {
        ...config.params,
      };
    } else {
      throw new Error({
        message: "http method is required!.",
        status: 422,
      });
    }
    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

export default ApiService;
