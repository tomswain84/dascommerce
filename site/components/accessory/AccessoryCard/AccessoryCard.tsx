/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import type { VFC } from "react"

interface Accessory {
  id: number
  slug: string
  name: string
  price: number
  currency: string
  category: string
  image: string
}
const AccessoryCard: VFC<{ accessory: Accessory }> = ({ accessory }) => {
  const buyUrl = `/products/commerce/accessories/${accessory.slug}`
  return (
    <figure className="card category-accessories">
      <Link className="btn" href={buyUrl} title="Product Details">
        <img src={accessory.image} className="img-fluid card-img-top" alt={accessory.name} />
      </Link>
      <figure className="heading text-center">
        <figcaption>
          <h2>{accessory.name}</h2>
        </figcaption>
      </figure>
      <figcaption className="card-body d-flex flex-column">
        <h5 className="price">
          Only
          <span className="text-red">
            {accessory.currency}{accessory.price}
          </span>
        </h5>
      </figcaption>
      <div className="card-footer">
        <Link className="btn" href={buyUrl} title="Buy Now">Buy Now</Link>
      </div>
    </figure>
  )
}
export default AccessoryCard