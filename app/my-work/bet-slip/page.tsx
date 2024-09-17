import styles from '../layout.module.css'
import { Group, Stack } from '@mantine/core'
import React from 'react'
import CaptionedImage from '@/components/CaptionedImage/CaptionedImage'

const BetSlip = () => {
  return (
    <>
      <div className={styles.title}>Bet-slip</div>
      <div className={styles.overview}>Overview</div>
      <div className={styles.overviewContainer}>
        <Stack className={styles.descriptionContainer}>
          <p className={styles.summary}>
            A mobile web app for administrating sold lottery tickets.
          </p>
          <p className={styles.description}>
            The client wish was to have a simple app to administer lottery
            tickets they sold to clients. Since the app was going to have a
            small number of end users this was an opportunity for me to get
            familiar with with a big cloud computing service.
          </p>
          <p className={styles.description}>
            Low (to no costs) and a quickly delivered minimal viable product
            made the use of AWS a good choice for this project.
          </p>
        </Stack>
        <Stack>
          <div>
            <div className={styles.category}>Client</div>
            <div className={styles.details}>private</div>
          </div>
          <div>
            <div className={styles.category}>Project</div>
            <div className={styles.details}>Mobile web app</div>
          </div>
          <div>
            <div className={styles.category}>Technologies</div>
            <div className={styles.details}>React</div>
            <div className={styles.details}>Vite</div>
            <div className={styles.details}>AWS</div>
          </div>
        </Stack>
      </div>

      <Group className={styles.group} gap={'xl'}>
        <CaptionedImage
          mobile
          src="92f945d1-e0ef-4fb1-4806-cc120a802700"
          caption="Adding a sold bet to the app"
        />
        <CaptionedImage
          mobile
          src="16901a31-7c61-4d93-05ee-30e0b68f9500"
          caption="Summary of the sold bet"
        />
      </Group>

      <p className={styles.description}>
        The goal of this project was to simplify the process of selling tickets
        and thus saving time. Together with the client we came to a solution
        where they could:
      </p>
      <ol className={styles.list}>
        <li>Sell multiple numbers in one action</li>
        <li>Sell from multiple locations</li>
      </ol>

      <p className={styles.description}>
        After a bet is confirmed it is added to the system. It is displayed in a
        list with the most important details for my client. The total amount of
        the bet, the unique amount of numbers and the amount that should be paid
        out to the customer. To keep the performance high older bets are lazy
        loaded.
      </p>

      <Group className={styles.group} gap={'xl'}>
        <CaptionedImage
          mobile
          src="cd85bd00-be5d-4cc0-4a5e-5e481f640a00"
          caption="Overview of sold bets"
        />
        <CaptionedImage
          mobile
          src="be619098-7f79-4139-0b6d-028263093a00"
          caption="Loading older bets on scroll"
        />
      </Group>

      <p className={styles.description}>
        In order to do automatic payout calculation the end user is able to
        enter the winning lottery numbers. After the winning numbers of a
        certain day are available the payout on the bets of that day are
        calculated.
      </p>

      <Group className={styles.group} gap={'xl'}>
        <CaptionedImage
          mobile
          src="62856080-0426-4a19-20ae-0831f8e8a000"
          caption="Winning numbers"
        />
        <CaptionedImage
          mobile
          src="f971949d-fd1e-4827-cda9-345b35fb8200"
          caption="Detail view of bet"
        />
        <CaptionedImage
          mobile
          src="1a3ef138-cf3e-420b-ec36-eb743a2bcc00"
          caption="Payout calculation"
        />
      </Group>

      <p className={styles.description}>
        In hindsight this project is ethically not exactly fitting to me as a
        person, but I&apos;m still happy I did it. This project made me learn
        the benefits, and equally important the drawbacks, of working with a big
        cloud computing service.
      </p>
    </>
  )
}

export default BetSlip
