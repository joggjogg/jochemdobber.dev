'use client'
import React from 'react'
import { Container, Text, Button, Group, Avatar } from '@mantine/core'
import classes from './HeroTitle.module.css'
import Image from 'next/image'

export function HeroTitle() {
  return (
    <section className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Avatar
          src={`https://imagedelivery.net/JXV2YHMjHNlIvjEy_tpsRQ/848ecc3d-530d-4bd8-648d-e36042769900/public`}
          size={300}
          radius={'sm'}
          mb="xl"
        />

        <Image
          src={'151c8588-0793-47db-e014-62a5aad8c100/public'}
          width={603}
          height={346}
          alt="Jochem Dobber"
        />

        <Text className={classes.description}>
          Hi, I&apos;m Jochem. Next to a proffesional athlete I&apos;m working
          as a freelance web-developer.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="outline"
            color="white"
          >
            See my work
          </Button>
        </Group>
      </Container>
    </section>
  )
}
