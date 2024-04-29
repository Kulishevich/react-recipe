import React from 'react'
import styles from './Header.module.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

export default function Header() {
  const favorite = useSelector(state => state.favorites.items)

  return (
    <div className={styles.header}>
        <BsBookmarkHeartFill className={styles.icon}/>
        <span className={styles.counter}>{favorite.length}</span>
    </div>
  )
}
