import type { VFC } from "react"
import products from '@data/products.json'
import ProductList from "@components/product/ProductList"
import { Product } from "@interfaces/product"
import { PageProps } from "@interfaces/pageProps"

export async function getStaticProps() {
  return {
    props: {
      title: 'Certified Refurbished Mechanical Keyboards',
      description: 'All Certified Refurbished orders are non-refundable. Certified Refurbished products are pre-owned, certified to be free of defects, and come with a 30-day limited hardware warranty. If the product is defective or does not work, a replacement will be sent. Please refer to our guarantee page at www.daskeyboard.com/guarantee',
      bodyId: 'mechanicalKeyboards',
      bodyClass: 'product-listing keyboards has-parent',
    },
  }
}

const RefurbishedMechanicalKeyboards: VFC<PageProps> = (pageProps) => {
  return <ProductList
    pageProps={pageProps}
    title={`<small>Certified Refurbished</small><br />Mechanical Keyboards`}
    products={products as Product[]}
    isRefurbised
  />
}

export default RefurbishedMechanicalKeyboards