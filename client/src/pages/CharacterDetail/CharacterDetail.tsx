import { Navigate, useParams } from 'react-router-dom'

import { URLS } from '../../constants'
import { character } from '../../interfaces/interfaces'
import { useAppSelector } from '../../redux/hooks'
import CharacterCard from '../../modules/CharacterDetail/CharacterCard'
import './characterDetail.css'

export default function CharacterDetail() {
  const { results } = useAppSelector(state => state.characters.charactersInfo)
  const { characterId } = useParams()

  const character = results.find(
    (character: character) => character.id === Number(characterId)
  )

  return (
    <div className="page-container-character-detail">
      {character ? (
        <CharacterCard character={character} />
      ) : (
        // TODO: Add an endpoint to fetch a single character
        <Navigate to={`../${URLS.CHARACTERS_CATALOGUE}`} />
      )}
    </div>
  )
}
