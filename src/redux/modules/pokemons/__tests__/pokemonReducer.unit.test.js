import { ActionType, pokemonsReducer } from '../pokemonModule';
import * as pokemonFixture from '../../../../../tests/fixtures/pokemon/pokemonsFixture';
import { OFFSET, LIMIT } from '../constants';


describe('pokemonsReducer()', () => {
    let initialState;
    beforeEach(() => {
        // intialize State
        initialState = {
            pokemons: [],
            offset: OFFSET,
            limit: LIMIT,
            isFetching: false,
            error: false
          };
    })

    afterEach(() => {
        // restet State
        initialState = {
            pokemons: [],
            offset: OFFSET,
            limit: LIMIT,
            isFetching: false,
            error: false
        };
    })

    it('should set isFetching to true when GET_POKEMONS dispatched', () => {
        const action = {
            type: ActionType.GET_POKEMONS
        }

        const testState = pokemonsReducer(initialState, action);
		expect(testState.isFetching ).toBe(true);
    });

    it('should set isFetching to false when GET_POKEMONS_SUCCESS dispatched', () => {
        const action = {
            type: ActionType.GET_POKEMONS_SUCCESS,
            payload: {
                pokemons: pokemonFixture.results
            }
        }

        const testState = pokemonsReducer(initialState, action);
		expect(testState.isFetching ).toBe(false);
    });


    it(`should set ${OFFSET} new pokemons to state`, () => {
        const action = {
            type: ActionType.GET_POKEMONS_SUCCESS,
            payload: {
                pokemons: pokemonFixture.results
            }
        }

        const testState = pokemonsReducer(initialState, action);
		expect(testState.pokemons.length).toBe(OFFSET);
    });

    it('should set isFetching to false when GET_POKEMONS_FAILURE dispatched', () => {
        const action = {
			type: ActionType.GET_POKEMONS_FAILURE
        }

        const testState = pokemonsReducer(initialState, action);
		expect(testState.isFetching).toBe(false);
    });
})