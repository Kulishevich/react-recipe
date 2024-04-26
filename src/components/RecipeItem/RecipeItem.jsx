import React from 'react'
import styles from './RecipeItem.module.css'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
// import { actions, favoritesSlice } from '../store/slices/favorites.slice'

export default function RecipeItem({recipe}) {
  const favorites = useSelector(state => state.favorites)

  const { toggleFavorites } = useActions()

  const inFavorites = favorites.some(obj => obj.id === recipe.id);

  return (
    <div className={styles.item}>
        {/* <img src='' alt=''/> */}
        <h2 className={styles.title}>{recipe.name}</h2>
        <button 
          className={styles.button}
          onClick={() => toggleFavorites(recipe)}
        >
          {!inFavorites ? 'Add to favorites' : 'Remove from favorites'}
        </button>
    </div>
  )
}
