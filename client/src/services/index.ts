import axios from "axios";
import config from "~/config";

export const request = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});

export const adminRequest = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);