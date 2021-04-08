import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import CatchPokemon from "./CatchPokemon";
import pokemon from '../pokemonData';


class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.addCaughtPokemon = this.addCaughtPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    // https://www.npmjs.com/package/axios#example
    axios.get('http://127.0.0.1:3002/api/pokemon')
    .then((result) => {

      console.log("RESULT: ", result.data);
      this.setState({pokemonList: result.data});
    })
  }

  addCaughtPokemon(caughtPokemon) {
    //

    axios.post('http://127.0.0.1:3002/api/pokemon', caughtPokemon)
    .then((result) => {
      console.log(result);
      this.getPokemon();

    })
  }

  render() {
    return (
    <div>
      <table>
        <tbody>
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </tbody>
      </table>
      <CatchPokemon addCaughtPokemon={this.addCaughtPokemon} />
    </div>
    )
  }
};

export default PokemonList;