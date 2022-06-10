import type { VFC } from "react"
import { useRouter } from "next/router"
import accessories from '@data/accessories.json'
import AccessoryCard from "@components/accessory/AccessoryCard"
import { GetStaticPaths } from "next"

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

const AccessoryCommerce: VFC = () => {
  const router = useRouter()
  const { slug } = router.query
  const accessory = accessories.find(item => item.slug === slug)
  if (!accessory) {
    return null
  }
  return (
    <div className="container-boxed py-5">
      <div className="product-cards row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 mx-auto text-center">
        <div className="col mx-auto">
          <AccessoryCard accessory={accessory} />
        </div>
      </div>
    </div>
  )
}
export default AccessoryCommerce