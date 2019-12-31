import fetch from 'cross-fetch';

const POKEMON_API = 'https://pokeapi.co/api/v2';

const GET_POKEMONS = '@pokemon/GET_POKEMONS';
const GET_POKEMONS_SUCCESS = '@pokemon/GET_POKEMONS_SUCCESS';
const GET_POKEMONS_FAILURE = '@pokemon/GET_POKEMONS_FAILURE';

export const requestPokemons = () => ({ type: GET_POKEMONS });
export const receivePokemons = pokemons => ({ type: GET_POKEMONS_SUCCESS, pokemons});
export const receivePokemonsFail = error => ({ type: GET_POKEMONS_FAILURE, error });

export const fetchPokemons = () => (dispatch) => {
  dispatch(requestPokemons());
  return fetch(`${POKEMON_API}/pokemon`).then(
    res => res.json(),
    err => dispatch(receivePokemonsFail(err))
  )
    .then(POKEMON => dispatch(receivePokemons(POKEMON)))
};

const initialState = {
  pokemons: [],
  isFetching: false,
  error: false
};

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        isFetching: true
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: [
            ...state.pokemons,
            ...action.pokemons.results
        ],
        isFetching: false
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};