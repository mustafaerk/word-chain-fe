import axios from "axios";

import { API_URL } from "constant/Varible";

const axiosParameterBuilder = (config) => {
  const { method = "GET", headers = {}, data = {}, clientToken = "" } = config;

  // #region HEADERS
  const headerParameters = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": origin,
    "Content-Type": "application/json",
    ...headers,
  };

  if (clientToken) {
    headerParameters.Authorization = `Bearer ${clientToken}`;
  }
  // #endregion HEADERS

  // #region DATA
  let requestData = data;

  if (["POST", "PATCH", "PUT", "DELETE"].includes(method)) {
    requestData = JSON.stringify(data);
  }
  // #endregion DATA

  return {
    data: requestData,
    headers: headerParameters,
    method,
  };
};

const apiURLBuilder = (params) => {
  const { baseUrl = API_URL, path = "" } = params;
  return `${baseUrl}/${path}`;
};

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: API_URL }) =>
  async (queryParams) => {
    try {
      const { path, ...rest } = queryParams;

      const params = axiosParameterBuilder(rest);
      const requestUrl = apiURLBuilder({ baseUrl, path });

      const { data } = await axios(requestUrl, params);
      return { data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const apiResHandler = (
  promise,
  callback = () => {},
  failCallback = () => {}
) => {
  promise
    .then((res) => {
      const { data, error } = res;
      if (!data && error)
        throw new Error(error?.data?.Message || "Something went wrong!");
      const { Data, Success, Message } = data;
      if (Success === false)
        throw new Error(Message || "Data could not emitted");
      callback?.(Data);
    })
    .catch((err) => {
      const { message } = err;
      failCallback?.({ errMsg: message });
    });
};
