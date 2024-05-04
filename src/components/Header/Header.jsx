import React, { useState } from 'react'
import styles from './Header.module.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
import Favorites from '../Favorites/Favorites';
import { useFavorites } from '../../hooks/useFavorites';

export default function Header() {
  const [visibleFav, isVisibleFav] = useState(false)
  // const favorite = useSelector(state => state.favorites.items)
  const favorite = useFavorites()

  return (
    <div className={styles.header}>
      <div>
        <BsBookmarkHeartFill className={styles.icon} onClick={() => isVisibleFav(prev => !prev)}/>
        <span className={styles.counter}>{favorite.length}</span>
        {visibleFav && <Favorites/>}
      </div>
    </div>
  )
}
