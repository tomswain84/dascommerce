/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import type { VFC } from "react"

interface Props {
  name: string,
  filter: string,
  image: string
}
const CollectionCard: VFC<{ collection: Props }> = ({ collection }) => {
  const { name, filter, image } = collection
  return (
    <div className="col">
      <figure className="heading card">
        <div className="card-body">
          <img src={image} className="card-img" alt={name} />
          <figcaption className="card-img-overlay">
            <h1 className="card-title">
              <small>Das Keyboard</small>
              <br />{name}
            </h1>
            <Link
              href={`/products/category-mechanical-keyboards?filter=${filter}`}
              className="btn btn-outline-primary stretched-link"
            >
              <span>
                View Keyboards
                <i className="fa-solid fa-plus text-red ms-4" />
              </span>
            </Link>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
export default CollectionCard