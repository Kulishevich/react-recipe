import React from 'react'
import styles from './Header.module.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
// import { useSelector } from 'react-redux';
import { useFavorites } from '../../hooks/useFavorites';

export default function Header() {
  const favorites = useFavorites()  
    
  return (
    <div className={styles.header}>
        <BsBookmarkHeartFill className={styles.icon}/>
        <span className={styles.counter}>{favorites.length}</span>
    </div>
  )
}
