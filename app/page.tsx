'use client'
import React, { useRef } from 'react'
import { Stack } from '@mantine/core'
import { HeroTitle } from '@/components/HeroTitle/HertoTitle'
import WorkSection from '@/components/WorkSection/WorkSection'
import Contact from '@/components/Contact/Contact'
import Container from '@/components/Container/Container'

export default function HomePage() {
  const workSectionRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToWorkSection = () => {
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeroTitle scrollToRef={scrollToWorkSection} />
      <section ref={workSectionRef}>
        <Container>
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
            {/* <WorkSection
              title="trackify"
              description="SaaS "
              tags={['react', 'dotnet', 'AWS']}
            /> */}
          </Stack>
        </Container>
      </section>
      <footer ref={contactRef}>
        <Contact />
      </footer>
    </>
  )
}
