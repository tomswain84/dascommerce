/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"
import products from '@data/products.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import s from './BestSelling.module.scss'

interface Props {

}
const BestSelling: VFC<Props> = () => {
  const bestSellingProducts = products.filter(prod => prod.tags.includes('bestsellers'))
  return (
    <>
      <h3 className="sidebar-title">Best Selling Products</h3>
      <div className="d-flex flex-column px-3">
        {bestSellingProducts.map(prod => (
          <div key={prod.id} className='d-flex align-items-center'>
            <div>
              <img src={prod.image} alt={prod.name} className={s.thumb} />
            </div>
            <div className="d-flex flex-column ms-3">
              <h4 className="fw-normal fs-6 text-capitalize">Das Keyboard {prod.name.toLowerCase()}</h4>
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <FontAwesomeIcon key={i} icon='star' className="text-red" size="sm" />
                ))}
              </div>
              <h5 className="price mt-2">{prod.currency}{prod.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default BestSelling