import { character } from '../../interfaces/interfaces'
import FavoriteButton from '../common/FavoriteButton/FavoriteButton'
import './characterCard.css'

export default function CharacterCard({ character }: { character: character }) {
  return (
    <div className="character-card-container">
      <img
        className="character-card-image"
        src={character.image}
        alt={character.name}
      />
      <div className="character-card-name-sub">
        <p className="character-card-name">{character.name}</p>
        <FavoriteButton characterId={character.id} />
      </div>
      <p className="character-card-info-title">Information:</p>
      <div className="character-card-info">
        <div className="character-card-sub">
          <p>
            Status: <span>{character.status}</span>
          </p>
          <p>
            Specie: <span>{character.species}</span>
          </p>
          <p>
            Type: <span>{character.type}</span>
          </p>
          <p>
            Gender: <span>{character.gender}</span>
          </p>
        </div>
        <div className="character-card-sub">
          <p>
            Origin: <span>{character.origin.name}</span>
          </p>
          <p>
            Location: <span>{character.location.name}</span>
          </p>
          <p>
            Appearences: <span>{character.episode.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
