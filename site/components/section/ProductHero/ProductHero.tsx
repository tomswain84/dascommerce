/* eslint-disable @next/next/no-img-element */
import stripHTML from "@lib/strip-html"
import type { VFC } from "react"

interface Props {
  heading: string
  title: string
  hasPrice: boolean
  price?: number
  currency?: '$'
  isCherry: boolean
  image: {
    src: string,
    breakoutSrc?: string,
  }
}
const ProductHero: VFC<Props> = ({ heading, title, image, hasPrice, price, currency }) => {
  return (
    <>
      <section className="bg-white section-pad">
        <div className="container-boxed">
          <div className="row">
            <div className="col">
              <figure className="heading">
                <figcaption>
                  <h1>
                    <small>{heading}</small>
                    <br />{title}
                  </h1>
                  {hasPrice && (
                    <h6 className="mt-5">
                      Starting at:
                      <span className="text-red ms-1">{currency || '$'}{price}</span>
                    </h6>
                  )}
                </figcaption>
              </figure>
              <img className="img-fluid d-none d-sm-block breakout" src={image.src} alt={stripHTML(title)} />
              {image.breakoutSrc && (
                <img className="d-sm-none mt-5 breakout" src={image.breakoutSrc} alt={stripHTML(title)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProductHero
