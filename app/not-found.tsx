import React from 'react'
import styles from './not-found.module.css'
import { bright } from '@/fonts/fonts'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={`${bright.className} ${styles.error}`}>404</div>
        <div className={styles.message}>This page could not be found.</div>
      </div>
    </div>
  )
}

export default NotFound
