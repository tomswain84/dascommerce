import type { VFC } from "react"
import { useRouter } from "next/router"
import { Product } from "@interfaces/product"
import { GetStaticPaths, GetStaticPropsContext } from "next"
import commerce from '@lib/api/commerce'
import products from '@data/products.json'
import PageTitle from "@components/core/PageTitle"

import D4Q from "@components/daskeyboard/4Q"
import D4ProfessionalForMac from "@components/daskeyboard/4ProfessionalForMac"
import D4Professional from "@components/daskeyboard/4Professional"
import D4Ultimate from "@components/daskeyboard/4Ultimate"
import D4CTkl from "@components/daskeyboard/4CTkl"
import D5QS from "@components/daskeyboard/5QS"
import ModelSProForMac from "@components/daskeyboard/ModelSProForMac"
import ModelSPro from "@components/daskeyboard/ModelSPro"
import Prime13 from "@components/daskeyboard/Prime13"
import X50Q from "@components/daskeyboard/X50Q"

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  let product = (products as Product[]).find(product => product.slug === params?.slug)
  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  const { product: shopifyProduct } = await commerce.getProduct({
    variables: {
      slug: product.handle,
    }
  })
  if (shopifyProduct) {
    const variantId = Buffer.from(shopifyProduct.variants[0].id.toString(), 'base64').toString('ascii').replace('gid://shopify/ProductVariant/', '')
    if (variantId) {
      product.variantId = parseInt(variantId)
    }
    product.price = shopifyProduct.price.value
  }
  // build bodyClass per slug
  let bodyClass = 'product-page';
  switch (params?.slug) {
    case '4q':
      bodyClass += ' keyboards q-series'
      break
    case '4-professional-for-mac':
    case '4-professional':
    case '4-ultimate':
      bodyClass += ' four-series'
      break
    case '4c-tkl':
      bodyClass += ' keyboards'
      break
    case '5qs':
      bodyClass += ' keyboards q-series'
      break
    case 'prime-13':
      bodyClass += ' keyboards'
      break
    case 'x50q':
      bodyClass += ' keyboards q-series has-parent'
      break
    default:
      break
  }
  return {
    props: {
      title: `Das Keyboard ${product.name}`,
      bodyId: product.slug,
      bodyClass,
      product
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (params) => {
  const paths = products.map(product => ({
    params: {
      slug: product.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

interface Props {
  title: string
  bodyId: string
  bodyClass: string
  product: Product
}
const ProductDetail: VFC<Props> = ({ title, product }) => {
  const router = useRouter()

  let ProductComponent: VFC = () => null
  switch (router.query.slug) {
    case '4q':
      ProductComponent = D4Q
      break;
    case '4-professional-for-mac':
      ProductComponent = D4ProfessionalForMac
      break
    case '4-professional':
      ProductComponent = D4Professional
      break
    case '4-ultimate':
      ProductComponent = D4Ultimate
      break
    case '4c-tkl':
      ProductComponent = D4CTkl
      break
    case '5qs':
      ProductComponent = D5QS
      break
    case 'model-s-pro-for-mac':
      ProductComponent = ModelSProForMac
      break
    case 'model-s-pro':
      ProductComponent = ModelSPro
      break
    case 'prime-13':
      ProductComponent = Prime13
      break
    case 'x50q':
      ProductComponent = X50Q
      break
    default:
      break;
  }
  return (
    <>
      <PageTitle
        title={title}
        type="product"
        product={{
          ...product,
          canBuy: true,
          canDownload: product.software || false,
        }}
      />

      <ProductComponent />
    </>
  )
}
export default ProductDetail