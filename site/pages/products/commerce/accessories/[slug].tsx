import type { VFC } from "react"
import { useRouter } from "next/router"
import accessories from '@data/accessories.json'
import AccessoryCard from "@components/accessory/AccessoryCard"
import { GetStaticPaths } from "next"
import { PageProps } from "@interfaces/pageProps"
import Schema from "@components/core/Schema"

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = accessories.map(accessory => ({
    params: {
      slug: accessory.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Keyboard Accessories',
      bodyId: 'keyboardAccessories',
      bodyClass: 'product-listing accessories',
    },
  }
}

const AccessoryCommerce: VFC<PageProps> = ({ fullUrl, baseUrl }) => {
  const router = useRouter()
  const { slug } = router.query
  const accessory = accessories.find(item => item.slug === slug)
  if (!accessory) {
    return null
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
            name: `Accessories`,
            item: {
              '@type': 'Thing',
              '@id': `${baseUrl}/products/category/accessories`,
            }
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: accessory.name,
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
        name: accessory.name,
        sku: accessory.name,
        image: `${baseUrl}${accessory.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Das Keyboard',
        },
        offers: {
          '@type': 'Offer',
          sku: accessory.name,
          priceCurrency: accessory.currency,
          price: accessory.price,
          itemCondition: `https://schema.org/NewCondition`,
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Das Keyboard',
          }
        }
      }} />
      {/* page content */}
      <div className="container-boxed py-5">
        <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 mx-auto text-center">
          <div className="col mx-auto">
            <AccessoryCard accessory={accessory} />
          </div>
        </div>
      </div>
    </>
  )
}
export default AccessoryCommerce