import type { VFC } from "react"
import products from '@data/products.json'
import ProductList from "@components/product/ProductList"
import { Product } from "@interfaces/product"

export async function getStaticProps() {
  return {
    props: {
      title: 'Mechanical Keyboards',
      description: 'Das Keyboard uses award-winning technology in every mechanical keyboard produced. Delivering an unmatched typing experience with premium mechanical keyboards.',
      bodyId: 'mechanicalKeyboards',
      bodyClass: 'product-listing keyboards has-parent',
    },
  }
}

const MechanicalKeyboards: VFC = () => {
  return <ProductList
    title={`<small>Mechanical</small><br />Keyboards`}
    products={products as Product[]}
  />
}

export default MechanicalKeyboards