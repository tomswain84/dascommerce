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

const Products: VFC = () => {
  return <ProductList
    category="mechanical-keyboards"
    title={`<small>Mechanical</small><br />Keyboards`}
  />
}

export default Products