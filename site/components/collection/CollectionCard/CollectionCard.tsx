/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTrans from "lang/useTrans"
import type { VFC } from "react"

interface Props {
  name: string,
  filter: string,
  image: string
}
const CollectionCard: VFC<{ collection: Props }> = ({ collection }) => {
  const { name, filter, image } = collection
  const { say, $html } = useTrans()
  return (
    <div className="col">
      <figure className="heading card">
        <div className="card-body">
          <img src={image} className="card-img" alt={name} />
          <figcaption className="card-img-overlay">
            <h1 className="card-title" dangerouslySetInnerHTML={{
              __html: `
              <small>Das Keyboard</small>
              <br />${name}
            `}}
            />
            <Link
              href={`/products/category/mechanical-keyboards?filter=${filter}`}
              className="btn btn-outline-primary stretched-link"
            >
              <span>
                <span dangerouslySetInnerHTML={$html('home_collection_card_button')} />
                <FontAwesomeIcon icon={['far', 'solid']} className="text-red ms-4" />
              </span>
            </Link>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
export default CollectionCard