import type { VFC } from "react"
import products from '@data/products.json'

const ProductDetail: VFC<{ slug: string }> = ({ slug }) => {
  const product = products.find(p => p.slug === slug)
  if (!product) return null
  return (
    <>PRODUCT PAGE</>
  )
}
export default ProductDetail