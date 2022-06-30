import Link from "@components/core/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

const AccessoryCategories: VFC = () => {
  const categories = [
    {
      name: 'Palm Rests',
      filter: 'palmRests',
      image: '/images/cat-accessories.png'
    },
    {
      name: 'Keycaps',
      filter: 'keycaps',
      image: '/images/cat-keycaps.png'
    },
    {
      name: 'Parts',
      filter: 'parts',
      image: '/images/cat-parts.png'
    },
    {
      name: 'Mouse Pads',
      filter: 'mousePads',
      image: '/images/cat-mousepads.png'
    },
  ]
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-2">
        {categories.map((category, index) => (
          <div key={index} className="col">
            <figure className="heading card">
              <div className="card-body">
                <img src={category.image} className="card-img" alt={category.name} />
                <figcaption className="card-img-overlay">
                  <h2 className="card-title">
                    <small></small>
                    <br />{category.name}
                  </h2>
                  <Link className="btn btn-outline-primary stretched-link" href={`/products/category/accessories#${category.filter}`} title={`View ${category.name}`}>
                    <span>
                      View All
                      <i><FontAwesomeIcon icon='plus' className="text-red ms-4" /></i>
                    </span>
                  </Link>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </>
  )
}
export default AccessoryCategories