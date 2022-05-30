import ProductList from "@components/product/ProductList"
import { useRouter } from "next/router"
import type { VFC } from "react"

const Products: VFC = () => {
  return <ProductList category="mechanical-keyboards" />
}

export default Products