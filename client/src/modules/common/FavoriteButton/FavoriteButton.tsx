import { useIsFavorite } from '../../../hooks/useIsFavorite'
import './favoriteButton.css'

export default function FavoriteButton({
  characterId,
}: {
  characterId: number
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isFavorite, setIsFavorite, loading } =
    useIsFavorite(characterId)

  // TODO: Add loading state --> spinner
  return (
    <div className="favorite-button-container">
      {isFavorite ? (
        <button
          onClick={() => setIsFavorite(false)}
          aria-label={'Add to favorites'}
        >
          {/* TODO: Save svg in public as a file */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
          >
            <path
              fill="#DD2E44"
              d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242"
            ></path>
          </svg>
        </button>
      ) : (
        <button

          onClick={() => setIsFavorite(true)}
          aria-label={'Remove from favorites'}
        >
          {/* TODO: Save svg in public as a file */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
          >
            <path
              fill="none"
              stroke="#808080"
              d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242"
            ></path>
          </svg>
        </button>
      )}
    </div>
  )
}
