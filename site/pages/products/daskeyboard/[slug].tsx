import { VFC } from "react"
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
import { convertProductVariantId } from "@lib/convert-ids"
import { scrollTop } from "@lib/scroll-top"
import { PageProps } from "@interfaces/pageProps"
import Schema from "@components/core/Schema"

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  let product = (products as Product[]).find(product => product.slug === params?.slug || product.slug === params?.slug?.replace(/^refurbished-/, ''))
  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  const isRefurbished = !!params?.slug && typeof params.slug === 'string' && /^refurbished-/g.test(params.slug)
  const { product: shopifyProduct } = await commerce.getProduct({
    variables: {
      slug: isRefurbished ? product.refurbished.handle : product.handle,
    }
  })
  if (shopifyProduct) {
    const variantId = convertProductVariantId(shopifyProduct.variants[0].id)
    if (variantId) {
      product.variantId = parseInt(variantId)
    }
    if (isRefurbished) {
      product.refurbished.price = shopifyProduct.price.value
    }
    else {
      product.price = shopifyProduct.price.value
    }
  }
  // build bodyClass per slug
  let bodyClass = 'product-page';
  let description = null;
  switch (params?.slug) {
    case 'model-s-pro':
      description = 'The Das Keyboard Model S Professional is a high-performance mechanical keyboard for badass typists. Constructed with Cherry MX mechanical switches, premium materials, two-port USB 3.0 hub and NKRO for the best typing experience.';
      break
    case 'model-s-pro-for-mac':
      description = 'The Das Keyboard Model S Professional for Mac is a high-performance mechanical keyboard designed for Mac. Constructed with Cherry MX mechanical switches, premium materials, two-port USB 3.0 hub and NKRO for the best typing experience.';
      break
    case '4q':
      bodyClass += ' keyboards q-series'
      break
    case '4-professional-for-mac':
      description = 'The Das Keyboard 4 Professional for Mac is a high-performance mechanical keyboard designed for the best Mac compatibility. Constructed with Cherry MX mechanical switches, aluminum top panel, two-port USB 3.0 hub and NKRO for the best typing experience.';
    case '4-professional':
      description = 'The Das Keyboard 4 Professional is a high-performance mechanical keyboard for badass typists. Constructed with Cherry MX mechanical switches, aluminum top panel, two-port USB 3.0 hub and NKRO for the best typing experience.';
    case '4-ultimate':
      bodyClass += ' four-series'
      description = 'The Das Keyboard 4 Ultimate is a completely blank mechanical keyboard for badass typists. Constructed with Cherry MX mechanical switches, aluminum top panel, two-port USB 3.0 hub and NKRO for the best typing experience.';
      break
    case '4c-tkl':
      bodyClass += ' keyboards'
      description = 'Limited Edition TKL design with PBT keycaps and Cherry MX';
      break
    case '5qs':
      bodyClass += ' keyboards q-series'
      break
    case 'prime-13':
      bodyClass += ' keyboards'
      description = 'Das Keyboard Prime 13, a minimalist, white-LED back-lit, Cherry MX, USB pass-through with extra-long braided cable, super-well built mechanical keyboard that sports a slick aluminum top panel.';
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
      description,
      image: product.image,
      bodyId: product.slug,
      bodyClass,
      product
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async ({ locales }) => {
  const paths: Array<{ params: { slug: string }, locale: string }> = []
  products.forEach(product => {
    if (locales) {
      for (const locale of locales) {
        paths.push({
          params: {
            slug: product.slug,
          },
          locale
        })
        paths.push({
          params: {
            slug: `refurbished-${product.slug}`,
          },
          locale
        })
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

interface Props extends PageProps {
  product: Product
}
const ProductDetail: VFC<Props> = ({ title, product, fullUrl, baseUrl }) => {
  const router = useRouter()

  let ProductComponent: VFC<{ product: typeof product, isRefurbished: boolean }> = () => null
  let slug = router.query.slug
  const isRefurbished = !!slug && typeof slug === 'string' && /^refurbished-/g.test(slug)
  if (isRefurbished) {
    slug = (slug as string).replace(/^refurbished-/g, '')
  }
  switch (slug) {
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
      {/* breadcrumb schema */}
      <Schema data={{
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: {
              '@type': 'Thing',
              '@id': baseUrl,
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${isRefurbished ? 'Refurbished ' : ''}Mechanical Keyboard`,
            item: {
              '@type': 'Thing',
              '@id': `${baseUrl}/products/category/mechanical-keyboards`,
            }
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: (isRefurbished ? 'Refurbished ' : '') + product.name,
            item: {
              '@type': 'Thing',
              '@id': fullUrl,
            }
          }
        ]
      }} />
      {/* product schema */}
      <Schema data={{
        '@type': 'Product',
        name: product.collection + ' ' + (isRefurbished ? 'Refurbished ' : '') + product.name,
        sku: (isRefurbished ? 'refurbished-' : '') + product.name,
        description: product.description,
        image: `${baseUrl}${product.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Das Keyboard',
        },
        offers: {
          '@type': 'Offer',
          sku: (isRefurbished ? 'refurbished-' : '') + product.name,
          priceCurrency: product.currency,
          price: product.price,
          itemCondition: `https://schema.org/${isRefurbished ? 'Refurbished' : 'New'}Condition`,
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Das Keyboard',
          }
        }
      }} />
      {/* page content */}
      <PageTitle
        title={title}
        type="product"
        product={{
          ...product,
          canBuy: true,
          canDownload: product.software || false,
        }}
        isRefurbished={isRefurbished}
        onClickTitle={scrollTop}
      />

      <ProductComponent product={product} isRefurbished={isRefurbished} />
    </>
  )
}
export default ProductDetail