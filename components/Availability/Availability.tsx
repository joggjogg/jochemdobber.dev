import React from 'react'
import styles from './Availability.module.css'

const Availability = ({ available }: { available: boolean }) => {
  return (
    <div
      className={`${styles.beacon} ${available ? styles.available : styles.working}`}
    >
      {available ? 'Available for work' : 'Currently working'}
    </div>
  )
}

export default Availability
