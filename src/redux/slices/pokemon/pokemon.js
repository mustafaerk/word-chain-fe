import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `pokemon?limit=100000&offset=0`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const pokemonApiReducerName = pokemonApi.reducerPath;
export const pokemonApiReducer = pokemonApi.reducer;
export const pokemonApiMiddleware = pokemonApi.middleware;

export const { useGetPokemonByNameQuery } = pokemonApi;
