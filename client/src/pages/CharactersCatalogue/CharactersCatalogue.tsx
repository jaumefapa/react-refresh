import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCharacters } from '../../redux/features/characters/charactersActions'
import { getFavorites } from '../../redux/features/favorites/favoritesActions'
import CharacterList from '../../modules/characterCatalogue/CharacterList/CharacterList'
import LoadingBar from '../../modules/common/LoadingBar/LoadingBar'
import { PageLimitWarning } from '../../modules/characterCatalogue/PageLimitWarning/PageLimitWarning'
import { MAX_CHARACTERS_PAGE } from '../../constants'

export default function CharactersCatalogue() {
  const {
    charactersInfo: { currentPage, results },
    loading,
    success,
    error,
  } = useAppSelector(state => state.characters)
  const dispatch = useAppDispatch()
  const { ref, inView } = useInView()
  const pageLimit = currentPage >= MAX_CHARACTERS_PAGE;

  useEffect(() => {
    if (inView && !loading && !pageLimit) {
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
  if (error && !pageLimit) return <p style={{ margin: '100px' }}>{error}</p>

  return (
    <>
      {loading && <LoadingBar />}
      {success && <CharacterList characters={results} />}
      {pageLimit && <PageLimitWarning />}
      <div ref={ref}></div>
      <Outlet />
    </>
  )
}
