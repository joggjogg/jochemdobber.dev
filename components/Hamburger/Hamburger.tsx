import React from 'react'
import styles from './Hamburger.module.css'

const Hamburger = () => {
  return (
    <button
      className={`${styles.hamburger} ${styles.hamburgerArrow}`}
      type="button"
    >
      <span className={styles.hamburgerBox}>
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

export default Hamburger
