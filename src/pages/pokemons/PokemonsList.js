import React  from 'react';
import { PokemonItem } from './PokemonItem';

export function PokemonsList({ pokemons }){
    return (
      <div>
         {pokemons.map(pokemon =>
            <PokemonItem 
              key={pokemon.name}
              pokemon={pokemon} 
            />
          )}
      </div>
    );
  }