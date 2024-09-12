'use client'
import React from 'react'
import { Text } from '@mantine/core'
import styles from './HeroTitle.module.css'
import Image from 'next/image'
import Container from '../Container/Container'
import Button from '../Button/Button'

interface HeroTitleProps {
  scrollToRef: () => void
}

export function HeroTitle(props: HeroTitleProps) {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.portrait}>
            <Image
              src={'35857f81-b3e2-4b41-3bc3-1024c3bcb300'}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 576px) 100vw, (max-width: 1200px) 33vw"
              alt="Jochem Dobber"
            />
          </div>

          <Image
            src={'151c8588-0793-47db-e014-62a5aad8c100'}
            width={0}
            height={0}
            sizes="100vw"
            className={`${styles.logo} $`}
            style={{ width: '100%', height: 'auto' }}
            alt="Jochem Dobber"
          />
        </div>

        <Text className={styles.description}>
          Hi, I&apos;m Jochem. I&apos;m a web developer and an Olympic track and
          field athlete.
        </Text>

        <Button onClick={props.scrollToRef}>See my work</Button>
      </Container>
    </section>
  )
}
