import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { PokemonsList } from './PokemonsList';
import * as actions from '../../redux/modules/pokemons';

export function Pokemons() {
  const { pokemons } = useSelector(state => state.pokemons);
  const dispatch = useDispatch()

  useEffect(() => {
		dispatch(actions.fetchPokemons());
  }, [dispatch]);

  return (
    <PokemonsList pokemons={pokemons} />
  )
}