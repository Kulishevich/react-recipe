import React from 'react'
import {useFavorites} from '../../hooks/useFavorites'
import FavoriteItem from '../FavoriteItem/FavoriteItem'
import styles from './Favorites.module.css'

export default function Favorites() {
    const favorite = useFavorites()

    return (
    <div className={styles.container}>
        {favorite.length ? favorite.map(recipe => <FavoriteItem key={recipe.id} recipe={recipe}/>) : <div>...Not found</div>}
    </div>
  )
}
