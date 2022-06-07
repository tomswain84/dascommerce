/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC, FC } from "react"
import { BannerProps } from '../Banner'

const BannerLeft: VFC<BannerProps> = ({ containerPadding, image, content, noCol, BannerButton }) => {
  const { title, titleExtra, titlePadding, textAlign, description } = content
  const NoColWrapper: FC<{ className: string }> = (props) => {
    if (noCol) {
      return (
        <>
          {props.children}
        </>
      )
    }
    return (
      <div className={props.className}>
        {props.children}
      </div>
    )
  }
  const ContentBlock = () => (
    <NoColWrapper className="col-md-6 order-md-2 d-md-flex align-items-end align-items-xxl-start">
      <figure className={`heading text-${textAlign} ${titlePadding || 'mt-5 mt-md-3 pt-md-5'}`}>
        <figcaption>
          {titleExtra ? (
            <h2>
              <small>{stripHTML(title)}</small>
              <br />{titleExtra}
            </h2>
          ) : (
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </figcaption>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <BannerButton />
      </figure>
    </NoColWrapper>
  )

  const blendClass = () => {
    switch (image.blend) {
      case true:
        return content.background === 'dark' ? 'blend-plus-lighter' : 'blend-darken'
      default:
        return ''
    }
  }

  const ImageBlock = () => (
    <NoColWrapper className="col-md-6 order-md-1 d-md-flex align-items-center position-relative">
      {image.srcFull && (
        <img className={`full-image position-absolute d-none d-xxl-inline ${blendClass()}`} src={image.srcFull} alt={title} />
      )}
      <img
        className={`img-fluid ${image.className || 'half-image'} ${image.rounded ? 'rounded' : ''} ${blendClass()}`}
        src={image.src} alt={stripHTML(title)}
      />
    </NoColWrapper >
  )

  return (
    <>
      <div className={`container-boxed ${containerPadding || ''}`}>
        <div className="row mt-xxl-5">
          {noCol ? (
            <div className="col-xl-10 offset-xl-1 d-md-flex align-items-center justify-content-between">
              <ContentBlock />
              <ImageBlock />
            </div>
          ) : (
            <>
              <ImageBlock />
              <ContentBlock />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default BannerLeft