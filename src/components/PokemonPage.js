import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect (() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(setPokemons)
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }
  const pokemonsToDisplay = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchText={searchText} onChangeSearch={setSearchText}/>
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
