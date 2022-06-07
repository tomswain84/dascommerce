import ProductCard from "@components/product/ProductCard"
import type { VFC } from "react"
import allProducts from '@data/products.json'
import { Product } from "@components/product/ProductCard/ProductCard"

interface Props {
  sectionId?: string
  title: string,
  className?: string
  series: 'Q' | 'FOUR',
  boxed?: boolean
}
const RelatedProducts: VFC<Props> = ({ sectionId, title, series, className, boxed: _boxed }) => {
  const boxed = _boxed || false
  const products = allProducts.filter(p => p.series === series) as Product[]
  return (
    <section id={sectionId || 'productLineup'} className={`section-pad ${className || 'bg-gray-lighter'}`}>
      <div className={boxed ? 'container-boxed' : 'container'}>
        <div className="row">
          <div className="col">
            <figure className="heading m-0">
              <figcaption>
                <h2>
                  <small>Das Keybaord</small>
                  <br />{title} Lineup
                </h2>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="product-cards row row-cols-1 row-cols-sm-3 row-cols-lg-3 gy-4">
          {/* <?php include '../parts/part-category-keyboards-grid.php'; ?> */}
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default RelatedProducts
