import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OFFSET } from '../../../redux/modules/pokemons/constants';
import { PokemonsList } from '../PokemonsList';
import { Provider } from 'react-redux';
import createStore from 'redux';

const mockStore = createStore({
    pokemons: {
        pokemons: []
    }
});
describe("PokemonList", () => {
    it(`renders ${OFFSET} pokemon on component mount`, () => {
        const renderTree = (
            <Provider store={mockStore}>
                <PokemonsList/>
            </Provider>
        )
        const _Component = render(renderTree);
        const result = _Component.getAllByTestId('pokemon');
        expect(result.length).toBe(OFFSET);
    });

    it(`renders an additional ${OFFSET} pokemons when the 'fetch more' button is clicked`, () => {
        const renderTree = (
            <Provider store={mockStore}>
                <PokemonsList/>
            </Provider>
        )
        const _Component = render(renderTree);

        fireEvent.click(_Component.getByText(/Fetch More/i));

        const result = _Component.getAllByTestId('pokemon');
        expect(result.length).toBe(OFFSET * 2);
    });
});