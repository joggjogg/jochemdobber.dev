import React from 'react'
import styles from './WorkSection.module.css'
import { Group, Stack } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

interface WorkSectionProps {
  title: string
  description: string
  tags: string[]
}

const WorkSection = (props: WorkSectionProps) => {
  const { title, description, tags } = props

  return (
    <div className={styles.container}>
      <Group justify="space-between">
        <Stack gap={0}>
          <Group>
            <div className={styles.title}>{title}</div>
            <div className={styles.arrow}>
              <IconArrowRight />
            </div>
          </Group>
          <div className={styles.description}>{description}</div>
        </Stack>
        <Stack mt={'auto'}>
          {tags.map((tag, index) => (
            <div className={styles.tag} key={index}>
              {tag}
            </div>
          ))}
        </Stack>
      </Group>
      <div className={styles.divider}></div>
    </div>
  )
}

export default WorkSection
