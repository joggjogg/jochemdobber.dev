import React from 'react'
import Image from 'next/image'
import styles from './CaptionedImage.module.css'

interface CaptionedImageProps {
  src: string
  caption: string
  mobile?: boolean
}

const CaptionedImage = ({ src, alt, caption, mobile }: CaptionedImageProps) => {
  return (
    <div className={`${styles.container} ${mobile && styles.mobile}`}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        src={src}
        alt={caption}
      />
      <div className={styles.caption}>{caption}</div>
    </div>
  )
}

export default CaptionedImage
