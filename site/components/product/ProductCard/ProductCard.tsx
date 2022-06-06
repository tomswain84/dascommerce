/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import filters from '@data/filters.json'
import Link from "@components/core/Link"

interface Product {
  id: number,
  name: string,
  slug: string,
  collection: string,
  price: number,
  currency: string | '$',
  image: string,
  description: string,
  tags: string[],
  keystroke: string,
  switch: string
}

const ProductCard: VFC<{ product: Product }> = ({ product }) => {
  const tags = filters.filter(f => product.tags.includes(f.tag))
  const productUrl = `/products/${product.slug}`
  return (
    <div id="5QS" className="col filterDiv smart-rgb for-pc for-mac supercharged backlit aluminum ubuntu q-series">
      <figure className="card category-keyboards <?=$product_series?>">
        <Link className="btn" href={productUrl} title="Product Details">
          <img src={product.image} className="img-fluid card-img-top" alt={product.name} />
        </Link>
        <figure className="heading text-center">
          <figcaption>
            <h2>
              <small>Das Keyboard</small>
              <br />{product.name}
            </h2>
          </figcaption>
        </figure>
        <figcaption className="card-body d-flex flex-column">
          <h5 className="price">
            Starting at
            <span className="text-red ms-2">{product.currency}{product.price}</span>
          </h5>
          <p className="desc">{product.description}</p>
          <div className="tags">
            {tags.map(item => (
              <Link
                key={item.tag}
                href={`/products/category-mechanical-keyboards?filter=${item.filter}`}
                className={`tag tag-${item.tag}`}
                data-bs-toggle="tooltip"
                title={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="row specs g-0 mt-auto">
            <div className="col">
              <span className="spec-title">{product.keystroke}</span>
              <span className="spec-desc">Keystroke</span>
            </div>
            <div className="col">
              <span className="spec-title">{product.switch}</span>
              <span className="spec-desc">Switchbrand</span>
            </div>
          </div>
        </figcaption>
        <div className="card-footer">
          <Link className="btn" href={productUrl} title="Product Details">Product Details</Link>
        </div>
      </figure>
    </div>
  )
}
export default ProductCard
