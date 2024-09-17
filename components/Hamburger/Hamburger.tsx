import React from 'react'
import styles from './Hamburger.module.css'

const Hamburger = ({
  active,
  onClick,
}: {
  active: boolean
  onClick: () => void
}) => {
  return (
    <button
      className={`${styles.hamburger} ${styles.hamburgerSpring} ${active ? styles.isActive : ''}`}
      type="button"
      onClick={onClick}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )
}

export default Hamburger
