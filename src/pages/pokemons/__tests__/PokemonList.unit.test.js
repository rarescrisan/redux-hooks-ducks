import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { render } from '@testing-library/react';
import { OFFSET } from '../../../redux/modules/pokemons/constants';
import * as ReactReduxHooks from "../../../redux/react-redux-hooks";
import { initialState, ActionType } from '../../../redux/modules/pokemons/pokemonModule';
import { PokemonsList } from '../PokemonsList';

describe("PokemonList", () => {
    let wrapper;
    let useEffect;
    let mockStore;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        /* mocking store */
        mockStore = configureStore([thunk])({
            pokemons: {
                ...initialState
            }
        });

        /* mocking useEffect */
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect(); // 2 times
        mockUseEffect(); //

        /* mocking useSelector on our mock store */
        jest
            .spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => mockStore.getState().pokemons);
        /* mocking useDispatch on our mock store  */
        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => mockStore.dispatch);

        const renderTree = (
            <Provider store={mockStore}>
                <PokemonsList/>
            </Provider>
        )
        wrapper = render(renderTree);
    })

    it(`renders ${OFFSET} pokemon on component mount`, () => {
        const actions = mockStore.getActions();
        expect(actions).toEqual([
            { type: ActionType.GET_POKEMONS }
        ]);
    });

    it(`renders ${OFFSET} pokemon onClick`, () => {
        // TODO: finish this test
        expect(true).toBe(true);
    });
    
});