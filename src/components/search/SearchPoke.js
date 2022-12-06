import { useEffect, useState } from "react";

import React from "react";
import useFetch from "../../hooks/useFetch";
import { CardPokemon } from "../cards/CardPokemon";
import { CardUnique } from "../cards/CardUnique";

export const SearchPoke = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState("");
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/pikachu`);

  const current = useFetch(url);
  const { loading, data } = current;

  const handleName = (event) => {
    setPokemonName(event.target.value);
  };

  const handleNumber = (event) => {
    setPokemonNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPokemon = pokemonName.toLocaleLowerCase();
    setUrl(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`);
  };

  const handleSubmitNum = (event) => {
    event.preventDefault();
    let newPokemon = pokemonNumber;
    setUrl(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardUnique url={data} />
      </div>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <label>Tape pokemon by name: </label>
        <br />
        <input
          type="text"
          placeholder="..name"
          value={pokemonName}
          onChange={handleName}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <form style={{ textAlign: "center" }} onSubmit={handleSubmitNum}>
        <label>Tape pokemon by number: </label>
        <br />
        <input
          type="number"
          placeholder="..number"
          value={pokemonNumber}
          onChange={handleNumber}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};
