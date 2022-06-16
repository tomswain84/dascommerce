/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading: string
  title: string
  fill?: boolean
  isCherry: boolean
  image: {
    src: string
    padding?: string
  }
}
const ProductHeroBlack: VFC<Props> = ({ heading, title, image, isCherry, fill: _fill }) => {
  const fill = _fill || false
  return (
    <section id="hero" className="bg-gray-darker text-white pb-sm-5 d-flex flex-column">
      <div className="container-boxed">
        <div className="row">
          <div className={fill ? 'col-sm-12' : 'col-sm-6'}>
            <div className="row align-items-center">
              <div className="col">
                <figure className="heading mt-lg-0">
                  <figcaption className="text-white">
                    <h1>
                      <small>{heading}</small>
                      <br />
                      <span dangerouslySetInnerHTML={{ __html: title }} />
                    </h1>
                  </figcaption>
                </figure>
              </div>
              {isCherry && (
                <div className="col">
                  <img className="cherry-logo img-fluid" src="/images/cherry-logo.png" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid home-hero-image py-0 ${image.padding || 'px-0'}`}>
        <div className="row g-0">
          <img className="intro img-fluid" src={image.src} alt={heading} style={{ maxWidth: 'fit-content' }} />
        </div>
      </div>
    </section>
  )
}
export default ProductHeroBlack
