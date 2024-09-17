import React from 'react'
import styles from './WorkSection.module.css'
import { Group, Stack } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import Divider from '../Divider/Divider'
import Link from 'next/link'

interface WorkSectionProps {
  title: string
  description: string
  tags: string[]
}

const WorkSection = (props: WorkSectionProps) => {
  const { title, description, tags } = props

  return (
    <div className={styles.container}>
      <Link href={`/my-work/${title.toLowerCase()}`} className={styles.link}>
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
          <Stack mt={'auto'} className={styles.tagContainer}>
            {tags.map((tag, index) => (
              <div className={styles.tag} key={index}>
                {tag}
              </div>
            ))}
          </Stack>
        </Group>
        <Divider />
      </Link>
    </div>
  )
}

export default WorkSection
