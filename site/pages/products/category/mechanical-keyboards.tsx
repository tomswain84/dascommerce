import ProductList from "@components/product/ProductList"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      bodyId: 'mechanicalKeyboards',
      bodyClass: 'product-listing keyboards has-parent',
    },
  }
}

const MechanicalKeyboards: VFC = () => {
  return <ProductList
    title={`<small>Mechanical</small><br />Keyboards`}
  />
}

export default MechanicalKeyboards