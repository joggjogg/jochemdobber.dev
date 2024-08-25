'use client'
import React from 'react'
import { Container, Stack } from '@mantine/core'
import { HeroTitle } from '@/components/HeroTitle/HertoTitle'
import WorkSection from '@/components/WorkSection/WorkSection'

export default function HomePage() {
  return (
    <>
      <HeroTitle />
      <section>
        <Container my="xl" size={1296}>
          <Stack gap={'xl'} justify="space-around" my={'6rem'}>
            <WorkSection
              title="Preaz"
              description="Desktop web app"
              tags={['react', 'dotnet', 'kubernetes']}
            />
            <WorkSection
              title="bet-slip"
              description="Mobile web app"
              tags={['react', 'vite', 'AWS']}
            />
            <WorkSection
              title="wheredidmytimego"
              description="SaaS "
              tags={['react', 'dotnet', 'AWS']}
            />
          </Stack>
        </Container>
      </section>
    </>
  )
}
