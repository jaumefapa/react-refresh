import { character } from '../../../interfaces/interfaces'
import CharacterItem from '../CharacterItem/CharacterItem'
import './characterList.css'

export default function CharacterList({
  characters,
}: {
  characters: character[]
}) {
  return (
    <div className="character-list-container">
      <p className="character-list-title">Explore Rick and Morty characters</p>
      <div className="character-list-sub">
        {characters.map(character => {
          return (
            <CharacterItem
              key={character.id}
              character={character}
            />
          )
        })}
      </div>
    </div>
  )
}
