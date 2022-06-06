import ProductCard from "@components/product/ProductCard"
import type { VFC } from "react"
import allProducts from '@data/products.json'

interface Props {
  title: string,
  series: 'Q' | 'FOUR'
}
const RelatedProducts: VFC<Props> = ({ title, series }) => {
  const products = allProducts.filter(p => p.series === series)
  return (
    <section id="productLineup" className="bg-gray-lighter section-pad">
      <div className="container">
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
