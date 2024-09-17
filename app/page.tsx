'use client'
import React, { useRef } from 'react'
import { Group, Stack } from '@mantine/core'
import { HeroTitle } from '@/components/HeroTitle/HertoTitle'
import WorkSection from '@/components/WorkSection/WorkSection'
import Contact from '@/components/Contact/Contact'
import Container from '@/components/Container/Container'
import styles from './page.module.css'
import Link from 'next/link'

export default function HomePage() {
  const workSectionRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <HeroTitle />
      <section ref={workSectionRef}>
        <Container>
          <h2 className={styles.title}>Featured work</h2>
          <Stack gap={'xl'} justify="space-around">
            <WorkSection
              title="Preaz"
              description="desktop web app"
              tags={['react', 'dotnet', 'kubernetes']}
            />
            <WorkSection
              title="Bet-slip"
              description="mobile web app"
              tags={['react', 'vite', 'AWS']}
            />
          </Stack>
          <Group justify="space-around">
            <Link className={styles.link} href={'/my-work'}>
              See all my work
            </Link>
          </Group>
        </Container>
      </section>
      <footer ref={contactRef}>
        <Contact />
      </footer>
    </>
  )
}
