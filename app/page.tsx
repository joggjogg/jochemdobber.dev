'use client'
import React, { useRef } from 'react'
import { Stack } from '@mantine/core'
import { HeroTitle } from '@/components/HeroTitle/HertoTitle'
import WorkSection from '@/components/WorkSection/WorkSection'
import Footer from '@/components/Footer/Footer'
import Container from '@/components/Container/Container'

export default function HomePage() {
  const workSectionRef = useRef<HTMLDivElement>(null)

  const scrollToRef = () => {
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeroTitle scrollToRef={scrollToRef} />
      <section>
        <Container>
          <Stack ref={workSectionRef} gap={'xl'} justify="space-around">
            <WorkSection
              title="preaz"
              description="desktop web app"
              tags={['react', 'dotnet', 'kubernetes']}
            />
            <WorkSection
              title="bet-slip"
              description="mobile web app"
              tags={['react', 'vite', 'AWS']}
            />
            <WorkSection
              title="trackify"
              description="SaaS "
              tags={['react', 'dotnet', 'AWS']}
            />
          </Stack>
        </Container>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
