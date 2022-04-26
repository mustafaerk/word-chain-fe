import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "utils/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => ({
        data,
        method: "POST",
        path: "login",
      }),
    }),
    quickJoin: builder.mutation({
      query: () => ({
        method: "POST",
        path: "quickJoin",
      }),
    }),
    joinRoom: builder.mutation({
      query: ({ data }) => ({
        data,
        method: "POST",
        path: "joinRoom",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const userApiReducerName = userApi.reducerPath;
export const userApiReducer = userApi.reducer;
export const userApiMiddleware = userApi.middleware;

export const { useLoginMutation, useQuickJoinMutation, useJoinRoomMutation } = userApi;
