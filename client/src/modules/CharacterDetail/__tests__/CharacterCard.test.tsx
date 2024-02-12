import { describe, it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils/renderWithProvider';

import CharacterCard from "../CharacterCard";

const MOCK_CHARACTER = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
}

describe('CharacterCard', () => {
  it('renders the CharacterCard properly', () => {

    const component = renderWithProviders(<CharacterCard character={MOCK_CHARACTER} />)

    expect(component).toMatchSnapshot()
  })
  it("Renders the card with the right content", () =>{
    renderWithProviders(<CharacterCard character={MOCK_CHARACTER} />);

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

  it('The button changes back and forth when clicked', async () => {
    renderWithProviders(
      <CharacterCard  character={MOCK_CHARACTER} />
    )

    const buttonRemoveFav = screen.getAllByLabelText('Remove from favorites');
    expect(buttonRemoveFav).not.toBeNull();
    
    fireEvent.click(screen.getByRole('button'));
    
    const buttonAddFav = screen.getAllByLabelText('Add to favorites');
    expect(buttonAddFav).not.toBeNull();

    fireEvent.click(screen.getByRole('button'));

    expect(buttonRemoveFav).not.toBeNull();
  })
});