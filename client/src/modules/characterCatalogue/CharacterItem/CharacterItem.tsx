import { Link } from 'react-router-dom'
import { character } from '../../../interfaces/interfaces'
import FavoriteButton from '../../common/FavoriteButton/FavoriteButton'
import './characterItem.css'

export default function CharacterItem({ character }: { character: character }) {
  return (
    <div className="character-item-container">
      <Link
        to={character.id.toString()}
        style={{ textDecoration: 'none' }}
      >
        <div className="character-item-sub">
          <img
            className="character-item-img"
            src={character.image}
            alt={character.name}
          />
          <p className="character-item-name">{character.name}</p>
        </div>
      </Link>
      <div className="character-item-fav">
        <FavoriteButton characterId={character.id} />
      </div>
    </div>
  )
}
