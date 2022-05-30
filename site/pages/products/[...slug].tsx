import ProductDetail from "@components/product/ProductDetail"
import ProductList from "@components/product/ProductList"
import { useRouter } from "next/router"
import type { VFC } from "react"

const Products: VFC = () => {
  const router = useRouter()
  const { slug } = router.query
  if (slug && slug[0]) {
    // check if slug is a category
    const isCategory = slug[0].includes('category-')
    // check if slug is a product
    const isProduct = slug[0].includes('daskeyboard-')
    // handle category page
    if (isCategory) {
      const category = slug[0].replace('category-', '')
      return <ProductList category={category} />
    }
    // handle product detail page
    else if (isProduct) {
      const productSlug = slug[0]
      return <ProductDetail slug={productSlug} />
    }
  }
  return null
}

export default Products