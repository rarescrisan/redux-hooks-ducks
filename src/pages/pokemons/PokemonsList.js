import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../redux/react-redux-hooks';
import { PokemonItem } from './PokemonItem';
import * as actions from '../../redux/modules/pokemons/pokemonModule';

export function PokemonsList(){
    const { pokemons, offset } = useSelector(state => state.pokemons);
    const dispatch = useDispatch()

    // Only run once
    useEffect(() => {
      dispatch(actions.fetchPokemons(offset));
    }, []);

    // Handlers
    const onClick = () => dispatch(actions.fetchPokemons(offset));
    
    return (
      <div>
         {pokemons && pokemons.map(pokemon =>
            <PokemonItem 
              key={pokemon.name}
              pokemon={pokemon} 
            />
          )}
          <button onClick={onClick}>Fetch More</button>
      </div>
    );
  }