import Image from "next/image"
import type { VFC } from "react"

interface BannerImage {
  position: "left" | "right" | "bottom" | "top"
  src: string
  rounded?: boolean
  width?: string | number
  height?: string | number
}
interface SectionBannerProps {
  image: BannerImage,
  title: string,
  button?: string,
  description: string
  textAlign?: 'center' | 'left' | 'right'
}
const SectionBanner: VFC<SectionBannerProps> = ({ image, title, button, description, textAlign }) => {
  let flexDirection, col
  switch (image.position) {
    case "right":
      flexDirection = 'flex-row-reverse'
      col = ''
      break
    case 'bottom':
      flexDirection = 'flex-column-reverse'
      col = 'col-md-12'
      break
    case 'top':
      flexDirection = 'flex-column'
      col = 'col-md-12'
      break
    default: // left
      flexDirection = 'flex-row'
      col = ''
      break
  }
  return (
    <div className={`d-flex justify-content-center align-items-center ${flexDirection}`} style={{ gap: 10 }}>
      <div className={`d-flex position-relative justify-content-center ${col}`}>
        <Image
          className="rounded-3"
          src={image.src} alt={title}
          layout="fixed"
          width={image.width || 500} height={image.height || 500}
          objectFit="cover"
          quality={100}
          unoptimized={true}
        />
      </div>
      <div className={`text-${textAlign || 'center'} ${col}`}>
        <h5>{title}</h5>
        <p>{description}</p>
        {button && (
          <button className="text-capitalize">{button}</button>
        )}
      </div>
    </div>
  )
}

export default SectionBanner
