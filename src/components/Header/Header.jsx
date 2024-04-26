import React from 'react'
import styles from './Header.module.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

export default function Header() {
    const favorites = useSelector(state => state.favorites)

  return (
    <div className={styles.header}>
        <BsBookmarkHeartFill className={styles.icon}/>
        <span className={styles.counter}>{favorites.length}</span>
    </div>
  )
}
