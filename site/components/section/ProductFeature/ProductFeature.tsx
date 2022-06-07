/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

export interface ProductFeatureProps {
  heading: string
  title: string
  description: string
  descriptionHint?: string
  image: {
    src: string
    alt?: string
    position: 'left' | 'right' | 'center'
  }
  extras?: Array<{
    title: string
    description: string
  }>
}

const ProductFeature: VFC<ProductFeatureProps> = ({ heading, title, description, descriptionHint, image, extras }) => {
  const colClass = () => {
    switch (image.position) {
      case 'left':
        return 'col-md order-md-2'
      case 'right':
        return 'col-md'
      case 'center':
        return 'col text-center'
    }
  }

  const ImageBlock = () => (
    <img className="img-fluid blend-plus-lighter" src={image.src} alt={image.alt || heading} />
  )
  return (
    <>
      <div className="row align-items-center py-5 my-md-0 border-bottom">
        <div className={colClass()}>
          <figure className="heading m-0">
            <figcaption>
              <h2>
                <small>{heading}</small>
                <br />{title}
              </h2>
            </figcaption>
          </figure>
          {image.position === 'center' && <ImageBlock />}
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {descriptionHint && (
            <p className="small text-gray-light">{descriptionHint}</p>
          )}
          {extras && (
            <>
              {extras.map((extra, index) => (
                <>
                  <h6 className="text-red mt-4">{extra.title}</h6>
                  <p dangerouslySetInnerHTML={{ __html: extra.description }} />
                </>
              ))}
            </>
          )}
        </div>
        {image.position !== 'center' && (
          <div className="col-md text-center">
            <ImageBlock />
          </div>
        )}
      </div>
    </>
  )
}
export default ProductFeature
