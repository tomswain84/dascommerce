/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC } from "react"
import { BannerProps } from "../Banner"

const BannerBottom: VFC<BannerProps> = ({ title, description, image, containerPadding, BannerButton }) => {
  return (
    <>
      <div className={`container-boxed ${containerPadding || ''}`}>
        <div className="row mb-md-4">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <figure className="heading text-center">
              <figcaption>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
              </figcaption>
              <p dangerouslySetInnerHTML={{ __html: description }} />
              <BannerButton />
            </figure>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray-darker">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <img className="d-block mx-auto mb-4 mb-md-5 mw-100" src={image.src} alt={stripHTML(title)} />
          </div>
        </div>
      </div>
    </>
  )
}
export default BannerBottom