/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from "react"
import { Product } from "@interfaces/product"
import s from './FrequentlyBoughtTogether.module.scss'
import accessories from '@data/accessories.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accessory } from "@interfaces/accessory"

interface Props {
  product: Product
}
const FrequentlyBoughtTogether: VFC<Props> = ({ product }) => {
  const [suggestions, setSuggestions] = useState<Accessory[]>([])
  useEffect(() => {
    setSuggestions([...accessories].sort(() => 0.5 - Math.random()).slice(0, 2))
  }, [])
  return (
    <>
      <h3 className="sidebar-title">Frequently Bought Together</h3>
      <div className="d-flex px-3">
        <img src={product.image} alt={product.name} className={s.thumb} />
        {suggestions.map(item => (
          <div key={item.id}>
            <FontAwesomeIcon icon='plus' size='sm' className="mx-3" />
            <img src={item.image} alt={item.name} className={s['suggestion-thumb']} />
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-4 ms-3">Add Selected to cart</button>
    </>
  )
}
export default FrequentlyBoughtTogether