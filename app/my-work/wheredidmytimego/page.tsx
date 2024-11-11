import React from 'react'
import styles from '../layout.module.css'
import { Stack } from '@mantine/core'
import CaptionedImage from '@/components/CaptionedImage/CaptionedImage'

const Page = () => {
  return (
    <>
      <div className={styles.title}>Wheredidmytimego</div>
      <div className={styles.overviewContainer}>
        <Stack className={styles.descriptionContainer}>
          <p className={styles.summary}>
            As a freelance developer I often find myself in the situation where
            I didn&apos;t keep track of my hours worked on a project correctly.
            When I&apos;m ready to send the invoice I&apos;m like: where did my
            time go??
          </p>
          <p className={styles.description}>
            As a developer I decided to build a solution myself instead of
            spending money on alternative solutions on the market. A super
            simple time tracking tool based on my needs as a freelance
            developer.
          </p>
        </Stack>
        <Stack>
          <div>
            <div className={styles.category}>Client</div>
            <div className={styles.details}>myself</div>
          </div>
          <div>
            <div className={styles.category}>Project</div>
            <div className={styles.details}>time tracking app</div>
          </div>
          <div>
            <div className={styles.category}>Technologies</div>
            <div className={styles.details}>react</div>
            <div className={styles.details}>dotnet</div>
            <div className={styles.details}>rtk query</div>
            <div className={styles.details}>mantine</div>
          </div>
        </Stack>
      </div>

      <CaptionedImage
        src="5e7e8bc2-517d-4773-90df-629843c59a00"
        caption="TimeFrames"
      />

      <p className={styles.description}>
        The concept is easy. When I start working I start a new TimeFrame. When
        my work is done I stop the TimeFrame. While I&apos;m working I get a
        timer to see how long I&apos;ve been working already.
      </p>

      <CaptionedImage
        src="4264632c-cf7e-4e15-d26b-1697b2c77300"
        caption="Stopping a TimeFrame"
      />

      <p className={styles.description}>
        When stopping a TimeFrame you select the project you worked on and you
        enter a small description on what you have worked on.
      </p>

      <CaptionedImage
        src="0b3c880e-a4af-4355-c706-2fd310818700"
        caption="Detailed view"
      />

      <p className={styles.description}>
        Made a mistake? No worries. TimeFrames are mutable. Change the
        description, the time details or delete the whole TimeFrame in case you
        made a mistake.
      </p>

      <CaptionedImage
        src="19d214b6-60c0-4c0e-7406-b47207590f00"
        caption="Invoicing"
      />

      <p className={styles.description}>
        Ready to send the invoice? By selecting the project the total amount of
        worked hours shows up. Currently I&apos;m working a feature to export
        the linked project TimeFrames to .csv in order to bring transparancy and
        convenience to the process of invoicing.
      </p>
    </>
  )
}

export default Page
