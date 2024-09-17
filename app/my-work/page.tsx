import WorkSection from '@/components/WorkSection/WorkSection'
import { Stack } from '@mantine/core'
import React from 'react'
import styles from './page.module.css'

const Projects = () => {
  return (
    <div>
      <h1 className={styles.title}>My work</h1>
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
    </div>
  )
}

export default Projects
