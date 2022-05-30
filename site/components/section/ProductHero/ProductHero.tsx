import type { VFC } from "react"

interface Props {
  heading: string
  title: string
  hasPrice: boolean
  price: number
  currency: '$'
  isCherry: boolean
  image: {
    src: string
  }
}
const ProductHero: VFC<Props> = () => {
  return (
    <>Product HERO</>
  )
}
export default ProductHero