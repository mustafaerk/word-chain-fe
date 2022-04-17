import React from "react";

import { useGetPokemonByNameQuery } from "redux/slices/pokemon/pokemon";

const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  console.log(data, error);
  const pokemons = data?.results;
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {error ? (
          <></>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          pokemons.map((pokemon) => (
            <li key={pokemon.name} className="py-4 flex">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {pokemon.name}
                </p>
                <p className="text-sm text-gray-500">{pokemon.url}</p>
              </div>
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
};

export default Home;
