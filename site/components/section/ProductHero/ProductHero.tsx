/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
  heading: string
  title: string
  hasPrice: boolean
  price?: number
  currency?: '$'
  isCherry: boolean
  image: {
    src: string
  }
}
const ProductHero: VFC<Props> = ({ heading, title, image, hasPrice, price, currency }) => {
  return (
    <>
      <div>{heading}</div>
      <div>{title}</div>
      {hasPrice && (
        <div>STARTING AT: <span className="text-red fw-bold">{currency || '$'}{price}</span></div>
      )}
      <img className="img-fluid" src={image.src} alt={title} />
    </>
  )
}
export default ProductHero