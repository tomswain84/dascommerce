import Image from "next/image"
import Link from "next/link"
import type { VFC } from "react"

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
  return (
    <div className="col-sm-6 p-2">
      <div className="card p-4 text-center border-secondary">
        <Image src={product.image} layout="intrinsic" width={'100%'} height={300} unoptimized={true} objectFit="cover" alt={product.name} />
        <hr />
        <h6>{product.collection}</h6>
        <h4>{product.name}</h4>
        <h4>STARTING AT {product.currency}{product.price}</h4>
        <p>{product.description}</p>
        <hr />
        <div className="d-flex flex-wrap justify-content-center">
          {product.tags.map(t => (<span key={t} className="rounded-pill px-2 border border-secondary text-nowrap m-1">{t}</span>))}
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-start">
            <strong>{product.keystroke}</strong>
            <p>KEYSTROKE</p>
          </div>
          <div className="d-flex flex-column align-items-end">
            <strong>{product.switch}</strong>
            <p>SWITCHBRAND</p>
          </div>
        </div>
        <Link href={`/products/${product.slug}`}>PRODUCT DETAILS</Link>
      </div>
    </div>
  )
}
export default ProductCard