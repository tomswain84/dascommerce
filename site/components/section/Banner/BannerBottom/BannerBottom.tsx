/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC } from "react"
import { BannerProps } from "../Banner"

const BannerBottom: VFC<BannerProps> = ({ title, titleExtra, description, image, containerPadding, textAlign, background, BannerButton }) => {
  return (
    <>
      <div className={`container-boxed ${containerPadding || ''}`}>
        <div className="row mb-md-4">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <figure className={`heading text-${textAlign || 'center'}`}>
              <figcaption>
                {titleExtra ? (
                  <h1 className="mb-5">
                    <small dangerouslySetInnerHTML={{ __html: title }} />
                    <br />
                    {titleExtra}
                  </h1>
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
      <div className={`container-fluid ${background === 'dark' ? 'bg-gray-darker' : (image.stretch ? 'p-0' : '')}`}>
        {image.stretch === true ? (
          <div className="row g-0">
            <div className="col">
              <img src={image.src} alt={stripHTML(title)} className="img-fluid w-100" />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <img className="d-block mx-auto mb-4 mb-md-5 mw-100" src={image.src} alt={stripHTML(title)} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default BannerBottom
