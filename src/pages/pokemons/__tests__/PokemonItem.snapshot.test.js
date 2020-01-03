import React from 'react';
import { render } from '@testing-library/react';
import * as pokemonFixture from '../../../../tests/fixtures/pokemon/pokemonsFixture';
import { PokemonItem } from '../PokemonItem';

describe("PokemonItem", () => {
    it("matches the PokemonItem snapshot", () => {
        const renderTree = (<PokemonItem pokemon={pokemonFixture.results[0]}/>)
        const _Component = render(renderTree);
        expect(_Component).toMatchSnapshot();
    });
});