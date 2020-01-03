import fetch from 'cross-fetch';
import { OFFSET, LIMIT, POKEMON_API} from './constants';

export const ActionType = {
  GET_POKEMONS: '@pokemon/GET_POKEMONS',
  GET_POKEMONS_SUCCESS: '@pokemon/GET_POKEMONS_SUCCESS',
  GET_POKEMONS_FAILURE: '@pokemon/GET_POKEMONS_FAILURE',
}

export const requestPokemons = () => ({ type: ActionType.GET_POKEMONS });
export const receivePokemons = pokemons => ({ type: ActionType.GET_POKEMONS_SUCCESS, payload: { pokemons }});
export const receivePokemonsFail = error => ({ type: ActionType.GET_POKEMONS_FAILURE, error });

export const fetchPokemons = (offset) => (dispatch) => {
  dispatch(requestPokemons());
  return fetch(`${POKEMON_API}/pokemon?offset=${offset}&limit=${LIMIT}`).then(
    res => res.json(),
    err => dispatch(receivePokemonsFail(err))
  )
  .then(pokemons => dispatch(receivePokemons(pokemons.results)))
};

const initialState = {
  pokemons: [],
  offset: OFFSET,
  limit: LIMIT,
  isFetching: false,
  error: false
};

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.GET_POKEMONS:
      return {
        ...state,
        isFetching: true
      };
    case ActionType.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: [
            ...state.pokemons,
            ...action.payload.pokemons
        ],
        isFetching: false,
        offset: state.offset + OFFSET
      };
    case ActionType.GET_POKEMONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};