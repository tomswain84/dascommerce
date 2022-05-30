import ProductCard from "@components/product/ProductCard"
import { useRouter } from "next/router"
import type { VFC } from "react"
import products from '@data/products.json'

const Category: VFC = () => {
  const router = useRouter()
  const { slug, filter } = router.query
  if (slug && slug[0]) {
    const category = slug[0].replace('category-', '')

    const getFilter = () => {
      switch (filter) {
        case 'formac':
          return 'FOR MAC'
        case 'forpc':
          return 'FOR PC'
        default:
          return 'ALL'
      }
    }

    return (
      <>
        <div className="d-flex justify-content-between">
          <h1 className="text-uppercase">{category}</h1>
          <button className="rounded-pill px-4">SHOP BY CATEGORY</button>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h6>FILTER:</h6>
        </div>
        <hr />
        <div>
          <h4>MECHANICAL</h4>
          <h3>KEYBOARDS</h3>
          <div className="d-flex justify-content-between">
            <p>FILTER: <span className="text-uppercase">{getFilter()}</span></p>
            <button className="rounded-pill">CLEAR FILTER x</button>
          </div>
          <p>Das Keyboard uses premium materials and award-winning technology to deliver an unmatched typing experience. Every new mechanical keyboard comes with free shipping inside the continental US, a 30-day money back guarantee and a 1-year limited warranty.</p>
        </div>
        <hr />
        {/* product list */}
        {products.length && (
          <div className="row">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </>
    )
  }
  return null
}

export default Category