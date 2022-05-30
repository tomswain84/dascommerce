import type { VFC } from "react"
import products from '@data/products.json'

const ProductDetail: VFC<{ slug: string }> = ({ slug }) => {
  const product = products.find(p => p.slug === slug)
  if (!product) return null
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>{product.name}</h1>

      </div>
    </>
  )
}
export default ProductDetail