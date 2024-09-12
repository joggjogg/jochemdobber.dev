import React from 'react'
import { Group } from '@mantine/core'
import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Group justify="space-between">
          <Link href={'/'}>
            <Image
              src={'151c8588-0793-47db-e014-62a5aad8c100'}
              width={269}
              height={124}
              alt="Jochem Dobber"
            />
          </Link>

          {/* <Hamburger /> */}
        </Group>
      </div>
    </div>
  )
}

export default Header
