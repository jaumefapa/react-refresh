import { describe, it, expect, vi } from 'vitest'
import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils/renderWithProvider';
import CharacterDetail from "../CharacterDetail";
import { ARRAY_OF_CHARACTERS, MOCK_REDUX_STATE_CHARACTERS } from '../../../testUtils/mocks';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useParams: () => ({
      characterId: 2,
    }),
  };

});

describe('CharacterDetail', () => {
  it('Character details page gets rendered', () => {
    const component = renderWithProviders(<CharacterDetail />, { preloadedState: { characters: MOCK_REDUX_STATE_CHARACTERS }})

    expect(component).toMatchSnapshot();
  })

  it('Character information gets rendered', () => {
    renderWithProviders(<CharacterDetail />, { preloadedState: { characters: MOCK_REDUX_STATE_CHARACTERS }})

    const MOCK_CHARACTER = ARRAY_OF_CHARACTERS[1];
    
    const name = screen.queryByText(MOCK_CHARACTER.name)
    const status = screen.queryByText(MOCK_CHARACTER.status)
    const species = screen.queryByText(MOCK_CHARACTER.species)
    const gender = screen.queryByText(MOCK_CHARACTER.gender)
    const origin = screen.queryByText(MOCK_CHARACTER.origin.name)
    const location = screen.queryByText(MOCK_CHARACTER.location.name)
    const appearences = screen.queryByText(MOCK_CHARACTER.episode.length)

    expect(name).not.toBeNull();
    expect(status).not.toBeNull();
    expect(species).not.toBeNull();
    expect(gender).not.toBeNull();
    expect(origin).not.toBeNull();
    expect(location).not.toBeNull();
    expect(appearences).not.toBeNull();
  })

  it('The favorite button changes favorite state when clicked', async () => {
    renderWithProviders(<CharacterDetail />, { preloadedState: { characters: MOCK_REDUX_STATE_CHARACTERS }})

    const buttonRemoveFav = screen.getAllByLabelText('Remove from favorites');
    expect(buttonRemoveFav).not.toBeNull();
    
    fireEvent.click(screen.getByRole('button'));
    
    const buttonAddFav = screen.getAllByLabelText('Add to favorites');
    expect(buttonAddFav).not.toBeNull();

    fireEvent.click(screen.getByRole('button'));

    expect(buttonRemoveFav).not.toBeNull();
  });

  it('If param characterId is not found in the redux state, it redirects to the characters catalogue', async () => {});
});
