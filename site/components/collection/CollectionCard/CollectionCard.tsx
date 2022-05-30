/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import type { VFC } from "react"

interface Props {
  name: string,
  filter: string,
  image: string
}
const CollectionCard: VFC<{ collection: Props }> = ({ collection }) => {
  const { name, filter, image } = collection
  return (
    <div className="rounded">
      <Link href={`/products/category-mechanical-keyboards?filter=${filter}`} passHref>
        <div>
          <img src={image} alt={name} className='img-fluid' />
          <div className="d-flex flex-column mt-2">
            <span className="card-title">DAS KEYBOARD</span>
            <span className="card-text">{name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CollectionCard