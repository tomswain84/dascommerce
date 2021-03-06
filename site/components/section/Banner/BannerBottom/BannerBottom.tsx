/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC } from "react"
import { BannerProps } from "../Banner"

const BannerBottom: VFC<BannerProps> = ({ content, image, containerPadding, containerBoxed, BannerButton }) => {
  const { title, titleExtra, titleSmall, description, textAlign, background } = content
  const blendClass = image.blend ? 'blend-plus-lighter' : ''
  return (
    <>
      <div className={`${containerBoxed ? 'container-boxed' : 'container'} ${containerPadding || ''}`}>
        <div className="row mb-md-4">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <figure className={`heading text-${textAlign || 'center'}`}>
              <figcaption>
                {titleExtra ? (
                  <h1 className="mb-5" dangerouslySetInnerHTML={{__html: `
                    <small>${title}</small>
                    <br />
                    ${titleExtra}
                  `}}>
                  </h1>
                ) : titleSmall ? (
                  <h2 dangerouslySetInnerHTML={{ __html: title }} className="mb-4" />
                ) : (
                  <h1 dangerouslySetInnerHTML={{ __html: title }} />
                )}
              </figcaption>
              <p dangerouslySetInnerHTML={{ __html: description }} />
              <BannerButton />
            </figure>
          </div>
        </div>
      </div>
      <div className={`${image.fluid ? 'container-fluid' : 'container'} ${background === 'dark' ? 'bg-gray-darker' : (image.stretch ? 'p-0' : '')}`}>
        {!image.fluid ? (
          <img className={`img-fluid ${blendClass} ${image.rounded ? 'rounded' : ''}`} src={image.src} alt={stripHTML(title)} />
        ) : (
          <>
            {image.stretch === true ? (
              <div className="row g-0">
                <div className="col">
                  <img src={image.src} alt={stripHTML(title)} className={`img-fluid w-100 ${blendClass}`} />
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <img className={`d-block mx-auto mb-4 mb-md-5 mw-100 ${blendClass} ${image.rounded ? 'rounded' : ''}`} src={image.src} alt={stripHTML(title)} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}
export default BannerBottom
