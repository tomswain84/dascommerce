import ProductCard from "@components/product/ProductCard"
import type { VFC } from "react"
import allProducts from '@data/products.json'
import { Product } from "@interfaces/product"
import useTrans from "lang/useTrans"

interface Props {
  sectionId?: string
  title: string,
  className?: string
  series: 'Q' | 'FOUR',
  boxed?: boolean
  switch?: "GAMMA ZULU" | "CHERRY MX RGB" | "CHERRY MX" | 'ALL'
}
const RelatedProducts: VFC<Props> = ({ sectionId, title, series, className, boxed: _boxed, switch: _switch }) => {
  const { $html } = useTrans()
  const boxed = _boxed || false
  const products = allProducts.filter(p => p.series === series && (typeof _switch === 'undefined' || p.switch === _switch)) as Product[]
  return (
    <section id={sectionId || 'productLineup'} className={`section-pad ${className || 'bg-gray-lighter'}`}>
      <div className={boxed ? 'container-boxed' : 'container'}>
        <div className="row">
          <div className="col">
            <figure className="heading m-0">
              <figcaption>
                <h2>
                  <small dangerouslySetInnerHTML={$html('related-products')} />
                </h2>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4">
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
