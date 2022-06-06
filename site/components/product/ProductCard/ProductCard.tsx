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


    // <div className="col-sm-6 p-2">
    //   <div className="card p-4 text-center border-secondary">
    //     <img className="img-fluid" src={product.image} alt={product.name} />
    //     <hr />
    //     <h6>{product.collection}</h6>
    //     <h4>{product.name}</h4>
    //     <h4>STARTING AT {product.currency}{product.price}</h4>
    //     <p>{product.description}</p>
    //     <hr />
    //     <div className="d-flex flex-wrap justify-content-center">
    //       {product.tags.map(t => (<span key={t} className="rounded-pill px-2 border border-secondary text-nowrap m-1">{t}</span>))}
    //     </div>
    //     <hr />
    //     <div className="d-flex justify-content-between">
    //       <div className="d-flex flex-column align-items-start">
    //         <strong>{product.keystroke}</strong>
    //         <p>KEYSTROKE</p>
    //       </div>
    //       <div className="d-flex flex-column align-items-end">
    //         <strong>{product.switch}</strong>
    //         <p>SWITCHBRAND</p>
    //       </div>
    //     </div>
    //     <Link href={`/products/${product.slug}`}>PRODUCT DETAILS</Link>
    //   </div>
    // </div>
  )
}
export default ProductCard
