import { UnstyledButton } from '@mantine/core'
import React from 'react'
import styles from './Button.module.css'

const Button = ({
  children,
  onClick,
  loading = false,
  type = 'button',
}: {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}) => {
  return (
    <UnstyledButton
      onClick={onClick}
      className={`${styles.button} ${loading ? styles.loading : ''}`}
      disabled={loading}
      type={type}
    >
      {children}
    </UnstyledButton>
  )
}

export default Button
