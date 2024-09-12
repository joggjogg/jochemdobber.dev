import React from 'react'
import styles from './Socials.module.css'
import { ActionIcon, Group, rem } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className={styles.container}>
      <Group justify="flex-start" gap={'xl'}>
        <Link href={'https://instagram.com/jochemdobber'}>
          <ActionIcon variant="transparent" color="#F9FAFF" size={'xxl'}>
            <IconBrandInstagram style={{ width: rem(50), height: rem(50) }} />
          </ActionIcon>
        </Link>

        <Link href={'https://www.linkedin.com/in/jochem-dobber-320566198'}>
          <ActionIcon variant="transparent" color="#F9FAFF" size={'xxl'}>
            <IconBrandLinkedin style={{ width: rem(50), height: rem(50) }} />
          </ActionIcon>
        </Link>

        <Link href={'https://github.com/joggjogg'}>
          <ActionIcon variant="transparent" color="#F9FAFF" size={'xxl'}>
            <IconBrandGithub style={{ width: rem(50), height: rem(50) }} />
          </ActionIcon>
        </Link>
      </Group>
    </div>
  )
}

export default Socials
