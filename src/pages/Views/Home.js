import React from "react";

import { Text } from "components";
import Main from "pages/Layout/Main";

import { useGetPokemonByNameQuery } from "redux/slices/pokemon/pokemon";

const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("charmander");
  console.log(data, error);

  return (
    <Main>
      <Text type="md" weight="bold">
        {error ? (
          <></>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </Text>
    </Main>
  );
};

export default Home;
