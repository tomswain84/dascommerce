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
  fill?: boolean
  image: {
    src: string,
    breakoutSrc?: string,
    contained?: boolean
  }
  className?: string
}
const ProductHero: VFC<Props> = ({ heading, title, image, hasPrice, price, currency, isCherry, fill, className }) => {
  const ImageBlock: VFC = () => (
    <>
      <img className="img-fluid d-none d-sm-block breakout" src={image.src} alt={stripHTML(title)} />
      {image.breakoutSrc && (
        <img className="d-sm-none mt-5 breakout" src={image.breakoutSrc} alt={stripHTML(title)} />
      )}
    </>
  )
  const Cherry: VFC = () => (
    <img className="cherry-logo my-4 img-fluid" src="/images/cherry-logo.png" alt={heading}></img>
  )
  const Heading: VFC<{ noCherry?: boolean }> = ({ noCherry } = { noCherry: false }) => (
    <figure className="heading">
      <figcaption>
        <h1>
          <small>{heading}</small>
          <br />{title}
        </h1>
        {isCherry && !noCherry && <Cherry />}
        {hasPrice && (
          <h6 className="mt-5">
            Starting at:
            <span className="text-red ms-1">{currency || '$'}{price}</span>
          </h6>
        )}
      </figcaption>
    </figure>
  )
  return (
    <>
      <section className={`bg-white section-pad ${className || ''}`}>
        <div className="container-boxed">
          <div className="row">
            {fill ? (
              <>
                <div className="col-sm-6">
                  <div className="row align-items-center">
                    <div className="col">
                      <Heading noCherry />
                    </div>
                    {isCherry && (
                      <div className="col">
                        <Cherry />
                      </div>
                    )}
                  </div>
                </div>
                {!image.contained && <ImageBlock />}
              </>
            ) : (
              <div className="col">
                <Heading />
                {!image.contained && <ImageBlock />}
              </div>
            )}
          </div>
        </div>
        {image.contained && (
          <div className="container home-hero-image p-0">
            <div className="row g-0">
              <ImageBlock />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
export default ProductHero
