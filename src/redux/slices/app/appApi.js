import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://geolocation-db.com/" }),
  endpoints: (builder) => ({
    getUserIp: builder.query({
      query: () => `json/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const appApiReducerName = appApi.reducerPath;
export const appApiReducer = appApi.reducer;
export const appApiMiddleware = appApi.middleware;

export const { useGetUserIpQuery } = appApi;
