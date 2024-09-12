interface cloudFlareLoaderProps {
  src: string
  width: number
  quality?: string
}

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src
}

export default function cloudflareLoader({
  src,
  width,
  quality,
}: cloudFlareLoaderProps) {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `https://imagedelivery.net/JXV2YHMjHNlIvjEy_tpsRQ/${normalizeSrc(src)}/${paramsString}`
}
