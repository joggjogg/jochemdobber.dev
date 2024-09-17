'use client'

import React, { useState } from 'react'
import { Group, Stack } from '@mantine/core'
import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'
import Hamburger from '../Hamburger/Hamburger'
import { bright } from '@/fonts/fonts'
import Socials from '../Socials/Socials'

const Header = ({ scrollToContactRef }: { scrollToContactRef: () => void }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const toggle = () => setIsActive(current => !current)
  return (
    <div className={styles.container}>
      <div className={`${styles.overlay} ${isActive ? styles.open : ''}`}>
        <div className={styles.grow}>
          <div className={`${styles.navigation} ${bright.className}`}>
            <Link className={styles.link} href={'/'}>
              Home
            </Link>
            <Link className={styles.link} href={'/my-work'} onClick={toggle}>
              My work
            </Link>
            <Link className={styles.link} href={'/about-me'} onClick={toggle}>
              About me
            </Link>
            <div
              className={styles.link}
              onClick={() => {
                setIsActive(current => !current)
                setTimeout(() => {
                  scrollToContactRef()
                }, 300)
              }}
            >
              Contact
            </div>
          </div>
          <Stack mt={'auto'} align="center" justify="flex-end">
            <Socials />
          </Stack>
        </div>
      </div>
      <div className={styles.header}>
        <Group wrap="nowrap" justify="space-between">
          <Link href={'/'}>
            <Image
              src={'151c8588-0793-47db-e014-62a5aad8c100'}
              width={269}
              height={124}
              alt="Jochem Dobber"
            />
          </Link>

          <Hamburger
            active={isActive}
            onClick={() => setIsActive(current => !current)}
          />
        </Group>
      </div>
    </div>
  )
}

export default Header
