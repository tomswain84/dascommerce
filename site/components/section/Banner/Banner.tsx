/* eslint-disable @next/next/no-img-element */
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
  titleExtra?: string
  button?: string,
  description: string
  textAlign?: 'center' | 'left' | 'right'
}
const SectionBanner: VFC<SectionBannerProps> = ({ image, title, titleExtra, button, description, textAlign }) => {
  let flexDirection, col
  switch (image.position) {
    case "right":
      flexDirection = 'flex-row-reverse'
      col = 'col-md-6'
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
      col = 'col-md-6'
      break
  }
  return (
    <div className={`d-flex justify-content-center align-items-center ${flexDirection}`} style={{ gap: 10 }}>
      <div className={`d-flex position-relative justify-content-center ${col}`}>
        <img className="img-fluid" src={image.src} alt={title} />
      </div>
      <div className={`text-${textAlign || 'center'} ${col}`}>
        <h5 dangerouslySetInnerHTML={{ __html: title }} />
        {titleExtra && (
          <h4 dangerouslySetInnerHTML={{ __html: titleExtra }} />
        )}
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {button && (
          <button className="text-capitalize">{button}</button>
        )}
      </div>
    </div>
  )
}

export default SectionBanner
