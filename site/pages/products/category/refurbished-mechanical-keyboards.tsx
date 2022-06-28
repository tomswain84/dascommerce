import type { VFC } from "react"
import products from '@data/products.json'
import ProductList from "@components/product/ProductList"
import { Product } from "@interfaces/product"

export async function getStaticProps() {
  return {
    props: {
      title: 'Certified Refurbished Mechanical Keyboards',
      bodyId: 'mechanicalKeyboards',
      bodyClass: 'product-listing keyboards has-parent',
    },
  }
}

const RefurbishedMechanicalKeyboards: VFC = () => {
  return <ProductList
    title={`<small>Certified Refurbished</small><br />Mechanical Keyboards`}
    products={products as Product[]}
    isRefurbised
  />
}

export default RefurbishedMechanicalKeyboards