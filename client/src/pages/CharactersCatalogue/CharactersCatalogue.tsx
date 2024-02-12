import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCharacters } from '../../redux/features/characters/charactersActions'
import { getFavorites } from '../../redux/features/favorites/favoritesActions'
import CharacterList from '../../modules/characterCatalogue/CharacterList/CharacterList'
import { useInView } from 'react-intersection-observer'
import LoadingBar from '../../modules/common/LoadingBar/LoadingBar'

export default function CharactersCatalogue() {
  const {
    charactersInfo: { currentPage, results },
    loading,
    success,
    error,
  } = useAppSelector(state => state.characters)
  const dispatch = useAppDispatch()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && !loading) {
      dispatch(getCharacters(currentPage + 1))
    }
  }, [inView, loading])

  useEffect(() => {
    if (currentPage === 0) {
      dispatch(getFavorites())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: Show proper error page/card and not replace the whole page
  if (error) return <p style={{ margin: '100px' }}>{error}</p>

  return (
    <>
      {loading && <LoadingBar />}
      {success && <CharacterList characters={results} />}
      <div ref={ref}></div>
      <Outlet />
    </>
  )
}
