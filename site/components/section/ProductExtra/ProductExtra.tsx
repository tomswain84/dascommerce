/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading: string
  extras: Array<{
    title: string
    description: string
    image: {
      src: string
    }
  }>
}
const ProductExtra: VFC<Props> = ({ heading, extras }) => {
  return (
    <div className="text-center">
      <h2>{heading}</h2>
      <div className="d-flex flex-column align-items-center">
        {extras.map(({ title, description, image }, index) => (
          <div key={index}>
            <img className="img-fluid rounded" src={image.src} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductExtra