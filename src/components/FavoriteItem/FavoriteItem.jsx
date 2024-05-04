import React from 'react'
import styles from './FavoriteItem.module.css'

export default function FavoriteItem({recipe}) {
  console.log(recipe)
    return (
    <div className={styles.container}>
        <img src={recipe.image} alt="" className={styles.image}/>
        <h3 className={styles.title}>{recipe.name}</h3>
    </div>
  )
}
