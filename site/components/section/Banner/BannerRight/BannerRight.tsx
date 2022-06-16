/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC } from "react"
import { BannerProps } from "../Banner"

const BannerRight: VFC<BannerProps> = ({ content, image }) => {
  const { title, description, background } = content
  return (
    <div className="container-boxed">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 order-md-2">
          <img className="img-fluid rounded mb-3 mb-md-0" src={image.src} alt={stripHTML(title)} />
        </div>
        <div className="col-12 col-md-6">
          <figure className="heading mb-0">
            <figcaption>
              <h1 className="mb-4" dangerouslySetInnerHTML={{ __html: title }} />
            </figcaption>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </figure>
        </div>
      </div>
    </div>
  )
}
export default BannerRight