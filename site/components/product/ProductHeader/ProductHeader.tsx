import type { VFC } from "react"

interface Props {
  title: string
  price: number
  currency: '$'
  canBuy: boolean
}
const ProductHeader: VFC<Props> = ({ title, price, currency, canBuy }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <h1>{title}</h1>
          <p>{currency}{price}</p>
        </div>
        <div>
          {canBuy && (
            <button className="btn btn-primary rounded-pill">BUY NOW</button>
          )}
        </div>
      </div>
    </>
  )
}
export default ProductHeader