/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface BannerImage {
  position: "left" | "right" | "bottom" | "top" | 'center'
  src: string
  srcFull?: string
  rounded?: boolean
  width?: string | number
  height?: string | number,
  blend?: boolean
}
interface SectionBannerProps {
  image: BannerImage,
  title: string,
  titleExtra?: string
  button?: string,
  description: string
  textAlign?: 'center' | 'left' | 'right',
  background?: 'light' | 'dark'
  padding?: number | string
}
const SectionBanner: VFC<SectionBannerProps> = ({ image, title, titleExtra, button, description, textAlign, background, padding }) => {
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
    case 'center':
      flexDirection = 'flex-column'
      col = 'col-md-12'
      break
    default: // left
      flexDirection = 'flex-row'
      col = 'col-md-6'
      break
  }
  let backgroundClass, textColorClass = 'text-black'
  switch (background) {
    case 'dark':
      backgroundClass = 'bg-gray-darker'
      textColorClass = 'text-white'
      break
    case 'light':
      backgroundClass = 'bg-gray-lighter'
      break
    default:
      backgroundClass = 'bg-white'
      break
  }
  const imageBlock = (
    <>
      <div className="col-md-6 order-md-1 d-md-flex align-items-center position-relative">
        {image.srcFull && (
          <img className="full-image position-absolute d-none d-xxl-inline" src={image.srcFull} alt={title} />
        )}
        <img className="half-image img-fluid" src={image.src} alt={title} />
      </div>
      {/* <div className={`d-flex position-relative justify-content-center ${col}`}>
        <img className={`img-fluid ${image.blend ? 'blend-plus-lighter' : ''} ${image.rounded ? 'rounded' : ''}`} src={image.src} alt={title} />
      </div> */}
    </>
  )
  return (
    <>
      <section id="values" className="bg-gray-darker dark-section pt-5">
        <div className="container-boxed pt-md-5 mt-xl-5">
          <div className="row mt-xxl-5">
            <div className="col-md-6 order-md-2 d-md-flex align-items-end align-items-xxl-start">
              <figure className="heading text-center mt-5 mt-md-3 pt-md-5">
                <figcaption>
                  <h1 dangerouslySetInnerHTML={{ __html: title }} />
                </figcaption>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                {button && (
                  <a className="btn btn-primary" href="values" title="Read More">
                    {button}
                    <i className="fa-solid fa-caret-right ms-2"></i>
                  </a>
                )}
              </figure>
            </div>
            {imageBlock}
          </div>
        </div>
      </section>
      {/* <div className={`d-flex justify-content-center align-items-center ${flexDirection} ${backgroundClass}`} style={{ gap: 10, padding: padding || 0 }}>
        {image.position !== 'center' ? imageBlock : null}
        <div className={`text-${textAlign || 'center'} ${col} ${textColorClass}`}>
          <h5 dangerouslySetInnerHTML={{ __html: title }} />
          {titleExtra && (
            <h4 dangerouslySetInnerHTML={{ __html: titleExtra }} />
          )}
          {image.position === 'center' && imageBlock}
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {button && (
            <button className="text-capitalize">{button}</button>
          )}
        </div>
      </div> */}
    </>
  )
}

export default SectionBanner
