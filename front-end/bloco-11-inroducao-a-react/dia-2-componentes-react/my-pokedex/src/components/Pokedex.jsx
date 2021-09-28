import React from 'react';
import data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemons = data.map(pokemon => <Pokemon pokemons={ pokemon }/>)
    
    return (
      <div>
        <h1>Pokedex</h1>
        <ul>
        { pokemons }
        </ul>
      </div>
      
    )
  }
}



export default Pokedex;
