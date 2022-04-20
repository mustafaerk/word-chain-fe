import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "constant/Varible";
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `pokemon?limit=100000&offset=0`,
    }),
    login: builder.mutation({
      query: ({ data }) => ({
        data,
        method: "POST",
        path: "/login",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const userApiReducerName = userApi.reducerPath;
export const userApiReducer = userApi.reducer;
export const userApiMiddleware = userApi.middleware;

export const { useGetPokemonByNameQuery, useLoginMutation } = userApi;
