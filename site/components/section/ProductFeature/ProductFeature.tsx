/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

export interface ProductFeatureProps {
  heading: string
  title: string
  description: string
  descriptionHint?: string
  extraElement?: JSX.Element
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

const ProductFeature: VFC<ProductFeatureProps> = ({ heading, title, description, descriptionHint, extraElement, image, extras }) => {
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
              <h2 dangerouslySetInnerHTML={{
                __html: `
                <small>${heading}</small>
                <br />${title}
              `}}
              />
            </figcaption>
          </figure>
          {image.position === 'center' && <ImageBlock />}
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {descriptionHint && (
            <p className="small text-gray-light" dangerouslySetInnerHTML={{ __html: descriptionHint }} />
          )}
          {extras && (
            <>
              {extras.map((extra, index) => (
                <>
                  <h6 className="text-red mt-4" dangerouslySetInnerHTML={{ __html: extra.title }} />
                  <p dangerouslySetInnerHTML={{ __html: extra.description }} />
                </>
              ))}
            </>
          )}
          {extraElement && extraElement}
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
