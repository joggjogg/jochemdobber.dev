import React from 'react'
import styles from '../layout.module.css'
import { Stack } from '@mantine/core'
import CaptionedImage from '@/components/CaptionedImage/CaptionedImage'

const Preaz = () => {
  return (
    <>
      <div className={styles.title}>Preaz</div>
      <div className={styles.overviewContainer}>
        <Stack className={styles.descriptionContainer}>
          <p className={styles.summary}>
            From a troublesome Excel and Dropbox based administration to a fully
            fledged massage planning and administrating web application.
          </p>
          <p className={styles.description}>
            Preaz was using an Excel based administration for all their clients
            and massages. While sufficient at first the growing number of
            clients started to show cracks in their system. The scope of the
            project was to create an application where they could seemlessly
            work together in a shared planning custom made to their massage
            specific environment. Together with my partners we chose to build a
            desktop web application to play into the strengths of a full page
            calendar.
          </p>
          <p className={styles.description}>
            As of 2024 Preaz has been using their system for more than 2 years
            and we are still working closely together on continuously expanding
            the application to grow with their business.
          </p>
        </Stack>
        <Stack>
          <div>
            <div className={styles.category}>Client</div>
            <div className={styles.details}>preaz sportmassage</div>
          </div>
          <div>
            <div className={styles.category}>Project</div>
            <div className={styles.details}>desktop web app</div>
          </div>
          <div>
            <div className={styles.category}>Technologies</div>
            <div className={styles.details}>react</div>
            <div className={styles.details}>dotnet</div>
            <div className={styles.details}>kubernetes</div>
          </div>
        </Stack>
      </div>

      <CaptionedImage
        src="aad716aa-dec8-44bf-8496-7f95f8549500"
        caption="Main calendar view"
      />

      <p className={styles.description}>
        The full screen calendar gives Preaz a clear insight in their planning.
        Their planning includes multiple branches and allows multiple users to
        simultaniously plan massages without the fear of conflicts.
      </p>

      <CaptionedImage
        src="06078600-ab57-44a4-fe4c-4cbffe7e1f00"
        caption="Availability for employees"
      />

      <p className={styles.description}>
        To make planning of massages easier, Preaz wanted to create insight in
        availability from their employees. The app even gives warning when an
        appointment is created when there is no availabilty from the employee
        linked to the appointment.
      </p>

      <CaptionedImage
        src="58b71110-d199-4326-f0d2-e1a4de08ac00"
        caption="Automatic appointment reminders"
      />

      <p className={styles.description}>
        Automatic appointment reminders get sent to opted-in clients via
        WhatsApp. To give Preaz more control over the messaging system we
        decided to still have a manual option to (re)send messages to clients.
      </p>

      <CaptionedImage
        src="e46ca963-c290-4672-4ba1-9d5f9c1b1800"
        caption="Fool proof administration"
      />

      <p className={styles.description}>
        By switching to our system Preaz has a fool proof administration. Based
        on the appointments in the app they can generate overviews in revenue by
        branch or hours worked by employee.
      </p>
    </>
  )
}

export default Preaz
