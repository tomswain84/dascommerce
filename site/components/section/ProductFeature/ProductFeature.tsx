import type { VFC } from "react"

interface Props {
  caption?: string
  heading: string
  title: string
  description: string
  image: string
  layout: 'image-left' | 'image-right' | 'image-center'
}
const ProductFeature: VFC<Props> = ({ caption, heading, title, description, image, layout }) => {
  return (
    <>
      <h4>{caption}</h4>
      <h2>{heading}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )
}
export default ProductFeature