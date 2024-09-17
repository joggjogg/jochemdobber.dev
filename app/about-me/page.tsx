import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div>
      <h1 className={styles.title}>About me</h1>
      <p className={styles.description}>
        As you have already read, I&apos;m an Olympic athlete. In the 2021 Tokyo
        Olympics I competed in the 400 meter and 4x400 meter. Together with my
        team mates I won a silver medal in the 4x400 meter.
      </p>

      <div className={styles.group}>
        <div className={styles.image}>
          <Image
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            src={'4fd5f3d7-9fdb-4aa2-9112-9b9e85183400'}
            alt="Jochem Dobber Tokyo Olympics 4x400 meter relay handover"
          />
        </div>
        <div className={styles.image}>
          <Image
            fill
            style={{ objectFit: 'contain', objectPosition: 'right' }}
            src={'d94ad7ee-a9c9-479f-820b-337cb1f02900'}
            alt="Jochem Dobber European Championships Munich 400 meter"
          />
        </div>
      </div>

      <p className={styles.description}>
        Coffee is my second greatest passion. The past few years I&apos;ve grown
        as a barista and coffee nerd. One of my life goals is to have my own
        coffee roastery.
      </p>

      <p className={styles.description}>
        In my spare time I like to shoot analog pictures or cook for friends and
        family.
      </p>

      <div className={styles.group}>
        <div className={styles.image}>
          <Image
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            src={'4313d153-bd24-4c46-0514-d1b001ec3400'}
            alt="Jochem Dobber brewing coffee with an Aeropress"
          />
        </div>
        <div className={styles.image}>
          <Image
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            src={'3760f118-2aea-476b-cd80-cadc648f7c00'}
            alt="Analog photo of Parisian street with bike"
          />
        </div>
      </div>

      <p className={styles.description}>
        I really like to create things. Whether it is coffee, delicous food or
        photograps. Creating applications to help other people fits well in to
        this picture. This together with the flexibility that comes with working
        as a freelance developer allows me to pursue and achieve my goals in
        track and field.
      </p>

      <p className={styles.description}>
        Los Angeles 2028, I&apos;ve got my eyes on you 😎.
      </p>
    </div>
  )
}

export default AboutMe
