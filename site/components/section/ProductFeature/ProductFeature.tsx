import type { VFC } from "react"

interface Props {
  caption: string
  heading: string
  title: string
  description: string
  image: string
  layout: 'image-left' | 'image-right' | 'image-center'
}
const ProductFeature: VFC<Props> = () => {
  return (
    <>Product FEATURE</>
  )
}
export default ProductFeature