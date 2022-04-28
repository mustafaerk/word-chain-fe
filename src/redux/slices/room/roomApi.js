import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "utils/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: ({ data }) => ({
        data,
        method: "POST",
        path: "createRoom",
      }),
    }),
    leaveRoom: builder.mutation({
      query: ({ data }) => ({
        data,
        method: "POST",
        path: "leaveRoom",
      }),
    }),
    listRooms: builder.query({
      query: () => ({
        method: "GET",
        path: "listRooms",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const roomApiReducerName = roomApi.reducerPath;
export const roomApiReducer = roomApi.reducer;
export const roomApiMiddleware = roomApi.middleware;

export const { useCreateRoomMutation, useLeaveRoomMutation, useListRoomsQuery } = roomApi;
