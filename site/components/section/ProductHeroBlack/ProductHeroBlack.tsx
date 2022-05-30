/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading: string
  title: string
  isCherry: boolean
  image: {
    src: string
  }
}
const ProductHeroBlack: VFC<Props> = ({ heading, title, image, isCherry }) => {
  return (
    <div className="bg-gray-darker p-4">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="text-red fw-bold">{heading}</div>
          <div className="fs-1 fw-bold text-white" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        {isCherry && (
          <img className="ms-5" src="/images/cherry-logo.png" alt="Cherry MX" height={80} />
        )}
      </div>
      <img className="img-fluid" src={image.src} alt={title} />
    </div>
  )
}
export default ProductHeroBlack
