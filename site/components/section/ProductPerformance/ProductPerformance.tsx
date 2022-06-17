/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  title: string
  description: string
  image: {
    src: string
    alt?: string
  },
  features: {
    gamma?: boolean,
    RGB?: boolean,
    API?: boolean,
    aluminum?: boolean
  }
}
const ProductPerformance: VFC<Props> = ({ title, description, image, features }) => {
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <img className="img-fluid" src={image.src} alt={image.alt || 'Keyboard Right Angle'} />
          </div>
          <div className="col-md">
            <h2 className="text-red">{title}</h2>
            <p className="mb-5">{description}</p>
            <div className="row">
              {features.gamma && (
                <div className="col">
                  <figure className="text-center">
                    <img className="img-fluid mb-3" src="/images/gamma-zulu-badge.png" alt="Gamma Zulu 100M Lifecycle" />
                    <figcaption className="small">World's longest lasting switches</figcaption>
                  </figure>
                </div>
              )}
              {features.RGB && (
                <div className="col">
                  <figure className="text-center">
                    <img className="img-fluid mb-3" src="/images/color-badge.png" alt="Enhanced 16.8M Per Key RGB" />
                    <figcaption className="small">2x ultra enhanced brightness</figcaption>
                  </figure>
                </div>
              )}
              {features.aluminum && (
                <div className="col">
                  <figure className="text-center">
                    <img className="img-fluid mb-3" src="/images/aluminum-badge.png" alt="Aluminum 26.982" />
                    <figcaption className="small">Anodized aluminum top panel</figcaption>
                  </figure>
                </div>
              )}
              {features.API && (
                <div className="col">
                  <figure className="text-center">
                    <img className="img-fluid mb-3" src="/images/open-rest-api-badge.png" alt="Open Rest API" />
                    <figcaption className="small">Program it your way</figcaption>
                  </figure>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductPerformance
