/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import filters from '@data/filters.json'
import Link from "@components/core/Link"
import type { Product } from "@interfaces/product"

interface Props {
  product: Product
  isRefurbised?: boolean
}
const ProductCard: VFC<Props> = ({ product, isRefurbised }) => {
  const tags = filters.filter(f => product.tags.includes(f.tag))
  const productUrl = `/products/daskeyboard/${isRefurbised ? 'refurbished-' : ''}${product.slug}`
  return (
    <div id={product.slug} className="col filterDiv smart-rgb for-pc for-mac supercharged backlit aluminum ubuntu q-series">
      <figure className="card category-keyboards position-relative">
        {isRefurbised && (
          <div
            className="position-absolute bg-red text-white rounded-pill"
            style={{
              top: 10,
              right: 10,
              whiteSpace: 'nowrap',
              fontSize: '0.8rem',
              padding: '1rem 0.5rem',        
            }}
          >
            -{Math.round(100 - (product.refurbished.price / product.price) * 100)}%
          </div>
        )}
        <Link className="btn" href={productUrl} title="Product Details">
          <img src={product.image} className="img-fluid card-img-top" alt={product.name} />
        </Link>
        <figure className="heading text-center">
          <figcaption>
            <h2>
              <small>Das Keyboard</small>
              <br />
              {product.name}
              {isRefurbised && <span className="ms-1">(Certified Refurbished)</span>}
            </h2>
          </figcaption>
        </figure>
        <figcaption className="card-body d-flex flex-column">
          <h5 className="price">
            Starting at
            {isRefurbised && product.refurbished.price ? (
              <div className="mt-2">
                <span className="text-black text-decoration-line-through">{product.currency}{product.price}</span>
                <span className="text-red ms-2 fs-5">{product.currency}{product.refurbished.price}</span>
              </div>
            ) : (
              <span className="text-red ms-2">{product.currency}{product.price}</span>
            )}
          </h5>
          <p className="desc">{product.description}</p>
          <div className="tags">
            {tags.map(item => (
              <Link
                key={item.tag}
                href={`/products/category/mechanical-keyboards?filter=${item.filter}`}
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
