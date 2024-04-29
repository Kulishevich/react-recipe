import React from 'react'
import styles from './RecipeItem.module.css'
import { useFavorites } from '../../hooks/useFavorites'
import { useActions } from '../../hooks/useActions'


export default function RecipeItem({recipe}) {
  const favorites = useFavorites() //хук который возвращает массив favorites(из redux)
  const inFavorite = favorites.some(obj => obj.id === recipe.id); //проверка на наличие элемента по id в массиве favorites
  const { addToFavorites } = useActions() //достаём из useActions() action 



  return (
    <div className={styles.item}>
        <h2 className={styles.title}>{recipe.name}</h2>
        <button 
          className={styles.button}
          onClick={() => addToFavorites(recipe)}
        >
          {inFavorite ? "Remove from favorite" : 'Add to favorite'}
        </button>
    </div>
  )
}
