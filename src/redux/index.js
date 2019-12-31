import { combineReducers } from 'redux'
import { pokemonsReducer } from './modules/pokemons'

// In large apps there will be more than one module
export default combineReducers({
  pokemons: pokemonsReducer,
});